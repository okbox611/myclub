export default {
  name: "leagueTable",
  title: "League Table",
  type: "document",
  fields: [
    {
      name: "team",
      title: "Team Name",
      type: "string",
    },
    {
      name: "position",
      title: "Position",
      type: "number",
    },
    {
      name: "played",
      title: "Played (P)",
      type: "number",
    },
    {
      name: "won",
      title: "Won (W)",
      type: "number",
    },
    {
      name: "lost",
      title: "Lost (L)",
      type: "number",
    },
    {
      name: "points",
      title: "Points (Pts)",
      type: "number",
    },
  ],

  preview: {
    select: {
      title: "team",
      subtitle: "position",
    },
  },
};