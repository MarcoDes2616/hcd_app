export default function Nav() {
  return (
    <nav className="full-w autoM flex row jf-sb al-c relative" style={{ padding: "1rem 1.5rem" }}>
      
      {/* Logo */}
      <div className="flex al-c">
        <img 
          src="/logo_h.png" 
          alt="Hair Cosmetic Distribuciones"
          style={{ height: "42px" }}
        />
      </div>

      {/* Menu */}
      <ul className="flex row al-c gap">
        <li className="btn_app regular">Inicio</li>
        <li className="btn_app regular">Productos</li>
        <li className="btn_app regular">Distribución</li>
        <li className="btn_app regular">Contacto</li>
      </ul>

      {/* CTA */}
      <a 
        href="#contacto"
        className="btn_app round bold"
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "var(--primaryC)",
          color: "#000"
        }}
      >
        Sé distribuidor
      </a>
    </nav>
  );
}
