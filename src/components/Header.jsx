import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <a href="/" style={styles.logoLink}>
        <img src="/logo_salon.png" alt="Logo La Casa Grande" style={styles.logoImg} />
      </a>

      <nav>
        <Link to="/servicios" style={styles.link}>Servicios</Link>
        <a href="https://wa.me/5535167129" target="_blank" rel="noreferrer" style={styles.link}>Contacto</a>
        <a href="https://www.facebook.com/people/Sal%C3%B3n-de-Fiestas-La-Casa-Grande/100063643717406/" target="_blank" rel="noreferrer" style={styles.link}>Facebook</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#5D2E1D", // Marrón vino
    color: "white",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 10,
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  logoImg: {
    height: "50px",
    width: "auto",
  },
  link: {
    color: "white",
    marginLeft: "1rem",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
  },
};

export default Header;
