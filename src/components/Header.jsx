

const Header = () => {
  return (
    <header className="full-vh flex row al-c jf-c relative">
      <div
        className="full-w autoM flex row al-c jf-sb wrap"
        style={{ padding: "2rem" }}
      >
        {/* Texto */}
        <div className="container_md flex column gap">
          <h1 className="xx-big s_family">
            Belleza profesional
            <br />
            <span style={{ color: "var(--primaryC)" }}>para el cabello</span>
          </h1>

          <p
            className="regular"
            style={{ color: "var(--secondaryCC)", marginTop: "1rem" }}
          >
            En <strong>Hair Cosmetic Distribuciones</strong> llevamos productos
            capilares de alta calidad a profesionales, salones y distribuidores
            que buscan resultados reales y una marca confiable.
          </p>

          <div className="flex row gap" style={{ marginTop: "1.5rem" }}>
            <a
              href="#productos"
              className="btn_app round bold"
              style={{
                padding: "0.7rem 1.5rem",
                backgroundColor: "var(--primaryC)",
                color: "#000",
              }}
            >
              Ver productos
            </a>

            <a
              href="#contacto"
              className="btn_app round"
              style={{
                padding: "0.7rem 1.5rem",
                border: "1px solid var(--primaryC)",
                color: "var(--primaryC)",
              }}
            >
              Contactar
            </a>
          </div>
        </div>

        {/* Imagen / Logo */}
        <div className="container_md flex jf-c al-c">
          <img
            src="/logo_compact.png"
            alt="Hair Cosmetic"
            style={{
              width: "280px",
              maxWidth: "100%",
              filter: "drop-shadow(0 0 30px rgba(232,181,106,0.25))",
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
