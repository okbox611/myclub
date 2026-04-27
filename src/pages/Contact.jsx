import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xnjlpddd", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Message sent!");
      form.reset();
    } else {
      setStatus("Something went wrong.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <h1 style={{ color: "#FFC107", textAlign: "center" }}>
        Contact Us
      </h1>

      <p
        style={{
          color: "#aaa",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Have a question or want to get involved? Send us a message.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          name="name"
          placeholder="Your Name"
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={inputStyle}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          style={inputStyle}
        />

        <button style={buttonStyle}>
          Send Message
        </button>

        {status && (
          <p style={{ color: "#aaa", textAlign: "center" }}>
            {status}
          </p>
        )}
      </form>

      <div style={infoGridStyle}>
        <section style={infoCardStyle}>
          <h2 style={sectionTitleStyle}>Club Info</h2>
          <p style={infoTextStyle}>Luke&apos;s Lane Sports Pavillion</p>
          <p style={infoTextStyle}>Luke&apos;s Lane Estate</p>
          <p style={infoTextStyle}>Hebburn</p>
          <p style={infoTextStyle}>Tyne and Wear</p>
          <p style={infoTextStyle}>NE31 2BB</p>
        </section>

        <section style={infoCardStyle}>
          <h2 style={sectionTitleStyle}>Quick Contact</h2>
          <div style={buttonRowStyle}>
            <a
              href="https://www.facebook.com/JarroviansRUFC/"
              target="_blank"
              rel="noopener noreferrer"
              style={secondaryLinkButtonStyle}
            >
              View Facebook Page
            </a>
            <a
              href="https://m.me/JarroviansRUFC"
              target="_blank"
              rel="noopener noreferrer"
              style={primaryLinkButtonStyle}
            >
              Message us on Facebook
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "12px",
  background: "#111",
  border: "1px solid #222",
  color: "#ddd",
  borderRadius: "6px",
};

const buttonStyle = {
  padding: "12px",
  background: "#FFC107",
  color: "#000",
  border: "none",
  borderRadius: "6px",
  fontWeight: "600",
  cursor: "pointer",
};

const infoGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
  marginBottom: "35px",
};

const infoCardStyle = {
  background: "#111",
  border: "1px solid #222",
  borderRadius: "12px",
  padding: "22px",
};

const sectionTitleStyle = {
  color: "#FFC107",
  marginTop: 0,
  marginBottom: "14px",
};

const infoTextStyle = {
  color: "#ddd",
  margin: "0 0 6px 0",
  lineHeight: "1.7",
};

const buttonRowStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const baseLinkButtonStyle = {
  display: "inline-block",
  padding: "12px 16px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
  textAlign: "center",
};

const primaryLinkButtonStyle = {
  ...baseLinkButtonStyle,
  background: "#FFC107",
  color: "#000",
};

const secondaryLinkButtonStyle = {
  ...baseLinkButtonStyle,
  background: "#1a1a1a",
  color: "#f5f5f5",
  border: "1px solid #333",
};
