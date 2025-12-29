import { motion } from "framer-motion";

const Distribution = () => {
  const cities = [
    "San Felipe · Edo. Yaracuy",
    "Naguanagua · Edo. Carabobo",
    "Caracas · Distrito Capital",
    "Barquisimeto · Edo. Lara",
  ];

  return (
    <section className="full-w autoM flex jf-c al-c column" style={{ padding: "4rem 1rem", background: "var(--secondaryHC)" }}>
      <motion.h2
        className="x-big bold center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Nuestra red de distribución
      </motion.h2>

      <motion.p
        className="regular center"
        style={{ maxWidth: "750px", marginTop: "1rem", color: "var(--secondaryCC)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Trabajamos con distribuidores aliados, personas cercanas y confiables en
        distintas ciudades del país. Los productos llegan directamente desde Argentina
        y se distribuyen de forma segura y organizada.
      </motion.p>

      <div className="wrap jf-c al-c" style={{ marginTop: "2rem", gap: "1rem" }}>
        {cities.map((city, i) => (
          <motion.div
            key={i}
            className="round"
            style={{
              padding: "1rem 1.5rem",
              background: "var(--primaryHC)",
              border: "1px solid rgba(255,255,255,0.1)",
              minWidth: "220px",
              textAlign: "center"
            }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="bold">{city}</p>
          </motion.div>
        ))}
      </div>

      <p className="small center" style={{ marginTop: "2rem", color: "var(--secondaryCC)" }}>
        Todos los contactos y pedidos se gestionan directamente vía WhatsApp.
      </p>
    </section>
  );
};

export default Distribution;
