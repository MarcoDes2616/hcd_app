import { motion } from "framer-motion";
import React from 'react';

const AboutBusiness = () => {
  return (
    <section className="full-w autoM flex jf-c al-c column relative" style={{ padding: "4rem 1rem" }}>
      <motion.h2
        className="xx-big center bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hair Cosmetic Distribuciones
      </motion.h2>

      <motion.p
        className="big center"
        style={{ maxWidth: "800px", marginTop: "1rem", color: "var(--secondaryCC)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Somos un negocio digital en crecimiento, nacido con una visión clara:
        llevar productos capilares profesionales y seguros directamente a quienes
        los necesitan, sin intermediarios innecesarios.
      </motion.p>

      <motion.p
        className="regular center"
        style={{ maxWidth: "850px", marginTop: "1.5rem" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Iniciamos con un producto ganador, <strong>LuminoLiss</strong>, un alisado sin formol
        de calidad profesional, y hemos crecido de forma orgánica, con esfuerzo,
        compromiso y una red de personas de confianza en distintas ciudades de Venezuela.
      </motion.p>

      <motion.a
        href="https://wa.me/584225112810"
        target="_blank"
        className="btn_app big bold"
        style={{
          marginTop: "2rem",
          padding: "0.8rem 2rem",
          background: "linear-gradient(135deg, var(--primaryC), var(--secondaryC))",
          color: "#000",
          borderRadius: "30px"
        }}
        whileHover={{ scale: 1.05 }}
      >
        Quiero comprar ahora
      </motion.a>
    </section>
  );
};

export default AboutBusiness;