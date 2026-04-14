import { useRef } from "react";
import fixtures from "../data/fixtures";

export default function FixturesSlider() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const amount = 300;
    if (direction === "left") {
      scrollRef.current.scrollLeft -= amount;
    } else {
      scrollRef.current.scrollLeft += amount;
    }
  };

  return (
    <div style={{ margin: "60px 0" }}>
      
      {/* Title */}
      <h2 style={{ color: "#FFC107", marginBottom: "20px" }}>
        Fixtures & Results
      </h2>

      {/* Wrapper */}
      <div style={{ position: "relative" }}>
        
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          style={{
            position: "absolute",
            left: "-20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "#111",
            color: "#FFC107",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        >
          ‹
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            scrollBehavior: "smooth",
            paddingBottom: "10px",
          }}
        >
          {fixtures.map((fixture, i) => {
            const [homeScore, awayScore] = fixture.score
              ? fixture.score.split("-").map(Number)
              : [null, null];

            const isWin =
              fixture.score &&
              (fixture.home
                ? homeScore > awayScore
                : awayScore > homeScore);

            return (
              <div
                key={i}
                style={{
                  minWidth: "260px",
                  background: "#111",
                  borderRadius: "12px",
                  padding: "20px",
                  border: "1px solid #222",
                }}
              >
                {/* Home/Away */}
                <p style={{ color: "#FFC107", fontSize: "12px" }}>
                  {fixture.home ? "HOME" : "AWAY"}
                </p>

                {/* Date */}
                <h2 style={{ margin: "5px 0" }}>
                  {fixture.date}
                </h2>

                {/* Opponent */}
                <p style={{ marginTop: "10px", color: "#aaa" }}>
                  Opponent
                </p>
                <h3>{fixture.opponent}</h3>

                {/* Score */}
                {fixture.score && (
                  <div
                    style={{
                      marginTop: "15px",
                      background: "#000",
                      padding: "10px",
                      borderRadius: "6px",
                      textAlign: "center",
                      color: isWin ? "#4CAF50" : "#f44336",
                      fontWeight: "bold",
                    }}
                  >
                    {fixture.score}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          style={{
            position: "absolute",
            right: "-20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "#111",
            color: "#FFC107",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        >
          ›
        </button>
      </div>
    </div>
  );
}