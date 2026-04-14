import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";

export default function Layout({ children }) {
  const [showTeams, setShowTeams] = useState(false);
  const dropdownRef = useRef();
  const [location] = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowTeams(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const linkStyle = (path) => ({
    color: location === path ? "#FFC107" : "#f5f5f5",
    textDecoration: "none",
    fontWeight: "600",
    letterSpacing: "0.8px",
    fontSize: "14px",
    textTransform: "uppercase",
  });

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#0b0b0b" }}>
      
      {/* Header */}
      <header
        style={{
          background: "#000",
          color: "white",
          padding: "10px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "2px solid #FFC107",
        }}
      >
        {/* LEFT SIDE: Logo + Club Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img
            src={logo}
            alt="Club Logo"
            style={{ height: "50px", width: "auto" }}
          />

          <h2
            style={{
              margin: 0,
              color: "#FFC107",
              fontWeight: "700",
              letterSpacing: "1px",
            }}
          >
            JARROVIANS RUFC
          </h2>
        </div>

        {/* NAV */}
        <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Link href="/" style={linkStyle("/")}>Home</Link>

          {/* Teams Dropdown */}
          <div style={{ position: "relative" }} ref={dropdownRef}>
            <span
              onClick={() => setShowTeams(!showTeams)}
              style={{
                cursor: "pointer",
                color: location.startsWith("/teams") ? "#FFC107" : "#f5f5f5",
                fontWeight: "600",
                letterSpacing: "0.8px",
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              Teams ▾
            </span>

            {showTeams && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  background: "#111",
                  padding: "10px",
                  borderRadius: "6px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  minWidth: "200px",
                  zIndex: 1000,
                  border: "1px solid #333",
                }}
              >
                <Link href="/teams/mens1" style={linkStyle("/teams/mens1")}>
                  Mens 1st XV
                </Link>
                <Link href="/teams/mens2" style={linkStyle("/teams/mens2")}>
                  Mens 2nd XV
                </Link>
                <Link href="/teams/womens" style={linkStyle("/teams/womens")}>
                  Womens XV
                </Link>
                <Link href="/teams/juniors" style={linkStyle("/teams/juniors")}>
                  Juniors
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" style={linkStyle("/about")}>About</Link>
          <Link href="/gallery" style={linkStyle("/gallery")}>Gallery</Link>
          <Link href="/documents" style={linkStyle("/documents")}>Documents</Link>
          <Link href="/shop" style={linkStyle("/shop")}>Shop</Link>
          <Link href="/sponsors" style={linkStyle("/sponsors")}>Sponsors</Link>
          <Link href="/contact" style={linkStyle("/contact")}>Contact</Link>
          <Link href="/news" style={linkStyle("/news")}>News</Link>
          <Link href="/admin" style={linkStyle("/admin")}>Admin</Link>
        </nav>
      </header>

      {/* Content */}
      <main
        style={{
          minHeight: "80vh",
          padding: "30px",
          color: "#f5f5f5",
        }}
      >
        {children}
      </main>

      {/* Footer */}
      <footer
        style={{
          background: "#000",
          color: "#aaa",
          textAlign: "center",
          padding: "20px",
          borderTop: "1px solid #222",
        }}
      >
        © {new Date().getFullYear()} Jarrovians RUFC
      </footer>
    </div>
  );
}