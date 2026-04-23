import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SEASON = "2025-2026";
const BASE_URL = "https://cluster.england-rfu.com/fixtures-and-results/full-matches";

const teams = [
  { key: "first", label: "Mens 1st XV", teamId: 11078, preferredTableGroupId: 66494 },
  { key: "second", label: "Mens 2nd XV", teamId: 11079, preferredTableGroupId: 74138 },
  { key: "women", label: "Womens XV", teamId: 128506, preferredTableGroupId: 66876 },
];

const buildUrl = (teamId) => `${BASE_URL}?season=${SEASON}&teamId=${teamId}`;

function getOpponentAndVenue(match, teamId) {
  const isHome = match.homeTeam?.commonId === teamId;
  const opponent = isHome ? match.awayTeam : match.homeTeam;

  return {
    home: isHome,
    opponent: opponent?.name ?? "Unknown opponent",
  };
}

function formatResultNote(match) {
  if (!match.matchNotSetup) {
    return undefined;
  }

  if (match.time === "HWO" || match.time === "AWO" || match.time === "P - P") {
    return match.time;
  }

  return "Match not set up";
}

function normalizeMatch(match, teamConfig) {
  const { home, opponent } = getOpponentAndVenue(match, teamConfig.teamId);
  const note = formatResultNote(match);
  const isResult = match.type === "result";
  const ourTeam = home ? match.homeTeam : match.awayTeam;
  const theirTeam = home ? match.awayTeam : match.homeTeam;
  const item = {
    _id: `fixture.rfu.${teamConfig.key}.${match.id}`,
    opponent,
    date: match.date,
    home,
  };

  if (isResult && Number.isFinite(ourTeam?.score) && Number.isFinite(theirTeam?.score)) {
    item.ourScore = ourTeam.score;
    item.theirScore = theirTeam.score;
  }

  if (note) {
    item.resultNote = note;
  }

  return item;
}

function normalizeTableRow(row, teamConfig, table) {
  return {
    _id: `leagueTable.rfu.${teamConfig.key}.${table.groupId}.${row.teamId}`,
    name: row.teamName,
    position: row.tablePosition,
    played: row.played,
    won: row.won,
    lost: row.lost,
    points: row.points,
  };
}

const sortByDateAsc = (a, b) => new Date(a.date) - new Date(b.date);
const sortByDateDesc = (a, b) => new Date(b.date) - new Date(a.date);

function dedupeById(items) {
  return Array.from(new Map(items.map((item) => [item._id, item])).values());
}

function pickLeagueTable(payload, teamConfig) {
  const tables = payload.leagueTables?.tables ?? [];

  return (
    tables.find((table) => table.groupId === teamConfig.preferredTableGroupId) ??
    tables.find((table) => table.teams?.some((row) => row.teamId === teamConfig.teamId)) ??
    null
  );
}

async function fetchTeamData(teamConfig) {
  const response = await fetch(buildUrl(teamConfig.teamId));

  if (!response.ok) {
    throw new Error(`RFU request failed for ${teamConfig.label}: ${response.status} ${response.statusText}`);
  }

  const payload = await response.json();
  const fixtures = dedupeById(
    (payload.fixtures ?? []).flatMap((group) =>
      (group.matches ?? []).map((match) => normalizeMatch(match, teamConfig))
    )
  ).sort(sortByDateAsc);

  const results = dedupeById(
    (payload.results ?? []).flatMap((group) =>
      (group.matches ?? []).map((match) => normalizeMatch(match, teamConfig))
    )
  ).sort(sortByDateDesc);

  const selectedTable = pickLeagueTable(payload, teamConfig);
  const leagueTable = (selectedTable?.teams ?? [])
    .map((row) => normalizeTableRow(row, teamConfig, selectedTable))
    .sort((a, b) => a.position - b.position);

  return {
    label: teamConfig.label,
    sourceUrl: buildUrl(teamConfig.teamId),
    fixtures,
    results,
    leagueTable,
  };
}

async function main() {
  const seniorData = {};

  for (const team of teams) {
    seniorData[team.key] = await fetchTeamData(team);
  }

  const output = `export default ${JSON.stringify(
    {
      season: SEASON,
      syncedAt: new Date().toISOString(),
      teams: seniorData,
    },
    null,
    2
  )};\n`;

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const outputDir = path.resolve(__dirname, "..", "src", "data");
  const outputFile = path.join(outputDir, "seniorRfuData.js");

  await mkdir(outputDir, { recursive: true });
  await writeFile(outputFile, output, "utf8");

  console.log(`Wrote senior RFU data to ${outputFile}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
