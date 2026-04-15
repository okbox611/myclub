import aaron from "../assets/aaron spon.jpg";
import archie from "../assets/archie spon.jpg";
import dave from "../assets/dave spon.jpg";
import deacon from "../assets/deacon spon.jpg";
import george from "../assets/george spon.jpg";
import harry from "../assets/harry spon.jpg";
import jamie from "../assets/jamie spon.jpg";
import joe from "../assets/joe spon.jpg";
import jonny from "../assets/jonny spon.jpg";
import lewis from "../assets/lewis spon.jpg";
import peggie from "../assets/peggie spon.jpg";
import pocks from "../assets/pocks spon.jpg";
import rhys from "../assets/rhys spon.jpg";
import ross from "../assets/ross spon.jpg";
import seb from "../assets/seb spon.jpg";
import tom from "../assets/tom spon.jpg";
import willbo from "../assets/will bo spon.jpg";
import will from "../assets/will spon.jpg";
import willw from "../assets/will w spon.jpg";

export default function Sponsors() {
  const playerSponsors = [
    aaron, archie, dave, deacon, george,
    harry, jamie, joe, jonny, lewis,
    peggie, pocks, rhys, ross, seb,
    tom, willbo, will, willw
  ];

  return (
    <div>

{/* HERO */}
<div
  style={{
    height: "300px",
    background: "linear-gradient(180deg, #111 0%, #000 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "2px solid #FFC107",
    position: "relative",
  }}
>
  <h1
    style={{
      color: "#FFC107",
      fontSize: "clamp(32px, 5vw, 52px)",
      letterSpacing: "3px",
      fontWeight: "700",
      textTransform: "uppercase",
      textShadow: "0 4px 20px rgba(255,193,7,0.4)",
    }}
  >
    Our Sponsors
  </h1>
</div>

      {/* CONTENT */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px"
      }}>
        <p style={{
          color: "#ccc",
          lineHeight: "1.8",
          maxWidth: "800px"
        }}>
          We are incredibly grateful to our sponsors who support Jarrovians RUFC.
          Their backing helps fund equipment, facilities, and the continued growth
          of the club across all levels.
        </p>

        {/* PLAYER SPONSORS */}
        <h2 style={{
          color: "#FFC107",
          marginTop: "40px",
          marginBottom: "20px"
        }}>
          Player Sponsors
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px"
        }}>
          {playerSponsors.map((img, i) => (
            <div
              key={i}
              style={{
                background: "#111",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid #222",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px) scale(1.03)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(255,193,7,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <img
                  src={img}
                  alt="Player Sponsor"
                  style={{
                    width: "100%",
                    height: "260px",
                    objectFit: "cover",
                    transition: "0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>

              {/* Optional overlay label */}
              <div style={{
                padding: "10px",
                textAlign: "center",
                fontSize: "13px",
                color: "#FFC107",
                letterSpacing: "0.5px"
              }}>
                Player Sponsor
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}