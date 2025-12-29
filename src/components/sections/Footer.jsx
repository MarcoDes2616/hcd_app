import "@fortawesome/fontawesome-free/css/all.min.css";


const Footer = () => {
  return (
    <footer
      className="full-w flex column al-c jf-c"
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="full-w full-h flex column al-c jf-c footer_curtain">
        <img
          src="/logo_compact.png"
          alt="Hair Cosmetic Distribuciones"
          style={{ width: "80px", marginBottom: "1rem" }}
        />

        <p
          className="center small"
          style={{ maxWidth: "600px", color: "var(--secondaryCC)" }}
        >
          Hair Cosmetic Distribuciones · Venezuela
          <br />
          Distribución de productos capilares profesionales
        </p>

      <div
  className="flex row al-c"
  style={{ gap: "1.5rem", marginTop: "1.5rem" }}
>
  <a
    href="https://www.instagram.com/luminoliss_oficialvzla"
    target="_blank"
    rel="noopener noreferrer"
    className="social_link flex row al-c "
  >
    <i className="fab fa-instagram "></i>
  </a>

  <a
    href="https://www.tiktok.com/@luminolissvzla"
    target="_blank"
    rel="noopener noreferrer"
    className="social_link flex row al-c"
  >
    <i className="fab fa-tiktok"></i>
  </a>

  <a
    href="https://wa.me/584225112810"
    target="_blank"
    rel="noopener noreferrer"
    className="social_link flex row al-c"
  >
    <i className="fab fa-whatsapp"></i>
  </a>
</div>


        <p className="small" style={{ marginTop: "2rem", opacity: 0.6 }}>
          © {new Date().getFullYear()} Hair Cosmetic Distribuciones
        </p>
      </div>
    </footer>
  );
};

export default Footer;
