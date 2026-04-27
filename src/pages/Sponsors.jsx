import { useState } from "react";

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
import rhys from "../assets/rhysspon.jpg";
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
import becks from "../assets/becksspon.jpg";
import ian from "../assets/ianspon.jpg";
import demi from "../assets/demispon.jpg";
import representLogo from "../assets/R.E.P.R.E.S.E.N.T-Logo.png";
import chiversLogo from "../assets/Chivers-Logo.jpg";

export default function Sponsors() {
  const [selectedImage, setSelectedImage] = useState(null);

  const playerSponsors = [
    { name: "Aaron Keelan", img: aaron },
    { name: "Archie Archbold", img: archie },
    { name: "Dave Berry", img: dave },
    { name: "Deacon Wallace", img: deacon },
    { name: "George Holman", img: george },
    { name: "Harry Archer", img: harry },
    { name: "Jamie Harrison", img: jamie },
    { name: "Joe Watson", img: joe },
    { name: "Jonny Holman", img: jonny },
    { name: "Lewis Bentil", img: lewis },
    { name: "George Peggie", img: peggie },
    { name: "James Pocklington", img: pocks },
    { name: "Rhys Williams", img: rhys },
    { name: "Ross Dixon", img: ross },
    { name: "Seb Pinto", img: seb },
    { name: "Tom Hopwood", img: tom },
    { name: "Will Boersma", img: willbo },
    { name: "Will Bate", img: will },
    { name: "Will Welsh", img: willw },

    { name: "Beth Robinson", img: beth },
    { name: "Hollie Ritson", img: hollie },
    { name: "Kelsey Lawson", img: kelsey },
    { name: "Kensey Bailey", img: kensey },
    { name: "Rachelle Ferguson", img: rachelle },
    { name: "Chris Riddell", img: ridell },
    { name: "Suzanne Gibbons", img: suzanne },
    { name: "Sam Holliday", img: sam },
    { name: "Chris Mcintosh", img: mac },
    { name: "Marie Kennedy", img: marie },

    { name: "Natasha Thorpe", img: matas },
    { name: "Megan Boersma", img: megan },
    { name: "Molly Smith", img: molly },
    { name: "Becky Gibson", img: becks },
    { name: "Ian Arkley", img: ian },
    { name: "Demi Agar", img: demi }


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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <a
            href="https://www.represent.global/"
            target="_blank"
            rel="noopener noreferrer"
            style={representLogoCardStyle}
          >
            <img src={representLogo} alt="R.E.P.R.E.S.E.N.T" style={logoImageStyle} />
          </a>

          <a
            href="https://www.chiverssolicitors.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            style={logoCardStyle}
          >
            <img src={chiversLogo} alt="Chivers Solicitors" style={logoImageStyle} />
          </a>
        </div>

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
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
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
                cursor: "pointer",
              }}
              onClick={() => setSelectedImage(sponsor.img)}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
            >
              <div style={{ position: "relative" }}>
                <img
                  src={sponsor.img}
                  alt={sponsor.name}
                  style={{
                    width: "100%",
                   height: "auto",
aspectRatio: "3 / 4",
objectFit: "contain",
background: "#000",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "60px",
                    background: "linear-gradient(transparent, rgba(0,0,0,0.9))",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "12px",
                  color: "#FFC107",
                  fontWeight: "600",
                  fontSize: "16px",
                  letterSpacing: "0.5px",
                  background: "#0d0d0d",
                }}
              >
                {sponsor.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImage}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
              boxShadow: "0 0 30px rgba(0,0,0,0.8)",
            }}
          />

          {/* CLOSE BUTTON */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "30px",
              fontSize: "30px",
              color: "#FFC107",
              cursor: "pointer",
            }}
          >
            ✕
          </div>
        </div>
      )}
    </div>
  );
}

const logoCardStyle = {
  background: "#111",
  border: "1px solid #222",
  borderRadius: "12px",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "160px",
};

const representLogoCardStyle = {
  ...logoCardStyle,
  background: "#FFC107",
  border: "1px solid #d4a500",
};

const logoImageStyle = {
  maxWidth: "100%",
  maxHeight: "110px",
  objectFit: "contain",
};
