import { useRoute } from "wouter";

export default function Teams() {
  const [match, params] = useRoute("/teams/:team");

  return (
    <div>
      <h1>Teams</h1>

      {match ? (
        <h2>{params.team}</h2>
      ) : (
        <p>Select a team from the dropdown</p>
      )}
    </div>
  );
}