import { useEffect, useState } from "react";
import sanityClient from "../sanityClient";

export default function FixturesList({ team }) {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    const query = `*[
      _type == "fixture" &&
      team == "${team}" &&
      date >= now()
    ] | order(date asc)`;

    sanityClient.fetch(query).then((data) => {
      setFixtures(data);
    });
  }, [team]);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2 style={{ color: "#f5f5f5", marginBottom: "15px" }}>
        Upcoming Fixtures
      </h2>

      {fixtures.length === 0 && (
        <p style={{ color: "#aaa" }}>No upcoming fixtures</p>
      )}

      {fixtures.map((game) => (
        <div key={game._id} style={cardStyle}>
          <p style={{ color: "#ddd", margin: 0 }}>
            {game.home ? "Home" : "Away"} vs {game.opponent}
          </p>
          <p style={{ color: "#aaa", margin: 0 }}>
            {new Date(game.date).toLocaleDateString("en-GB")}
          </p>
        </div>
      ))}
    </div>
  );
}

const cardStyle = {
  background: "#111",
  border: "1px solid #222",
  padding: "15px",
  marginBottom: "10px",
};