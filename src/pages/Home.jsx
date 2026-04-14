import clubImg from "../assets/club.jpg";
import FixturesSlider from "../components/FixturesSlider";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      
      <div
        style={{
          backgroundImage: `url(${clubImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
          }}
        />

        {/* Text */}
        <div style={{ position: "relative", textAlign: "center" }}>
          <h1
            style={{
              color: "#FFC107",
              fontSize: "56px",
              margin: 0,
              letterSpacing: "2px",
            }}
          >
            JARROVIANS RUFC
          </h1>

          <p
            style={{
              color: "#fff",
              marginTop: "15px",
              fontSize: "20px",
            }}
          >
            Rugby. Community. Tradition.
          </p>
        </div>
      </div>

      {/* CONTENT WRAPPER */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "30px 20px" }}>

        {/* INTRO */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#FFC107" }}>Welcome to the Club</h2>
          <p style={{ lineHeight: "1.7", color: "#ddd" }}>
            Jarrovians RUFC is a thriving grassroots rugby club based in Hebburn,
            offering rugby for all ages and abilities. From juniors to senior teams,
            we pride ourselves on community spirit, development, and passion for the game.
          </p>
        </section>

<FixturesSlider />
        {/* TEAMS */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#FFC107" }}>Our Teams</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {["Mens 1st XV", "Mens 2nd XV", "Womens XV", "Juniors"].map((team) => (
              <div
                key={team}
                style={{
                  background: "#111",
                  padding: "20px",
                  borderRadius: "8px",
                  border: "1px solid #222",
                  textAlign: "center",
                }}
              >
                <h3 style={{ color: "#FFC107" }}>{team}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* NEWS */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#FFC107" }}>Latest News</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                style={{
                  background: "#111",
                  padding: "20px",
                  borderRadius: "8px",
                  border: "1px solid #222",
                }}
              >
                <h4 style={{ color: "#fff" }}>Match Report</h4>
                <p style={{ color: "#aaa", fontSize: "14px" }}>
                  Latest update from the club. More details coming soon...
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SPONSORS */}
        <section style={{ marginBottom: "40px", textAlign: "center" }}>
          <h2 style={{ color: "#FFC107" }}>Our Sponsors</h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ background: "#111", padding: "20px" }}>Sponsor 1</div>
            <div style={{ background: "#111", padding: "20px" }}>Sponsor 2</div>
            <div style={{ background: "#111", padding: "20px" }}>Sponsor 3</div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ textAlign: "center", marginTop: "50px" }}>
          <h2 style={{ color: "#FFC107" }}>Get Involved</h2>
          <p style={{ color: "#ddd" }}>
            Whether you're looking to play, volunteer, or support the club,
            there's a place for you at Jarrovians RUFC.
          </p>

          <a
            href="/contact"
            style={{
              display: "inline-block",
              marginTop: "15px",
              padding: "12px 25px",
              background: "#FFC107",
              color: "#000",
              textDecoration: "none",
              borderRadius: "5px",
              fontWeight: "600",
            }}
          >
            Contact Us
          </a>
        </section>

      </div>
    </div>
  );
}