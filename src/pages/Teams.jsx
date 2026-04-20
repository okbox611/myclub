import { useRoute, Link } from "wouter";
import FixturesList from "../components/FixturesList";
import ResultsList from "../components/ResultsList";
import LeagueTable from "../components/LeagueTable";

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
        <Hero img={firstTeam} title="1st XV" />

        <Container>
          <p style={textStyle}>
            Jarrovians RUFC 1st XV compete in Counties 2 Durham & Northumberland,
            representing the highest level of rugby within the club.
          </p>

          <h2 style={sectionTitle}>Leadership Team</h2>

          <div style={twoColumn}>
            <div style={imageCard}>
              <img src={firstCap} style={imageStyle} />
            </div>

            <div style={tableWrapper}>
              <LeagueTable />
            </div>
          </div>

          <p style={mutedText}>
            Captain: Deacon Wallace | Vice Captain: James Pocklington
          </p>

          {/* ✅ FIXED */}
          <FixturesList team="first" />
          <ResultsList team="first" />
        </Container>
      </div>
    );
  }

  // ========================
  // 2ND TEAM
  // ========================
  if (team === "mens2") {
    return (
      <div>
        <Hero img={secondTeam} title="2nd XV" />

        <Container>
          <p style={textStyle}>
            The 2nd XV plays a key role in development and squad depth.
          </p>

          <h2 style={sectionTitle}>Leadership Team</h2>

          <img src={secondCap} style={imageStyle} />

          <p style={mutedText}>
            Captain: Aaron Keelan | Vice Captain: Joe Watson
          </p>

          {/* ✅ FIXED */}
          <FixturesList team="second" />
          <ResultsList team="second" />
        </Container>
      </div>
    );
  }

  // ========================
  // WOMENS TEAM
  // ========================
  if (team === "womens") {
    return (
      <div>
        <Hero img={ladiesTeam} title="Womens XV" />

        <Container>
          <p style={textStyle}>
            A growing and inclusive section offering competitive rugby.
          </p>

          <h2 style={sectionTitle}>Leadership Team</h2>

          <img src={ladiesCap} style={imageStyle} />

          <p style={mutedText}>
            Captain: Beth Robinson | Vice Captain: Lia Sundin
          </p>

          {/* ✅ FIXED */}
          <FixturesList team="women" />
          <ResultsList team="women" />
        </Container>
      </div>
    );
  }

  // ========================
  // VETS (unchanged)
  // ========================
  if (team === "vets") {
    return (
      <div>
        <Hero img={vets1} title="VETS (OVER 35s)" />

        <Container>
          <p style={textStyle}>
            Competitive but social rugby for players aged 35+.
          </p>

          <img src={terry} style={{ width: "150px", borderRadius: "10px" }} />
          <p style={mutedText}>Terry Farrell</p>

          <div style={galleryGrid}>
            {[vets1, vets2, vets3, vets4, vets5].map((img, i) => (
              <img key={i} src={img} style={galleryImg} />
            ))}
          </div>
        </Container>
      </div>
    );
  }

  // ========================
  // LANDING PAGE
  // ========================
  return (
    <Container>
      <h1 style={sectionTitle}>Our Teams</h1>

      <div style={gridStyle}>
        <Link href="/teams/mens1">
          <div style={cardStyle(firstTeam)}>
            <div style={overlayStyle}><h2>1st XV</h2></div>
          </div>
        </Link>

        <Link href="/teams/mens2">
          <div style={cardStyle(secondTeam)}>
            <div style={overlayStyle}><h2>2nd XV</h2></div>
          </div>
        </Link>

        <Link href="/teams/womens">
          <div style={cardStyle(ladiesTeam)}>
            <div style={overlayStyle}><h2>Womens XV</h2></div>
          </div>
        </Link>

        <Link href="/teams/vets">
          <div style={cardStyle(vets1)}>
            <div style={overlayStyle}><h2>Vets</h2></div>
          </div>
        </Link>
      </div>
    </Container>
  );
}

// ========================
// COMPONENTS (unchanged)
// ========================
const Container = ({ children }) => (
  <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "30px" }}>
    {children}
  </div>
);

const Hero = ({ img, title }) => (
  <div style={{
    backgroundImage: `url(${img})`,
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
      {title}
    </h1>
  </div>
);

// ========================
// STYLES (unchanged)
// ========================
const twoColumn = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "24px",
  alignItems: "stretch",
};

const imageCard = {
  background: "#111",
  border: "1px solid #222",
  borderRadius: "12px",
  padding: "10px",
};

const tableCard = {
  background: "#111",
  border: "1px solid #222",
  borderRadius: "12px",
  padding: "10px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
};

const galleryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "20px",
};

const galleryImg = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "10px",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  objectFit: "cover",
  borderRadius: "10px",
};

const sectionTitle = {
  color: "#FFC107",
  marginTop: "30px",
};

const textStyle = {
  color: "#ddd",
  lineHeight: "1.8",
  maxWidth: "800px",
};

const mutedText = {
  color: "#aaa",
  marginTop: "10px",
};

const tableWrapper = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  overflowX: "auto",
};