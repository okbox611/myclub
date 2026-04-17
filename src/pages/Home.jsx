import clubImg from "../assets/club.jpg";



// ✅ NEW IMPORTS
import strip1 from "../assets/1strip.png";
import strip2 from "../assets/2strip.png";
import stripW from "../assets/wstrip.png";

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
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
          }}
        />

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

      {/* CONTENT */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "30px 20px",
        }}
      >

        {/* INTRO */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#FFC107" }}>Welcome to the Club</h2>
          <p style={{ lineHeight: "1.7", color: "#ddd" }}>
            Jarrovians RUFC is a thriving grassroots rugby club based in Hebburn,
            offering rugby for all ages and abilities. From juniors to senior teams,
            we pride ourselves on community spirit, development, and passion for the game.
          </p>
        </section>

        {/* FIXTURES */}
        <section
          style={{
            marginBottom: "60px",
            overflow: "hidden", // ✅ FIX: removes scrollbar
          }}
        >
          
        </section>

        {/* SPONSORS */}
        <section style={{ marginBottom: "40px", textAlign: "center" }}>
          <h2 style={{ color: "#FFC107" }}>Our Sponsors</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
              marginTop: "30px",
            }}
          >

            {/* 1ST TEAM */}
            <a
              href="https://www.represent.global/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div style={{
                background: "#111",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid #222",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(255,193,7,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              >
                <h3 style={{ color: "#FFC107", marginBottom: "10px" }}>
                  1st Team Sponsor
                </h3>

                <img
                  src={strip1}
                  alt="1st Team Sponsor"
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "contain",
                    marginBottom: "10px",
                  }}
                />

                <p style={{ color: "#aaa", margin: 0 }}>
                  R.E.P.R.E.S.E.N.T
                </p>
              </div>
            </a>

            {/* 2ND TEAM */}
            <a
              href="https://www.chiverssolicitors.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div style={{
                background: "#111",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid #222",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(255,193,7,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              >
                <h3 style={{ color: "#FFC107", marginBottom: "10px" }}>
                  2nd Team Sponsor
                </h3>

                <img
                  src={strip2}
                  alt="2nd Team Sponsor"
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "contain",
                    marginBottom: "10px",
                  }}
                />

                <p style={{ color: "#aaa", margin: 0 }}>
                  Chivers Solicitors
                </p>
              </div>
            </a>

            {/* WOMENS TEAM */}
            <a
              href="https://www.represent.global/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div style={{
                background: "#111",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid #222",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(255,193,7,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              >
                <h3 style={{ color: "#FFC107", marginBottom: "10px" }}>
                  Womens Team Sponsor
                </h3>

                <img
                  src={stripW}
                  alt="Womens Team Sponsor"
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "contain",
                    marginBottom: "10px",
                  }}
                />

                <p style={{ color: "#aaa", margin: 0 }}>
                  R.E.P.R.E.S.E.N.T
                </p>
              </div>
            </a>

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