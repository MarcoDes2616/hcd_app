import { motion } from "framer-motion";
import luminolissImg from "/ll.png";

export default function HeroLuminoliss() {
  return (
    <section className="section full-vh flex column jf-c al-c center">
      <motion.img
        src={luminolissImg}
        alt="LuminoLiss alisado sin formol"
        className="md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="xx-big bold"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Alisado Profesional <br /> sin Formol
      </motion.h1>

      <p className="big center md autoM">
        LuminoLiss transforma tu cabello desde la primera aplicación: más brillo,
        menos frizz y una suavidad que se siente y se ve.
      </p>

      <button className="btn_gold btn_app big autoM">
        Quiero comprar ahora
      </button>
    </section>
  );
}
