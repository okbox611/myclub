import { useRoute, Link } from "wouter";
import FixturesList from "../components/FixturesList";
import ResultsList from "../components/ResultsList";
import LeagueTable from "../components/LeagueTable";
import seniorRfuData from "../data/seniorRfuData";
import { juniorTeams } from "../data/juniorTeams";

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
import firstCoaches from "../assets/1scoaches.jpg";
import firstManager from "../assets/1sray.jpg";

// 2nd Team
import secondTeam from "../assets/2nd-team.jpg";
import secondCap from "../assets/2s-cap.jpg";

// Womens
import ladiesTeam from "../assets/ladies.jfif";
import ladiesCap from "../assets/ladies-cap.jpg";
import clubImg from "../assets/club.jpg";
import coachesImg from "../assets/Coaches.jfif";
import trainingImg from "../assets/trainingreview.jfif";
import u7TeamImg from "../assets/u7.jpg";
import u7CoachImg from "../assets/u7coach.jfif";
import u7TrainingImg from "../assets/u7game.jpg";
import u8TeamImg from "../assets/u8.jpg";
import u8TrainingImg from "../assets/u8game.jpg";
import u8CoachKeithImg from "../assets/Keith.png";
import u8CoachMartyImg from "../assets/Marty.png";
import u12TeamImg from "../assets/u12s.jpg";
import u12CoachMickImg from "../assets/mick.jpg";
import u12CoachVachImg from "../assets/vach.jpg";
import u12TrainingImg from "../assets/u12sgame.jpg";
import u14TrainingImg from "../assets/u14game.jfif";
import u9TeamImg from "../assets/u9s.jpg";
import u9CoachSarahImg from "../assets/sarah.jpg";
import u9CoachMarieImg from "../assets/marie.jpg";
import u9TrainingImg from "../assets/u9game.jpg";
import u10TeamImg from "../assets/u10.jpg";
import u11TeamImg from "../assets/u11.jpg";
import u11TrainingImg from "../assets/u11game.jpg";
import u11CoachWillboImg from "../assets/willbo.jpg";
import u11CoachVinceImg from "../assets/vince.jpg";

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

const juniorCardStyle = (img) => ({
  ...cardStyle(img),
  minHeight: "240px",
});

// ========================
// COMPONENT
// ========================
export default function Teams() {
  const [, params] = useRoute("/teams/:team");
  const team = params?.team;
  const seniorTeams = seniorRfuData.teams;
  const juniorTeam = juniorTeams.find((item) => item.slug === team);
  const juniorTeamPhoto = juniorTeam?.slug === "u7"
    ? u7TeamImg
    : juniorTeam?.slug === "u8"
      ? u8TeamImg
      : juniorTeam?.slug === "u9"
        ? u9TeamImg
      : juniorTeam?.slug === "u10"
        ? u10TeamImg
      : juniorTeam?.slug === "u11"
        ? u11TeamImg
      : juniorTeam?.slug === "u12"
        ? u12TeamImg
      : juniorTeam?.slug === "u14"
        ? null
      : clubImg;
  const juniorCoachPhoto = juniorTeam?.slug === "u7"
    ? u7CoachImg
    : juniorTeam?.slug === "u10"
      ? null
      : juniorTeam?.slug === "u14"
        ? null
      : coachesImg;
  const juniorTrainingPhoto = juniorTeam?.slug === "u7"
    ? u7TrainingImg
    : juniorTeam?.slug === "u8"
      ? u8TrainingImg
      : juniorTeam?.slug === "u9"
        ? u9TrainingImg
      : juniorTeam?.slug === "u11"
        ? u11TrainingImg
      : juniorTeam?.slug === "u12"
        ? u12TrainingImg
      : juniorTeam?.slug === "u14"
        ? u14TrainingImg
      : null;
  const hasSplitJuniorCoaches =
    juniorTeam?.slug === "u8" ||
    juniorTeam?.slug === "u9" ||
    juniorTeam?.slug === "u11" ||
    juniorTeam?.slug === "u12";
  const juniorTeamPhotoText = null;
  const juniorCoachText = juniorTeam?.slug === "u7"
    ? "Coached by Ryan Pargeter"
    : juniorTeam?.slug === "u8"
      ? "Coached by Keith Watt and Marty Davies"
    : juniorTeam?.slug === "u9"
      ? "Coached by Sarah Gathercole and Marie Kennedy"
      : juniorTeam?.slug === "u10"
        ? "Coached by Nathan James and James Wallis"
        : juniorTeam?.slug === "u11"
          ? "Coached by Will Boersma and Vince Chivers"
          : juniorTeam?.slug === "u12"
            ? "Coached by Mick Page and Chris Vacher"
            : juniorTeam?.slug === "u14"
              ? "Coached by Joe Watson, Willie Nelson and Tyler Butler"
      : null;
  const juniorTrainingText = juniorTeam?.slug === "u7"
    ? "Trains Sunday mornings from 9.30am."
    : juniorTeam?.slug === "u8"
      ? "Training Sundays 10am"
    : juniorTeam?.slug === "u9"
      ? "Trains Sundays from 10am."
      : juniorTeam?.slug === "u10"
        ? "Trains Sundays from 10am."
        : juniorTeam?.slug === "u11"
          ? "Trains Sundays from 10am."
          : juniorTeam?.slug === "u12"
            ? "Training Wednesdays 6-7pm and Sundays 9.30-11am"
            : juniorTeam?.slug === "u14"
              ? "Training Wednesdays 6.30-8pm and Sundays 10.30-12pm"
      : null;

  if (team === "juniors") {
    return (
      <div>
        <Container>
          <h1 style={centeredSectionTitle}>Junior Rugby</h1>

          <p style={textStyle}>
            Our junior section covers the age groups from U6 through to U14, giving each team its own space for photos,
            coaches, training information, fixtures, and club updates.
          </p>

          <p style={noticeStyle}>
            From September, each junior age group moves up one year.
          </p>

          <div style={gridStyle}>
            {juniorTeams
              .filter((item) => item.slug !== "juniors")
              .map((item) => (
                <Link key={item.slug} href={`/teams/${item.slug}`}>
                  <div style={juniorCardStyle(getJuniorLandingImage(item.slug))}>
                    <div style={juniorOverlayStyle}>
                      <h2 style={juniorLandingTitleStyle}>{item.title}</h2>
                      <p style={juniorLandingSummaryStyle}>{item.summary}</p>
                      <p style={juniorLandingMetaStyle}>{item.nextSeason}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </Container>
      </div>
    );
  }

  if (juniorTeam && juniorTeam.slug !== "juniors") {
    return (
      <div>
        <Hero img={clubImg} title={juniorTeam.title} />

        <Container>
          <p style={textStyle}>{juniorTeam.summary}</p>
          <p style={noticeStyle}>{juniorTeam.nextSeason}</p>

          <div style={gridStyle}>
            <section style={infoCard}>
              <h2 style={cardTitle}>Team Photo</h2>
              {juniorTeamPhoto ? (
                <img src={juniorTeamPhoto} alt={`${juniorTeam.title} team`} style={panelImageStyle} />
              ) : null}
              {juniorTeamPhotoText ? <p style={cardText}>{juniorTeamPhotoText}</p> : null}
            </section>

            <section style={infoCard}>
              <h2 style={cardTitle}>Coaches</h2>
              {hasSplitJuniorCoaches ? (
                <div style={coachGridStyle}>
                  {juniorTeam?.slug === "u8" ? (
                    <>
                      <img src={u8CoachKeithImg} alt={`${juniorTeam.title} coach Keith`} style={splitCoachImageStyle} />
                      <img src={u8CoachMartyImg} alt={`${juniorTeam.title} coach Marty`} style={splitCoachImageStyle} />
                    </>
                  ) : juniorTeam?.slug === "u9" ? (
                    <>
                      <img src={u9CoachSarahImg} alt={`${juniorTeam.title} coach Sarah`} style={splitCoachImageStyle} />
                      <img src={u9CoachMarieImg} alt={`${juniorTeam.title} coach Marie`} style={splitCoachImageStyle} />
                    </>
                  ) : juniorTeam?.slug === "u11" ? (
                    <>
                      <img src={u11CoachWillboImg} alt={`${juniorTeam.title} coach Will Boersma`} style={splitCoachImageStyle} />
                      <img src={u11CoachVinceImg} alt={`${juniorTeam.title} coach Vince Chivers`} style={splitCoachImageStyle} />
                    </>
                  ) : (
                    <>
                      <img src={u12CoachMickImg} alt={`${juniorTeam.title} coach Mick`} style={splitCoachImageStyle} />
                      <img src={u12CoachVachImg} alt={`${juniorTeam.title} coach Vach`} style={splitCoachImageStyle} />
                    </>
                  )}
                </div>
              ) : (
                juniorCoachPhoto ? (
                  <img src={juniorCoachPhoto} alt={`${juniorTeam.title} coaches`} style={panelImageStyle} />
                ) : null
              )}
              {juniorCoachText ? <p style={cardText}>{juniorCoachText}</p> : null}
            </section>

            <section style={infoCard}>
              <h2 style={cardTitle}>Training</h2>
              {juniorTrainingPhoto ? (
                <img src={juniorTrainingPhoto} alt={`${juniorTeam.title} training`} style={panelImageStyle} />
              ) : null}
              {juniorTrainingText ? <p style={cardText}>{juniorTrainingText}</p> : null}
            </section>
          </div>

          <div style={backLinkRow}>
            <Link href="/teams/juniors" style={backLinkStyle}>
              Back to Juniors
            </Link>
          </div>
        </Container>
      </div>
    );
  }

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

          <div style={supportGridStyle}>
            <section style={infoCard}>
              <h3 style={cardTitle}>Coaches</h3>
              <img src={firstCoaches} alt="1st team coaches" style={staffImageStyle} />
              <p style={centeredCardText}>Neil and Drew Hayton</p>
            </section>

            <section style={infoCard}>
              <h3 style={cardTitle}>Team Manager</h3>
              <img src={firstManager} alt="1st team manager Raymond Durrant" style={staffImageStyle} />
              <p style={centeredCardText}>Raymond Durrant</p>
            </section>
          </div>

          <h2 style={sectionTitle}>Leadership Team</h2>

          <div style={twoColumn}>
            <div style={imageCard}>
              <img src={firstCap} alt="Leadership Team" style={imageStyle} />
            </div>

            <div style={tableWrapper}>
              <LeagueTable items={seniorTeams.first.leagueTable} tableFor="first" />
            </div>
          </div>

          <p style={centeredMutedText}>
            Captain: Deacon Wallace | Vice Captain: James Pocklington
          </p>

          <FixturesList items={seniorTeams.first.fixtures} team="first" />
          <ResultsList items={seniorTeams.first.results} team="first" />
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

          <img src={secondCap} alt="Leadership Team" style={imageStyle} />

          <p style={mutedText}>
            Captain: Aaron Keelan | Vice Captain: Joe Watson
          </p>

          <LeagueTable items={seniorTeams.second.leagueTable} tableFor="second" />
          <FixturesList items={seniorTeams.second.fixtures} team="second" />
          <ResultsList items={seniorTeams.second.results} team="second" />
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

          <div style={twoColumn}>
            <div style={imageCard}>
              <img src={ladiesCap} alt="Leadership Team" style={imageStyle} />
            </div>

            <div style={tableWrapper}>
              <LeagueTable items={seniorTeams.women.leagueTable} tableFor="women" />
            </div>
          </div>

          <p style={mutedText}>
            Captain: Beth Robinson | Vice Captain: Lia Sundin
          </p>

          <FixturesList items={seniorTeams.women.fixtures} team="women" />
          <ResultsList items={seniorTeams.women.results} team="women" />
        </Container>
      </div>
    );
  }

  // ========================
  // VETS
  // ========================
  if (team === "vets") {
    return (
      <div>
        <Hero img={vets1} title="VETS (OVER 35s)" />

        <Container>
          <p style={textStyle}>
            Competitive but social rugby for players aged 35+.
          </p>

          <h2 style={sectionTitle}>Vets Captain</h2>
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

        <Link href="/teams/juniors">
          <div style={cardStyle(clubImg)}>
            <div style={overlayStyle}><h2>Juniors</h2></div>
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
// COMPONENTS
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
// STYLES (FIXED)
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
  height: "100%",        // ✅ FIX
  display: "flex",       // ✅ FIX
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
};

const supportGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "20px",
  marginTop: "24px",
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
  height: "100%",        // ✅ FIX
  objectFit: "cover",
  borderRadius: "10px",
};

const sectionTitle = {
  color: "#FFC107",
  marginTop: "30px",
};

const centeredSectionTitle = {
  ...sectionTitle,
  textAlign: "center",
};

const textStyle = {
  color: "#ddd",
  lineHeight: "1.8",
  maxWidth: "800px",
};

const noticeStyle = {
  color: "#FFC107",
  lineHeight: "1.7",
  marginTop: "10px",
  marginBottom: "24px",
  fontWeight: "600",
};

const mutedText = {
  color: "#aaa",
  marginTop: "10px",
};

const centeredMutedText = {
  ...mutedText,
  textAlign: "center",
};

const tableWrapper = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  overflowX: "auto",
};

const infoCard = {
  background: "#111",
  border: "1px solid #222",
  borderRadius: "12px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const cardTitle = {
  color: "#FFC107",
  margin: 0,
};

const cardText = {
  color: "#ddd",
  lineHeight: "1.7",
  margin: 0,
};

const centeredCardText = {
  ...cardText,
  textAlign: "center",
};

const cardMeta = {
  color: "#aaa",
  margin: 0,
};

const panelImageStyle = {
  width: "100%",
  height: "220px",
  objectFit: "cover",
  borderRadius: "10px",
};

const staffImageStyle = {
  width: "100%",
  height: "220px",
  objectFit: "contain",
  borderRadius: "10px",
  background: "#0b0b0b",
};

const coachGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "12px",
};

const splitCoachImageStyle = {
  width: "100%",
  height: "220px",
  objectFit: "cover",
  borderRadius: "10px",
};

const backLinkRow = {
  marginTop: "24px",
};

const backLinkStyle = {
  color: "#FFC107",
  textDecoration: "none",
  fontWeight: "600",
};

const juniorOverlayStyle = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.74) 100%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  gap: "10px",
  padding: "18px",
};

const juniorLandingTitleStyle = {
  color: "#FFC107",
  margin: 0,
  textAlign: "center",
};

const juniorLandingSummaryStyle = {
  color: "#f3f3f3",
  lineHeight: "1.6",
  margin: 0,
};

const juniorLandingMetaStyle = {
  color: "#ddd",
  margin: 0,
  fontWeight: "600",
};

function getJuniorLandingImage(slug) {
  if (slug === "u7") return u7TeamImg;
  if (slug === "u8") return u8TeamImg;
  if (slug === "u9") return u9TeamImg;
  if (slug === "u10") return u10TeamImg;
  if (slug === "u11") return u11TeamImg;
  if (slug === "u12") return u12TeamImg;
  if (slug === "u14") return u14TrainingImg;
  return clubImg;
}
