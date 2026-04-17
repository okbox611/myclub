import gallery from "../data/gallery";

export default function Gallery() {
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <h1 style={{ color: "#FFC107", textAlign: "center" }}>
        Gallery
      </h1>

      <p
        style={{
          color: "#aaa",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Match days, training, and club events
      </p>

      {/* ALBUM GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {gallery.map((album, i) => (
          <div
            key={i}
            style={{
              background: "#111",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid #222",
              cursor: "pointer",
              transition: "0.3s",
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
            {/* COVER IMAGE */}
            <img
              src={album.cover}
              alt={album.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />

            {/* TITLE */}
            <div style={{ padding: "15px", textAlign: "center" }}>
              <h3 style={{ margin: 0 }}>{album.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* FACEBOOK LINK */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <a
          href="https://www.facebook.com/YOUR_PAGE"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#FFC107",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          View full gallery on Facebook →
        </a>
      </div>
    </div>
  );
}