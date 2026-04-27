import clubImg from "../assets/club.jpg";
import seniorRfuData from "../data/seniorRfuData";

// ✅ NEW IMPORTS
import strip1 from "../assets/1strip.png";
import strip2 from "../assets/2strip.png";
import stripW from "../assets/wstrip.png";

const homeTeams = [
  { key: "first", title: "Mens 1st XV", link: "/teams/mens1" },
  { key: "second", title: "Mens 2nd XV", link: "/teams/mens2" },
  { key: "women", title: "Womens XV", link: "/teams/womens" },
];

const facebookFeedUrl =
  "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FJarroviansRUFC%2F&tabs=timeline&width=500&height=760&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false";

export default function Home() {
  const seniorTeams = seniorRfuData.teams;

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

        {/* NEWS */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ color: "#FFC107", marginBottom: "12px" }}>Club News</h2>
          <p style={{ color: "#aaa", lineHeight: "1.7", marginBottom: "24px", maxWidth: "820px" }}>
            Follow the latest club updates, matchday posts, announcements, and photos from our Facebook page.
          </p>

          <div style={newsSectionStyle}>
            <div style={facebookEmbedCardStyle}>
              <iframe
                title="Jarrovians RUFC Facebook feed"
                src={facebookFeedUrl}
                width="100%"
                height="760"
                style={facebookIframeStyle}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>

            <div style={facebookInfoCardStyle}>
              <h3 style={{ color: "#FFC107", marginTop: 0 }}>Stay Connected</h3>
              <p style={{ color: "#ddd", lineHeight: "1.7", marginTop: 0 }}>
                If you want the quickest route to club updates, Facebook is where we post news, match graphics, and
                announcements first.
              </p>

              <div style={facebookButtonStackStyle}>
                <a
                  href="https://www.facebook.com/JarroviansRUFC/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={facebookSecondaryButtonStyle}
                >
                  View Facebook Page
                </a>
                <a
                  href="https://m.me/JarroviansRUFC"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={facebookPrimaryButtonStyle}
                >
                  Message us on Facebook
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* MATCH CENTRE */}
        <section
          style={{
            marginBottom: "60px",
            overflow: "hidden",
          }}
        >
          <h2 style={{ color: "#FFC107", marginBottom: "12px" }}>Latest Results & Next Fixtures</h2>
          <p style={{ color: "#aaa", lineHeight: "1.7", marginBottom: "24px" }}>
            A quick look at the most recent result and next fixture for our Mens 1st XV, Mens 2nd XV, and Womens XV.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {homeTeams.map((team) => {
              const teamData = seniorTeams[team.key];
              const latestResult = teamData.results?.[0];
              const nextFixture = teamData.fixtures?.[0];

              return (
                <div key={team.key} style={matchCardStyle}>
                  <div style={matchCardHeader}>
                    <h3 style={{ color: "#FFC107", margin: 0 }}>{team.title}</h3>
                    <a href={team.link} style={matchLinkStyle}>View team page</a>
                  </div>

                  <div style={matchBlockStyle}>
                    <p style={matchLabelStyle}>Most Recent Result</p>
                    {latestResult ? (
                      <>
                        <p style={matchOpponentStyle}>
                          {latestResult.home ? "Home" : "Away"} vs {latestResult.opponent}
                        </p>
                        <p style={matchScoreStyle}>
                          {formatResult(latestResult)}
                        </p>
                        <p style={matchMetaStyle}>{formatDate(latestResult.date)}</p>
                      </>
                    ) : (
                      <p style={matchMetaStyle}>No recent result available.</p>
                    )}
                  </div>

                  <div style={matchBlockStyle}>
                    <p style={matchLabelStyle}>Next Fixture</p>
                    {nextFixture ? (
                      <>
                        <p style={matchOpponentStyle}>
                          {nextFixture.home ? "Home" : "Away"} vs {nextFixture.opponent}
                        </p>
                        <p style={matchScoreStyle}>
                          {nextFixture.resultNote || "Fixture scheduled"}
                        </p>
                        <p style={matchMetaStyle}>{formatDate(nextFixture.date)}</p>
                      </>
                    ) : (
                      <p style={matchMetaStyle}>No upcoming fixture listed.</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
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

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatResult(game) {
  if (typeof game.ourScore === "number" && typeof game.theirScore === "number") {
    return `${game.ourScore} - ${game.theirScore}`;
  }

  return game.resultNote || "Result recorded";
}

const matchCardStyle = {
  background: "#111",
  border: "1px solid #222",
  borderRadius: "12px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
};

const matchCardHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px",
  flexWrap: "wrap",
};

const matchLinkStyle = {
  color: "#FFC107",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "14px",
};

const matchBlockStyle = {
  background: "#0b0b0b",
  border: "1px solid #1d1d1d",
  borderRadius: "10px",
  padding: "16px",
};

const matchLabelStyle = {
  color: "#aaa",
  margin: "0 0 10px 0",
  textTransform: "uppercase",
  letterSpacing: "0.8px",
  fontSize: "12px",
};

const matchOpponentStyle = {
  color: "#f5f5f5",
  margin: "0 0 8px 0",
  fontWeight: "600",
};

const matchScoreStyle = {
  color: "#FFC107",
  margin: "0 0 8px 0",
  fontSize: "22px",
  fontWeight: "700",
};

const matchMetaStyle = {
  color: "#aaa",
  margin: 0,
  lineHeight: "1.6",
};

const newsSectionStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
  alignItems: "start",
};

const facebookEmbedCardStyle = {
  background: "#111",
  border: "1px solid #222",
  borderRadius: "12px",
  padding: "12px",
  overflow: "hidden",
};

const facebookIframeStyle = {
  border: "none",
  overflow: "hidden",
  borderRadius: "8px",
  background: "#fff",
};

const facebookInfoCardStyle = {
  background: "#111",
  border: "1px solid #222",
  borderRadius: "12px",
  padding: "20px",
};

const facebookButtonStackStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  marginTop: "18px",
};

const baseFacebookButtonStyle = {
  display: "inline-block",
  textAlign: "center",
  textDecoration: "none",
  borderRadius: "8px",
  padding: "12px 16px",
  fontWeight: "600",
};

const facebookPrimaryButtonStyle = {
  ...baseFacebookButtonStyle,
  background: "#FFC107",
  color: "#000",
};

const facebookSecondaryButtonStyle = {
  ...baseFacebookButtonStyle,
  background: "#1a1a1a",
  color: "#f5f5f5",
  border: "1px solid #333",
};
