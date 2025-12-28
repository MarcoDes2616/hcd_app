import { motion } from "framer-motion";
import YellowBotton from "../buttons/YellowBotton";

const ItemSlide = ({ image, i }) => {
  const container = {
    hidden: { y: -20, opacity: 1, scale: 0 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  
  return (
    <div className="itemSlide_container flex jf-c al-c relative">
      <img src={image} alt="" loading="lazy" />
      <motion.div
        className="motion_container flex column absolute"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="motion_item_title full-w"
          variants={item}
        ><h1>Titulo, encabezado 1</h1></motion.div>
        <motion.div className="motion_item_descriptive" variants={item}>
          <p>Descriptive text <br /> more descriptive text</p>
        </motion.div>
        <motion.div className="motion_item_actions flex row" variants={item}>
          <YellowBotton text={"Action 1"} />
          <button className="blue_btn btn_app">Action 2</button>
        </motion.div>
        <motion.div className="motion_item_detail" variants={item}>
          <p>*Action description, business details</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ItemSlide;
