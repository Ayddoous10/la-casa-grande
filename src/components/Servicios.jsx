import React from "react";
import Carousel from "./Carousel";
import Header from "./Header";

const snacksImages = [
  { src: "/carritoSnacks.jpg", alt: "Carrito", caption: "Carrito de Snacks" },
  { src: "/carritoSnacks2.jpg", alt: "Dulces", caption: "Dulces variados" },
  { src: "/carritoSnacks4.jpg", alt: "Botanas", caption: "Botanas para todos" },
  { src: "/carritoSnacks5.jpg", alt: "Botanas", caption: "Servicio de calidad" },
  { src: "/carritoSnacks6.jpg", alt: "Botanas", caption: "" },
  { src: "/carritoSnacks7.jpg", alt: "Botanas", caption: "" },
  { src: "/carritoSnacks8.jpg", alt: "Botanas", caption: "" },
  { src: "/carritoSnacks3.jpg", alt: "Botanas", caption: "" }
];

const decoracionesImages = [
  { src: "/decoracion1.jpg", alt: "Globos", caption: "" },
  { src: "/decoracion2.jpg", alt: "Luces", caption: "" },
  { src: "/decoracion3.jpg", alt: "Temáticas", caption: "" },
  { src: "/decoracionServicio.jpg", alt: "Globos", caption: "" },
  { src: "/servicioDecoracion2.jpg", alt: "Luces", caption: "" },
  { src: "/imagenServicioDecoracion1.jpg", alt: "Temáticas", caption: "" },
  { src: "/imagenServicioDecoracion2.jpg", alt: "Globos", caption: "" },
  { src: "/imagenServicioDecoracion3.jpg", alt: "Luces", caption: "" },
  { src: "/imagenServicioDecoracion4.jpg", alt: "Temáticas", caption: "" },
  { src: "/imagenServicioDecoracion5.jpg", alt: "Globos", caption: "" },
  { src: "/imagenServicioDecoracion6.jpg", alt: "Luces", caption: "" },
  { src: "/imagenServicioDecoracion7.jpg", alt: "Temáticas", caption: "" },
  { src: "/imagenServicioDecoracion8.jpg", alt: "Temáticas", caption: "" },
  { src: "/imagenServicioDecoracion9.jpg", alt: "Temáticas", caption: "" }
];

const banquetesImages = [
  { src: "/banquete.jpg", alt: "Mesa de banquete", caption: "Mesa elegante" },
  { src: "/banquete2.jpg", alt: "Platos", caption: "Menú exquisito" },
  { src: "/banquete3.jpg", alt: "Servicio", caption: "Atención profesional" },
  { src: "/banquete4.jpg", alt: "Mesa de banquete", caption: "Variedad de platillos" },
  { src: "/banquete5.jpg", alt: "Platos", caption: "" },
  { src: "/banquete6.jpg", alt: "Servicio", caption: "" }
];

const adicionalesImages = [
  { src: "/brincolin.jpg", alt: "Inflables", caption: "Divertido brincolín" },
  { src: "/futbolito.jpg", alt: "Mesas de dulces", caption: "Futbolito" },
  { src: "/adicional3.jpg", alt: "Animadores", caption: "Mesas infantiles" },
  { src: "/adicional4.jpg", alt: "Inflables", caption: "" },
  { src: "/adicional5.jpg", alt: "Mesas de dulces", caption: "Centros de mesa" },
  { src: "/adicional6.jpg", alt: "Animadores", caption: "Mesas de dulces" }
];

const Servicios = () => {
  return (
    <>
      <Header /> {/* Menú visible arriba */}
      <div style={styles.container}>
        <h1 style={styles.title}>Nuestros Servicios</h1>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>🎧 Sonido Profesional</h2>
          <a href="https://wa.me/5535167129" target="_blank" rel="noreferrer" style={styles.whatsappButton}>
                Renta de equipo de sonido          </a>
          <img src="/sonido.jpg" alt="Sonido" style={styles.image} />
          <p>Contamos con equipo de sonido de alta fidelidad para todo tipo de eventos.</p>
          <p>DJ, micrófonos y ambientación garantizada.</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>🍿 Snacks y Botanas</h2>
          <a href="https://wa.me/5545317167" target="_blank" rel="noreferrer" style={styles.whatsappButton}>
                Cotizaciones e informes
          </a>
          <p>Ofrecemos paquetes de botanas, palomitas, dulces y estaciones de snacks temáticas para tus invitados.</p>
          <Carousel images={snacksImages} title="" />
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>🎈 Decoraciones</h2>
          <a href="https://wa.me/5545317167" target="_blank" rel="noreferrer" style={styles.whatsappButton}>
                Cotizaciones e informes
          </a>
          <p>Decoración personalizada con globos, telas, luces y temáticas especiales para que tu evento luzca increíble.</p>
          <Carousel images={decoracionesImages} title="" />
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>🍽️ Banquetes</h2>
          <p>Servicio completo de banquete: menú personalizado, vajilla, meseros y atención profesional.</p>
          <Carousel images={banquetesImages} title="" />
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>🧩 Servicios Adicionales</h2>
          <p>Explora más servicios complementarios como inflables, mesas de dulces, animadores y más.</p>
          <Carousel images={adicionalesImages} title="" />
        </section>
      </div>
    </>
  );
};

const styles = {
  container: {
    backgroundColor: "#fff8e6", // color crema
    color: "#333",
    padding: "2rem",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "2rem",
    color: "#FF4500",
  },
  section: {
    marginBottom: "3rem",
  },
  subtitle: {
    fontSize: "1.8rem",
    color: "#ff5722",
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    borderRadius: "15px",
    margin: "1rem 0",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
};

export default Servicios;
