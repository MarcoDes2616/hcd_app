import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  HashNavigation,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ItemSlide from "./ItemSlide";
import headerImg1 from "/header_bg.png";
import luminoliss from "/ll.png";
import headerImg3 from "/header_bg2.png";
import "./slides.css";
import React from 'react';

function Slides() {
  const dataSlides = [
    {
      image: headerImg1,
      title: "Hair Cosmetic Distribuciones",
      subtitle: "Belleza profesional para el cuidado capilar",
      description:
        "Distribuimos productos cosméticos de alta calidad para salones y profesionales del cabello.",
      button: {
        text: "Conócenos",
        action: "#about",
      },
      type: "institutional",
    },
    {
      image: luminoliss,
      title: "Luminoliss",
      subtitle: "Alisado profesional sin formol",
      description:
        "Tecnología avanzada que alisa, nutre y devuelve el brillo natural al cabello sin comprometer la salud.",
      button: {
        text: "Ver producto",
        action: "#luminoliss",
      },
      type: "product",
    },
    {
      image: headerImg3,
      title: "Para todo tipo de cabellos",
      subtitle: "Diversidad, belleza y cuidado real",
      description:
        "Productos diseñados para cabellos lisos, ondulados, rizados y afro. Porque cada cabello es único.",
      button: {
        text: "Nuestro catálogo",
        action: "#catalogo",
      },
      type: "diversity",
    },
  ];

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, HashNavigation]}
        className="al-c jf-c full-w"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {dataSlides.map((slide, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => isActive && <ItemSlide {...slide} index={i} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slides;
