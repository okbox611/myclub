import { useEffect, useState } from "react";
import sanityClient from "../sanityClient";

export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // ✅ NEW

  useEffect(() => {
    const query = `*[_type == "gallery"]{
      _id,
      title,
      images[]{
        asset->{
          url
        }
      }
    }`;

    sanityClient.fetch(query).then(setGallery);
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ color: "#FFC107" }}>Gallery</h1>

      <p style={blurbStyle}>
        Take a look through the latest moments from around Jarrovians RUFC.
        From matchday action and big wins to social events and club life,
        our gallery captures what makes the club special both on and off the pitch.
      </p>

      {gallery.map((album) => (
        <div key={album._id} style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#fff" }}>{album.title}</h2>

          <div style={gridStyle}>
            {album.images?.map((img, i) => (
              <img
                key={i}
                src={img.asset.url}
                style={imageStyle}
                alt="Jarrovians gallery"
                onClick={() => setSelectedImage(img.asset.url)} // ✅ CLICK
              />
            ))}
          </div>
        </div>
      ))}

      {/* ✅ LIGHTBOX */}
      {selectedImage && (
        <div style={lightboxOverlay} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} style={lightboxImage} />
        </div>
      )}
    </div>
  );
}

// ========================
// STYLES
// ========================

const blurbStyle = {
  color: "#ccc",
  maxWidth: "800px",
  lineHeight: "1.6",
  marginBottom: "25px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "15px",
  marginTop: "15px",
};

const imageStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "10px",
  cursor: "pointer", // ✅ UX improvement
  transition: "0.2s ease",
};

const lightboxOverlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.9)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
  cursor: "pointer",
};

const lightboxImage = {
  maxWidth: "90%",
  maxHeight: "90%",
  borderRadius: "10px",
};