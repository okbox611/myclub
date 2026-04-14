import barImg from "../assets/bar.jpg";

export default function About() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
      
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

      {/* Image (bigger + cleaner) */}
      <img
        src={barImg}
        alt="Club Bar"
        style={{
          width: "100%",
          height: "400px", // 👈 bigger image
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "30px",
        }}
      />

      {/* Text */}
      <p
  style={{
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#eaeaea", // clean readable white
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
    </div>
  );
}