import { useRoute, Link } from "wouter";

// Vets
import terry from "../assets/terry.jfif";
import vets1 from "../assets/vets1.jfif";
import vets2 from "../assets/vets2.jfif";
import vets3 from "../assets/vets3.jfif";
import vets4 from "../assets/vets4.jfif";
import vets5 from "../assets/vets5.jfif";

// 1st Team
import firstTeam from "../assets/1st-team.jpg";
import firstCap from "../assets/1s-cap.jpg";

// 2nd Team
import secondTeam from "../assets/2nd-team.jpg";
import secondCap from "../assets/2s-cap.jpg";

// Womens
import ladiesTeam from "../assets/ladies.jpg";
import ladiesCap from "../assets/ladies-cap.jpg";

// ========================
// CARD STYLES
// ========================
const cardStyle = (img) => ({
  height: "200px",
  backgroundImage: `url(${img})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "12px",
  position: "relative",
  cursor: "pointer",
  overflow: "hidden",
  transition: "0.3s ease",
});

const overlayStyle = {
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#FFC107",
  fontSize: "20px",
};

// ========================
// COMPONENT
// ========================
export default function Teams() {
  const [match, params] = useRoute("/teams/:team");
  const team = params?.team;

  // ========================
  // 1ST TEAM
  // ========================
  if (team === "mens1") {
    return (
      <div>
        <div style={{
          backgroundImage: `url(${firstTeam})`,
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }} />
          <h1 style={{ position: "relative", color: "#FFC107", fontSize: "48px" }}>
            1st XV
          </h1>
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "30px" }}>
          <p style={{ color: "#ddd", lineHeight: "1.8", maxWidth: "800px" }}>
            Jarrovians RUFC 1st XV compete in Counties 2 Durham & Northumberland,
            representing the highest level of rugby within the club. A competitive
            squad combining experience and youth, consistently performing across
            the North East.
          </p>

          <h2 style={{ color: "#FFC107", marginTop: "40px" }}>Leadership Team</h2>

          <img
            src={firstCap}
            alt="1st Team Captains"
            style={{ width: "100%", maxWidth: "500px", borderRadius: "10px", marginTop: "20px" }}
          />

          <p style={{ color: "#aaa", marginTop: "10px" }}>
            Captain: Deacon Wallace | Vice Captain: James Pocklington
          </p>
        </div>
      </div>
    );
  }

  // ========================
  // 2ND TEAM
  // ========================
  if (team === "mens2") {
    return (
      <div>
        <div style={{
          backgroundImage: `url(${secondTeam})`,
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }} />
          <h1 style={{ position: "relative", color: "#FFC107", fontSize: "48px" }}>
            2nd XV
          </h1>
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "30px" }}>
          <p style={{ color: "#ddd", lineHeight: "1.8", maxWidth: "800px" }}>
            The 2nd XV plays a key role in player development and squad depth,
            offering competitive rugby while supporting progression into the 1st XV.
          </p>

          <h2 style={{ color: "#FFC107", marginTop: "40px" }}>Leadership Team</h2>

          <img
            src={secondCap}
            alt="2nd Team Captains"
            style={{ width: "100%", maxWidth: "500px", borderRadius: "10px", marginTop: "20px" }}
          />

          <p style={{ color: "#aaa", marginTop: "10px" }}>
            Captain: Aaron Keelan | Vice Captain: Joe Watson
          </p>
        </div>
      </div>
    );
  }

  // ========================
  // WOMENS TEAM
  // ========================
  if (team === "womens") {
    return (
      <div>
        <div style={{
          backgroundImage: `url(${ladiesTeam})`,
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }} />
          <h1 style={{ position: "relative", color: "#FFC107", fontSize: "48px" }}>
            WOMENS XV
          </h1>
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "30px" }}>
          <p style={{ color: "#ddd", lineHeight: "1.8", maxWidth: "800px" }}>
            The Jarrovians Women’s XV is a growing and inclusive section of the club,
            offering competitive and social rugby opportunities for players of all
            experience levels.
          </p>

          <h2 style={{ color: "#FFC107", marginTop: "40px" }}>Leadership Team</h2>

          <img
            src={ladiesCap}
            alt="Womens Team Captains"
            style={{ width: "100%", maxWidth: "500px", borderRadius: "10px", marginTop: "20px" }}
          />

          <p style={{ color: "#aaa", marginTop: "10px" }}>
            Captain: Beth Robinson | Vice Captain: Lia Sundin
          </p>
        </div>
      </div>
    );
  }

  // ========================
  // VETS
  // ========================
  if (team === "vets") {
    return (
      <div>
        <div style={{
          backgroundImage: `url(${vets1})`,
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }} />
          <h1 style={{ position: "relative", color: "#FFC107", fontSize: "48px" }}>
            VETS (OVER 35s)
          </h1>
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "30px" }}>
          <p style={{ color: "#ddd", lineHeight: "1.8", maxWidth: "800px" }}>
            The Vets team competes in the Northumberland Vets league, offering
            friendly Friday night rugby for players aged 35+.
          </p>

          <img
            src={terry}
            style={{ width: "150px", borderRadius: "10px", marginTop: "20px" }}
          />

          <p style={{ color: "#aaa" }}>Terry Farrell</p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "20px"
          }}>
            {[vets1, vets2, vets3, vets4, vets5].map((img, i) => (
              <img key={i} src={img} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ========================
  // LANDING PAGE (NEW)
  // ========================
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "30px" }}>
      <h1 style={{ color: "#FFC107", marginBottom: "30px" }}>Our Teams</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
      }}>
        <Link href="/teams/mens1"><div style={cardStyle(firstTeam)}><div style={overlayStyle}><h2>1st XV</h2></div></div></Link>
        <Link href="/teams/mens2"><div style={cardStyle(secondTeam)}><div style={overlayStyle}><h2>2nd XV</h2></div></div></Link>
        <Link href="/teams/womens"><div style={cardStyle(ladiesTeam)}><div style={overlayStyle}><h2>Womens XV</h2></div></div></Link>
        <Link href="/teams/vets"><div style={cardStyle(vets1)}><div style={overlayStyle}><h2>Vets</h2></div></div></Link>
      </div>
    </div>
  );
}