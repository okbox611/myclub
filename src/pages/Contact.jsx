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