import girlsImg from "/header_bg2.png";

export function ResultsLuminoliss() {
  return (
    <section className="section full-w flex column jf-c al-c">
      <img src={girlsImg} alt="Todo tipo de cabellos" className="lg round" />

      <h2 className="x-big bold center">
        Ideal para todo tipo de cabello
      </h2>

      <p className="big center md">
        Ondulado, rizado, teñido o rebelde. LuminoLiss se adapta y transforma.
      </p>

      <button className="btn_gold btn_app big">
        Quiero comprar ahora
      </button>
    </section>
  );
}
