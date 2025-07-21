import React from "react";

const Hero = () => {
  return (
    <section style={styles.hero}>
      <h2 style={styles.title}>🎉 Salón de Fiestas La Casa Grande</h2>
      <p style={styles.subtitle}>¡Haz de tu evento algo inolvidable!</p>
    </section>
  );
};

const styles = {
  hero: {
    backgroundImage: 'url("/background.jpg")', // ruta a tu imagen de fondo
    backgroundSize: "cover",       // para que cubra todo el espacio
    backgroundPosition: "center",  // centra la imagen
    backgroundRepeat: "no-repeat", // que no se repita
    padding: "4rem 2rem",
    textAlign: "center",
    color: "white",                // para que el texto resalte sobre la imagen
    textShadow: "0 2px 4px rgba(0,0,0,0.6)", // sombra para mejor lectura
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.2rem",
  },
};

export default Hero;
