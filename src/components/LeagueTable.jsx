import { useEffect, useState } from "react";
import sanityClient from "../sanityClient";

export default function LeagueTable() {
  const [table, setTable] = useState([]);

  useEffect(() => {
    const query = `*[_type == "leagueTable"] | order(points desc, won desc)`

    sanityClient.fetch(query).then((data) => {
      console.log("League table data:", data); // 👈 DEBUG
      setTable(data);
    });
  }, []);

  return (
    <div style={container}>
      <h3 style={title}>League Table</h3>

      {table.length === 0 && (
        <p style={{ color: "#aaa" }}>No table data</p>
      )}

      <table style={tableStyle}>
        <thead>
          <tr>
            <th>#</th>
            <th style={{ textAlign: "left" }}>Team</th>
            <th>P</th>
            <th>W</th>
            <th>L</th>
            <th>Pts</th>
          </tr>
        </thead>

        <tbody>
          {table.map((team) => (
            <tr
              key={team._id}
              style={
                team.name === "Jarrovians"
                  ? highlightRow
                  : row
              }
            >
              <td>{team.position}</td>
              <td style={{ textAlign: "left" }}>{team.name}</td>
              <td>{team.played}</td>
              <td>{team.won}</td>
              <td>{team.lost}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// STYLES
const container = {
  background: "#111",
  border: "1px solid #222",
  padding: "15px",
  borderRadius: "10px",
};

const title = {
  color: "#FFC107",
  marginBottom: "10px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  color: "#ddd",
  fontSize: "14px",
};

const row = {
  borderBottom: "1px solid #222",
  textAlign: "center",
};

const highlightRow = {
  ...row,
  background: "#222",
  color: "#FFC107",
  fontWeight: "bold",
};