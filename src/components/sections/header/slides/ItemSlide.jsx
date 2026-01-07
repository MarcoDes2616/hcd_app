import { motion } from "framer-motion";
import defaultImage from "/ll.png";
import PrimaryBtn from "../../../PrimaryBtn";
import React from 'react';

const ItemSlide = ({ image, title, subtitle, description, button, type }) => {
  const container = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="itemSlide_container center flex jf-c al-c relative full-vh">
      <img
        src={image || defaultImage}
        alt={title}
        loading="lazy"
        className="itemSlide_bg"
      />

      <motion.div
        className={`motion_container flex column jf-sb absolute`}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="s-xx s_family w-r" variants={item}>
          {title}
        </motion.h1>

        <motion.h2 className="s-b h_family w-b" variants={item}>
          {subtitle}
        </motion.h2>

        <motion.p className="s-b md w-l h_family" variants={item}>
          {description}
        </motion.p>

        {button && (
          <motion.div className="motion_item_actions flex jf-c" variants={item}>
            <PrimaryBtn child={button.text} onClick={() => {}} />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ItemSlide;
