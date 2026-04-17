import { useEffect, useState } from "react";
import sanityClient from "../sanityClient";

export default function ResultsList({ team }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const query = `*[
      _type == "fixture" &&
      team == "${team}" &&
      date < now() &&
      defined(ourScore) &&
      defined(theirScore)
    ] | order(date desc)`;

    sanityClient.fetch(query).then(setResults);
  }, [team]);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2 style={{ color: "#f5f5f5", marginBottom: "15px" }}>
        Results
      </h2>

      {results.length === 0 && (
        <p style={{ color: "#aaa" }}>No results yet</p>
      )}

      {results.map((game) => {
        const isWin = game.ourScore > game.theirScore;
        const isLoss = game.ourScore < game.theirScore;

        const resultColor = isWin
          ? "#4caf50"   // green
          : isLoss
          ? "#f44336"   // red
          : "#ddd";     // draw

        return (
          <div key={game._id} style={cardStyle}>
            <p style={{ color: "#ddd", margin: 0 }}>
              {game.home ? "Home" : "Away"} vs {game.opponent}
            </p>

            <p style={{ ...scoreStyle, color: resultColor }}>
              {game.ourScore} - {game.theirScore}
            </p>

            <p style={{ color: "#aaa", margin: 0 }}>
              {new Date(game.date).toLocaleDateString("en-GB")}
            </p>
          </div>
        );
      })}
    </div>
  );
}

// ========================
// STYLES
// ========================

const cardStyle = {
  background: "#111",
  border: "1px solid #222",
  padding: "15px",
  marginBottom: "10px",
  borderRadius: "8px",
};

const scoreStyle = {
  fontSize: "18px",
  fontWeight: "600",
  margin: "5px 0",
};