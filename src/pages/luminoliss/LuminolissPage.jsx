import { motion } from "framer-motion";
import PrimaryBtn from "../../components/PrimaryBtn";
import React from 'react';
import bannerImg from "/ll.png";
import productImg from "/luminoliss-hero.png";
import sealImg from "/original.png";

const LuminoLissPage = () => {
  return (
    <main className="full-w autoM">

      {/* HERO */}
      <section className="relative full-vh flex al-c jf-c">
        <img
          src={bannerImg}
          alt="LuminoLiss alisado orgánico"
          className="absolute full-w full-h"
          style={{ objectFit: "cover", opacity: 0.25 }}
        />

        <motion.div
          className="relative flex column al-c center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="xx-big bold">LuminoLiss®</h1>
          <p className="big" style={{ maxWidth: "600px" }}>
            Alisado orgánico profesional, 100% sin formol, con resultados
            visibles desde la primera aplicación.
          </p>

          <div className="flex row" style={{ gap: "1rem", marginTop: "2rem" }}>
            <PrimaryBtn child={"Quiero comprar ahora"} onClick={() => {}} />
            <a
              href="/Informe_Tecnico_LuminoLiss.pdf"
              target="_blank"
              className="btn_app"
            >
              Descargar ficha técnica
            </a>
          </div>
        </motion.div>
      </section>

      {/* PRODUCTO */}
      <section className="full-w flex wrap al-c jf-c" style={{ padding: "4rem 1rem" }}>
        <img src={productImg} alt="Presentaciones LuminoLiss" className="md" />

        <div className="md">
          <h2 className="x-big bold">¿Qué es LuminoLiss?</h2>
          <p className="regular">
            LuminoLiss® es un alisado orgánico profesional desarrollado por
            Adriano Cosméticos en Argentina. Su fórmula con Lumini System
            combina ácido láctico, aceite de coco y keratina hidrolizada,
            logrando un cabello liso, brillante y saludable.
          </p>

          <ul style={{ marginTop: "1rem" }}>
            <li>✔ Aprobado por ANMAT</li>
            <li>✔ 100% libre de formol</li>
            <li>✔ Uso profesional</li>
          </ul>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="full-w" style={{ background: "var(--secondaryHC)", padding: "4rem 1rem" }}>
        <h2 className="x-big center bold">Beneficios principales</h2>

        <div className="wrap jf-c" style={{ gap: "1.5rem", marginTop: "2rem" }}>
          {[
            "Sin vapores ni irritación",
            "Resultados duraderos y brillantes",
            "Aplicación cómoda y segura",
            "Ingredientes orgánicos",
          ].map((b, i) => (
            <div key={i} className="md round border">
              <p className="bold center">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* USO PROFESIONAL */}
      <section className="full-w" style={{ padding: "4rem 1rem" }}>
        <h2 className="x-big bold center">Uso profesional</h2>

        <p className="center regular" style={{ maxWidth: "800px", margin: "1rem auto" }}>
          LuminoLiss® está diseñado exclusivamente para uso profesional.
          El resultado final depende del diagnóstico capilar, la técnica
          aplicada y el uso de herramientas adecuadas.
        </p>

        <ul className="md autoM">
          <li>• Lavado con shampoo anti-residuos</li>
          <li>• Aplicación en mechas finas</li>
          <li>• Tiempo de reposo según resistencia</li>
          <li>• Secado y planchado profesional</li>
        </ul>
      </section>

      {/* ADVERTENCIAS */}
      <section className="full-w" style={{ background: "#120f0f", padding: "3rem 1rem" }}>
        <h2 className="x-big bold center">Advertencias importantes</h2>

        <p className="center regular" style={{ maxWidth: "800px", margin: "1rem auto" }}>
          No recomendado para cabellos completamente canosos o blancos.
          Realizar siempre prueba de mecha. Si el cabello no resiste
          180°C, no está apto para este procedimiento.
        </p>
      </section>

      {/* DISTRIBUCIÓN */}
      <section className="full-w flex wrap al-c jf-c" style={{ padding: "4rem 1rem" }}>
        <img src={sealImg} alt="Producto original LuminoLiss" />

        <div className="md">
          <h2 className="x-big bold">Distribución oficial en Venezuela</h2>
          <p className="regular">
            El único distribuidor autorizado es:
          </p>

          <p className="bold">@luminolissvzla</p>
          <p className="small">
            TikTok · Instagram · WhatsApp
          </p>
          <PrimaryBtn child={"Contactar por WhatsApp"} onClick={() => {}} />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="full-w center" style={{ padding: "4rem 1rem" }}>
        <h2 className="x-big bold">¿Quieres resultados profesionales?</h2>
        <p className="regular">
          Escríbenos y recibe asesoría directa.
        </p>

        <PrimaryBtn child={"Quiero comprar ahora"} onClick={() => {}} />
      </section>

    </main>
  );
};

export default LuminoLissPage;