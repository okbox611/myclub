import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef, createContext } from "react";
import logo from "../assets/logo.png";

import facebookIcon from "../icon/facebook.svg";
import xIcon from "../icon/x.svg";
import instagramIcon from "../icon/instagram.svg";
import tiktokIcon from "../icon/tiktok.svg";

// ✅ Context
export const MobileContext = createContext(false);

export default function Layout({ children }) {
  const [showTeams, setShowTeams] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTeamsOpen, setMobileTeamsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const dropdownRef = useRef();
  const headerRef = useRef();
  const [location] = useLocation();

  const [headerHeight, setHeaderHeight] = useState(70);

  // ✅ Responsive detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Header height
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowTeams(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const linkStyle = {
    color: "#f5f5f5",
    textDecoration: "none",
    fontWeight: "600",
    letterSpacing: "0.8px",
    fontSize: "14px",
    textTransform: "uppercase",
    position: "relative",
    paddingBottom: "4px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
  };

  const isActive = (path) => {
    if (path === "/") return location === "/";
    return location.startsWith(path);
  };

  const handleHover = (e, path, entering) => {
    const line = e.currentTarget.querySelector(".underline");
    if (!line) return;

    if (!isActive(path)) {
      line.style.width = entering ? "100%" : "0%";
    }
  };

  return (
    <MobileContext.Provider value={isMobile}>
      <div style={{ background: "#0b0b0b", color: "#f5f5f5" }}>

        {/* HEADER */}
        <header
          ref={headerRef}
          style={{
            background: "#000",
            padding: "12px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "2px solid #FFC107",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          {/* LOGO */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
              <img src={logo} alt="Logo" style={{ height: "42px" }} />
              <h2 style={{
                margin: 0,
                color: "#FFC107",
                fontSize: "18px",
                letterSpacing: "1px"
              }}>
                JARROVIANS RUFC
              </h2>
            </div>
          </Link>

          {/* MOBILE HAMBURGER */}
          {isMobile && (
            <div
              onClick={() => setMobileOpen(true)}
              style={{
                fontSize: "26px",
                cursor: "pointer",
                color: "#FFC107",
              }}
            >
              ☰
            </div>
          )}

          {/* DESKTOP NAV */}
          {!isMobile && (
            <nav style={{ display: "flex", gap: "28px", alignItems: "center" }}>
              {[{ name: "Home", path: "/" }, { name: "About", path: "/about" }].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  style={linkStyle}
                  onMouseEnter={(e) => handleHover(e, item.path, true)}
                  onMouseLeave={(e) => handleHover(e, item.path, false)}
                >
                  {item.name}
                  <div
                    className="underline"
                    style={{
                      ...underlineStyle,
                      width: isActive(item.path) ? "100%" : "0%",
                    }}
                  />
                </Link>
              ))}

              {/* TEAMS DROPDOWN */}
              <div
                ref={dropdownRef}
                onMouseEnter={() => setShowTeams(true)}
                onMouseLeave={() => setShowTeams(false)}
                style={{ position: "relative", display: "flex", alignItems: "center" }}
              >
                <Link href="/teams" style={linkStyle}>
                  Teams ▾
                  <div
                    className="underline"
                    style={{
                      ...underlineStyle,
                      width: isActive("/teams") ? "100%" : "0%",
                    }}
                  />
                </Link>

                {showTeams && (
                  <div style={dropdownStyle}>
                    <Link href="/teams/mens1">Mens 1st XV</Link>
                    <Link href="/teams/mens2">Mens 2nd XV</Link>
                    <Link href="/teams/womens">Womens XV</Link>
                    <Link href="/teams/juniors">Juniors</Link>
                    <Link href="/teams/vets">Vets</Link>
                  </div>
                )}
              </div>

              {[
                { name: "Gallery", path: "/gallery" },
                { name: "Shop", path: "/shop" },
                { name: "Sponsors", path: "/sponsors" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <Link key={item.path} href={item.path} style={linkStyle}>
                  {item.name}
                  <div
                    className="underline"
                    style={{
                      ...underlineStyle,
                      width: isActive(item.path) ? "100%" : "0%",
                    }}
                  />
                </Link>
              ))}
            </nav>
          )}
        </header>

        {/* MOBILE OVERLAY */}
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

        {/* MOBILE MENU */}
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
          <div
            onClick={() => setMobileOpen(false)}
            style={{
              color: "#FFC107",
              fontSize: "22px",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            ✕ Close
          </div>

          <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>

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
                gap: "8px",
              }}>
                <Link href="/teams/mens1">Mens 1st XV</Link>
                <Link href="/teams/mens2">Mens 2nd XV</Link>
                <Link href="/teams/womens">Womens XV</Link>
                <Link href="/teams/juniors">Juniors</Link>
                <Link href="/teams/vets">Vets</Link>
              </div>
            )}
          </div>

          <Link href="/gallery" onClick={() => setMobileOpen(false)}>Gallery</Link>
          <Link href="/shop" onClick={() => setMobileOpen(false)}>Shop</Link>
          <Link href="/sponsors" onClick={() => setMobileOpen(false)}>Sponsors</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
        </div>

        {/* CONTENT */}
        <main
          style={{
            minHeight: "80vh",
            paddingTop: `${headerHeight}px`,
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          {children}
        </main>

        {/* FOOTER */}
        <footer style={footerStyle}>
          <div style={footerContent}>
            <p style={footerText}>Follow Jarrovians RUFC</p>

            <div style={socialRow}>
              <a href="https://www.facebook.com/JarroviansRUFC/" target="_blank" rel="noreferrer">
                <img src={facebookIcon} style={iconStyle} />
              </a>
              <a href="https://x.com/JarroviansRUFC" target="_blank" rel="noreferrer">
                <img src={xIcon} style={iconStyle} />
              </a>
              <a href="https://www.instagram.com/jarrovians_rufc/" target="_blank" rel="noreferrer">
                <img src={instagramIcon} style={iconStyle} />
              </a>
              <a href="https://www.tiktok.com/@jarroviansrufc" target="_blank" rel="noreferrer">
                <img src={tiktokIcon} style={iconStyle} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </MobileContext.Provider>
  );
}

// ✅ FIXED: THIS WAS MISSING
const underlineStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  height: "2px",
  background: "#FFC107",
  transition: "width 0.3s ease",
};

const dropdownStyle = {
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
  border: "1px solid #333",
};

const footerStyle = {
  marginTop: "60px",
  borderTop: "1px solid #222",
  padding: "30px 20px",
  background: "#000",
};

const footerContent = {
  maxWidth: "1100px",
  margin: "0 auto",
  textAlign: "center",
};

const footerText = {
  color: "#aaa",
  marginBottom: "15px",
};

const socialRow = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};

const iconStyle = {
  width: "28px",
  height: "28px",
  filter: "invert(1)",
};
