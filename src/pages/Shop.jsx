export default function Shop() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
      
      {/* Title */}
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "20px",
          color: "#FFC107",
          letterSpacing: "1px",
        }}
      >
        Club Shop
      </h1>

      {/* Intro */}
      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#eaeaea",
          maxWidth: "800px",
          marginBottom: "30px",
        }}
      >
        Show your support for Jarrovians RUFC with our official club merchandise.
        From training wear to supporter gear, our shop offers a range of products
        for players, supporters, and the wider community.
      </p>

      {/* Shop Card */}
      <div
        style={{
          background: "#111",
          padding: "30px",
          borderRadius: "12px",
          border: "1px solid #222",
          marginBottom: "40px",
        }}
      >
        <h2 style={{ color: "#FFC107" }}>Official Online Store</h2>

        <p style={{ color: "#ddd", marginTop: "10px" }}>
          Our official club shop is hosted by Akuma Sports, providing high-quality
          rugby apparel and custom kit. Browse our latest range and order directly online.
        </p>

        {/* Password Box */}
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#000",
            border: "1px solid #FFC107",
            borderRadius: "8px",
            color: "#FFC107",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Store Password: JRUFC
        </div>

        {/* Button */}
        <a
          href="https://akumashops.com/jarroviansrufc/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 25px",
            background: "#FFC107",
            color: "#000",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "600",
          }}
        >
          Visit Club Shop →
        </a>
      </div>

      {/* Info Section */}
      <div
        style={{
          background: "#111",
          padding: "30px",
          borderRadius: "12px",
          border: "1px solid #222",
        }}
      >
        <h2 style={{ color: "#FFC107" }}>Ordering Information</h2>

        <ul style={{ color: "#ddd", marginTop: "15px", lineHeight: "1.8" }}>
          <li>All items are ordered directly through the Akuma online store</li>
          <li>Use the store password above to access the shop</li>
          <li>Delivery times may vary depending on stock and customisation</li>
          <li>For any issues with orders, please contact Akuma directly</li>
        </ul>
      </div>

    </div>
  );
}