import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './slides.css';
import slide1 from "/m_slide1.jpeg"
import slide2 from "/m_slide2.jpeg"
import slide3 from "/m_slide3.jpeg"
import slide4 from "/m_slide4.jpeg"
import slide5 from "/m_slide5.jpeg"
import slide6 from "/m_slide6.jpeg"
import slide7 from "/m_slide7.jpeg"
import slide8 from "/m_slide8.jpeg"
import slide9 from "/m_slide9.jpg"

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

const MouseSlides = () => {
  const slides = [
    { title: "Living room",
      image: slide1
    },
    { title: "Bedroom",
      image: slide2
    },
    { title: "Kitchen",
      image: slide3
    },
    { title: "Bathroom",
      image: slide4
    },
    { title: "Dining room",
      image: slide5
    },
    { title: "Patio / Terrace",
      image: slide6
    },
    { title: "Office",
      image: slide7
    },
    { title: "Basement",
      image: slide8
    },
    { title: "Attic",
      image: slide9}
  ]
  
    return (
        <>
          <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper_m relative"
          >
            {slides.map((o, i) => (
              <SwiperSlide>
                <img src={o.image} alt="" />
                <h2 className='absolute'>{o.title}</h2>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      );
};

export default MouseSlides;



