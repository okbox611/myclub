import barImg from "../assets/bar.jpg";
import markChair from "../assets/markchair.jpg";
import samSec from "../assets/samsec.jpg";
import clubPres from "../assets/clubpres.jfif";

export default function About() {
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 20px", // ✅ prevents edge bleed
        overflow: "hidden", // ✅ stops sub-pixel overflow
      }}
    >
      
      {/* Title */}
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "20px",
          letterSpacing: "1px",
        }}
      >
        About Us
      </h1>

      {/* Image */}
      <img
        src={barImg}
        alt="Club Bar"
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "30px",

          /* 🔥 KEY FIX */
          display: "block",
          transform: "translateZ(0)", // fixes rendering lines
        }}
      />

      {/* Text */}
      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#eaeaea",
          maxWidth: "800px",
        }}
      >
        Founded in 1978 by players from Hebburn Technical College,
        Jarrovians RUFC has grown from a small group of enthusiasts into
        a thriving grassroots community club. Based at Lukes Lane Sports
        Pavilion in Hebburn, we have weathered challenges and celebrated
        triumphs together.

        <br /><br />

        Today, we are proud to serve the North East community with senior
        teams, a women’s section, and junior development programmes from
        U6 to U17. We are more than a rugby club — we are a family united
        by passion for the game and commitment to our community.

        <br /><br />

        We offer rugby for all ages and abilities, alongside excellent
        social facilities including our clubhouse and bar.
      </p>

      {/* OFFICIALS */}
      <h2
        style={{
          color: "#FFC107",
          marginTop: "50px",
          marginBottom: "25px",
        }}
      >
        Club Officials
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
        }}
      >
        {[
          { name: "Mark Handy", role: "Club Chairman", img: markChair },
          { name: "Dave McLeod", role: "Club President", img: clubPres },
          { name: "Sam Rawsterne", role: "Club Secretary", img: samSec },
        ].map((person, i) => (
          <div
            key={i}
            style={{
              background: "#111",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid #222",
              textAlign: "center",
              transition: "0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(255,193,7,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* IMAGE CONTAINER */}
            <div
              style={{
                height: "280px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#000",
                padding: "10px",
              }}
            >
              <img
                src={person.img}
                alt={person.name}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                  borderRadius: "6px",

                  /* 🔥 KEY FIX */
                  transform: "translateZ(0)",
                }}
              />
            </div>

            {/* TEXT */}
            <div style={{ padding: "15px" }}>
              <h3
                style={{
                  margin: "0 0 5px 0",
                  color: "#FFC107",
                }}
              >
                {person.name}
              </h3>
              <p style={{ margin: 0, color: "#aaa" }}>{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}