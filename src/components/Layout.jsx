import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";

export default function Layout({ children }) {
  const [showTeams, setShowTeams] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTeamsOpen, setMobileTeamsOpen] = useState(false);

  const dropdownRef = useRef();
  const headerRef = useRef();
  const [location] = useLocation();

  const [headerHeight, setHeaderHeight] = useState(70);

  // Detect header height
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  // Close dropdown if clicking outside
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
    transition: "0.2s",
  });

  return (
    <div style={{ background: "#0b0b0b", color: "#f5f5f5" }}>
      
      {/* HEADER */}
      <header
        ref={headerRef}
        style={{
          background: "#000",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "2px solid #FFC107",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        {/* LEFT */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src={logo} alt="Logo" style={{ height: "40px" }} />
          <h2 style={{
            margin: 0,
            color: "#FFC107",
            fontSize: "18px",
            letterSpacing: "1px"
          }}>
            JARROVIANS RUFC
          </h2>
        </div>

        {/* HAMBURGER */}
        <div
          onClick={() => setMobileOpen(true)}
          className="mobile-toggle"
          style={{
            fontSize: "26px",
            cursor: "pointer",
            color: "#FFC107",
          }}
        >
          ☰
        </div>

        {/* DESKTOP NAV */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Link href="/" style={linkStyle("/")}>Home</Link>

          {/* TEAMS */}
          <div
            style={{ position: "relative" }}
            ref={dropdownRef}
            onMouseEnter={() => setShowTeams(true)}
            onMouseLeave={() => setShowTeams(false)}
          >
            <Link
              href="/teams"
              style={{
                color: location.startsWith("/teams") ? "#FFC107" : "#f5f5f5",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Teams ▾
            </Link>

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
                <Link href="/teams/mens1">Mens 1st XV</Link>
                <Link href="/teams/mens2">Mens 2nd XV</Link>
                <Link href="/teams/womens">Womens XV</Link>
                <Link href="/teams/juniors">Juniors</Link>
                <Link href="/teams/vets">Vets</Link>
              </div>
            )}
          </div>

          <Link href="/about" style={linkStyle("/about")}>About</Link>
          <Link href="/gallery" style={linkStyle("/gallery")}>Gallery</Link>
          <Link href="/shop" style={linkStyle("/shop")}>Shop</Link>
          <Link href="/sponsors" style={linkStyle("/sponsors")}>Sponsors</Link> {/* ✅ ADDED */}
          <Link href="/contact" style={linkStyle("/contact")}>Contact</Link>
        </nav>

        {/* MOBILE MENU */}
        <>
          {/* OVERLAY */}
          {mobileOpen && (
            <div
              onClick={() => setMobileOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.6)",
                zIndex: 998,
              }}
            />
          )}

          {/* SLIDE PANEL */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "260px",
              height: "100%",
              background: "#000",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              zIndex: 999,
              transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
              transition: "0.3s ease",
            }}
          >
            <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>

            {/* MOBILE TEAMS */}
            <div>
              <div
                onClick={() => setMobileTeamsOpen(!mobileTeamsOpen)}
                style={{
                  cursor: "pointer",
                  color: "#FFC107",
                  fontWeight: "600",
                }}
              >
                Teams ▾
              </div>

              {mobileTeamsOpen && (
                <div style={{
                  marginTop: "10px",
                  paddingLeft: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px"
                }}>
                  <Link href="/teams/mens1" onClick={() => setMobileOpen(false)}>Mens 1st XV</Link>
                  <Link href="/teams/mens2" onClick={() => setMobileOpen(false)}>Mens 2nd XV</Link>
                  <Link href="/teams/womens" onClick={() => setMobileOpen(false)}>Womens XV</Link>
                  <Link href="/teams/juniors" onClick={() => setMobileOpen(false)}>Juniors</Link>
                  <Link href="/teams/vets" onClick={() => setMobileOpen(false)}>Vets</Link>
                </div>
              )}
            </div>

            <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/gallery" onClick={() => setMobileOpen(false)}>Gallery</Link>
            <Link href="/shop" onClick={() => setMobileOpen(false)}>Shop</Link>
            <Link href="/sponsors" onClick={() => setMobileOpen(false)}>Sponsors</Link> {/* ✅ ADDED */}
            <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>
        </>
      </header>

      {/* CONTENT */}
      <main
        style={{
          minHeight: "80vh",
          paddingTop: `${headerHeight}px`,
        }}
      >
        {children}
      </main>

      {/* FOOTER */}
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