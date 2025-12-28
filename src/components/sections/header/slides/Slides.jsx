import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, HashNavigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slide2 from "/slide-2.jpg";
import slide3 from "/slide-3.jpg";
import slide1 from "/m_slide1.jpeg"
import ItemSlide from "./ItemSlide";
import "./slides.css";

function Slides() {
  const dataSlides = [
    {
      image: slide2,
    },
    {
      image: slide3,
    },
    {
      image: slide1,
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
        className="mySwiper al-c jf-c full-w"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {dataSlides.map((o, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => isActive && <ItemSlide image={o.image} i={i} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slides;
