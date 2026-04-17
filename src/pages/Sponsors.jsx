// PLAYER SPONSORS
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

// NEW ONES
import beth from "../assets/bethspon.jpg";
import hollie from "../assets/holliespon.jpg";
import kelsey from "../assets/kelseyspon.jpg";
import kensey from "../assets/kenseyspon.jpg";
import rachelle from "../assets/rachellespon.jpg";
import ridell from "../assets/ridellspon.jpg";
import suzanne from "../assets/suzannespon.jpg";
import sam from "../assets/samspon.jpg";
import mac from "../assets/macspon.jpg";
import marie from "../assets/mariespon.jpg";

import matas from "../assets/matashaspon.jpg";
import megan from "../assets/meganspon.jpg";
import molly from "../assets/mollyspon.jpg";

export default function Sponsors() {
  const playerSponsors = [
    { name: "Aaron Keelan", img: aaron },
    { name: "Archie Archbold", img: archie },
    { name: "Dave Berry", img: dave },
    { name: "Deacon Wallace", img: deacon },
    { name: "George Holman", img: george },
    { name: "Harry Archer", img: harry },
    { name: "Jamie", img: jamie },
    { name: "Joe Watson", img: joe },
    { name: "Jonny", img: jonny },
    { name: "Lewis", img: lewis },
    { name: "Peggie", img: peggie },
    { name: "Pocklington", img: pocks },
    { name: "Rhys", img: rhys },
    { name: "Ross", img: ross },
    { name: "Seb", img: seb },
    { name: "Tom", img: tom },
    { name: "Will Bo", img: willbo },
    { name: "Will", img: will },
    { name: "Will W", img: willw },

    { name: "Beth Robinson", img: beth },
    { name: "Hollie", img: hollie },
    { name: "Kelsey", img: kelsey },
    { name: "Kensey", img: kensey },
    { name: "Rachelle", img: rachelle },
    { name: "Ridell", img: ridell },
    { name: "Suzanne", img: suzanne },
    { name: "Sam", img: sam },
    { name: "Mac", img: mac },
    { name: "Marie", img: marie },

    { name: "Matas", img: matas },
    { name: "Megan", img: megan },
    { name: "Molly", img: molly },
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
        }}
      >
        <h1
          style={{
            color: "#FFC107",
            fontSize: "clamp(32px, 5vw, 52px)",
            letterSpacing: "3px",
            fontWeight: "700",
          }}
        >
          Our Sponsors
        </h1>
      </div>

      {/* CONTENT */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        <p
          style={{
            color: "#ccc",
            lineHeight: "1.8",
            maxWidth: "800px",
          }}
        >
          We are incredibly grateful to our sponsors who support Jarrovians RUFC.
        </p>

        <h2
          style={{
            color: "#FFC107",
            marginTop: "40px",
            marginBottom: "20px",
          }}
        >
          Player Sponsors
        </h2>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {playerSponsors.map((sponsor, i) => (
            <div
              key={i}
              style={{
                background: "#111",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid #222",
                textAlign: "center",
                transition: "0.3s",
              }}
            >
              <img
                src={sponsor.img}
                alt={sponsor.name}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "10px", color: "#FFC107" }}>
                {sponsor.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}