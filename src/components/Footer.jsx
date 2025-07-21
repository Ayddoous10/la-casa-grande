import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.mapContainer}>
        <iframe
          title="Ubicación La Casa Grande"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.056975958846!2d-98.98999212496487!3d19.366685481898624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e29456decaa7%3A0xb637bd2ad48dda62!2sSal%C3%B3n%20de%20Fiestas%20La%20Casa%20Grande!5e0!3m2!1sen!2smx!4v1753054017802!5m2!1sen!2smx"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p style={{ marginTop: 12 }}>© 2025 La Casa Grande</p>

      <a
        href="https://wa.me/5535167129"
        target="_blank"
        rel="noreferrer"
        style={styles.whatsappButton}
      >
        Escríbenos por WhatsApp
      </a>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "white",
    textAlign: "center",
    padding: "1rem",
  },
  mapContainer: {
    width: "100%",
    maxWidth: 600,
    margin: "0 auto",
  },
  whatsappButton: {
    display: "inline-block",
    marginTop: "0.5rem",
    backgroundColor: "#25d366",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "20px",
    textDecoration: "none",
  },
};

export default Footer;
