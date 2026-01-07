import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = "584225112810";
  const message = encodeURIComponent(
    "Hola, Me interesa conocer más sobre los productos de Hair Cosmetic Distribuciones."
  );

  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <motion.div
      className="whatsapp_floating"
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <i className="fab fa-whatsapp"></i>
    </motion.div>
  );
};

export default WhatsAppButton;
