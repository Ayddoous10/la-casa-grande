// src/components/LandingPage.jsx
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Carousel from "./Carousel";
import Footer from "./Footer";

const fotosSalon = [
  { src: "/conocenos_1.jpg", alt: "Interior", caption: "Espacios amplios" },
  { src: "/conocenos_2.jpg", alt: "Decoración", caption: "Temática especial" },
  { src: "/conocenos_3.jpg", alt: "Iluminación", caption: "Hermosas decoraciones" },
  { src: "/conocenos_4.jpg", alt: "Conócenos", caption: "Ambiente cálido" },
  { src: "/conocenos_5.jpg", alt: "Conócenos", caption: "Entretenimiento en vivo" },
  { src: "/conocenos_6.jpg", alt: "Conócenos", caption: "Alberca infantil" },
  { src: "/conocenos_7.jpg", alt: "Conócenos", caption: "" },
  { src: "/decoracion1.jpg", alt: "Comunión", caption: "" },
  { src: "/decoracion2.jpg", alt: "Comunión", caption: "" },
  { src: "/decoracion3.jpg", alt: "Comunión", caption: "" },
];

const eventos = [
  { src: "/fiestaInfantil.jpg", alt: "Fiesta", caption: "Fiestas infantiles" },
  { src: "/bautizo.jpg", alt: "XV Años", caption: "Bautizos" },
  { src: "/bautizo2.jpg", alt: "Boda", caption: "Decoraciones" },
  { src: "/boda.jpg", alt: "Boda", caption: "Bodas" },
  { src: "/cumpleaños1.jpg", alt: "Cumpleaños", caption: "Cumpleaños" },
  { src: "/cumpleaños2.jpg", alt: "Cumpleaños", caption: "Un día especial" },
  { src: "/cumpleaños3.jpg", alt: "Cumpleaños", caption: "Fechas inolvidables" },
  { src: "/cumpleaños4.jpg", alt: "Cumpleaños", caption: "Fiestas temáticas" },
  { src: "/cumpleaños5.jpg", alt: "Cumpleaños", caption: "" },
  { src: "/primeraComunion.jpg", alt: "Comunión", caption: "" },
];

const servicios = [
  { src: "/banquete.jpg", alt: "Banquete", caption: "Banquetes deliciosos" },
  { src: "/carritoSnacks.jpg", alt: "Snacks", caption: "Carrito de Snacks" },
  { src: "/sonido.jpg", alt: "Sonido", caption: "DJ y música en vivo" },
  { src: "/futbolito.jpg", alt: "Extras", caption: "Diversión adicional" },
  { src: "/brincolin.jpg", alt: "Brincolín", caption: "Para niños felices" },
  { src: "/extra1.jpg", alt: "Extra", caption: "Pista de baile" },
  { src: "/extra2.jpg", alt: "Extra", caption: "Entretenimiento en vivo" },
  { src: "/extra3.jpg", alt: "Extra", caption: "Mesas infantiles" },
  { src: "/decoracionServicio.jpg", alt: "Decoración", caption: "Personalizada" },
  { src: "/servicioDecoracion2.jpg", alt: "Decoración", caption: "Temática" },
];

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Carousel images={fotosSalon} title="Conoce el salón" />
      <Carousel images={eventos} title="Nuestros eventos" />
      <Carousel images={servicios} title="Servicios que ofrecemos" />
      <Footer />
    </>
  );
};

export default LandingPage;
