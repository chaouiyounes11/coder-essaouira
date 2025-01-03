'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface SliderSettings extends Settings {
  currentSlide?: number;
}

const settings: SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: true,
  centerMode: true,
  centerPadding: '1px',
  cssEase: 'ease-out',
  appendDots: (dots) => (
    <div>
      <ul className="slick-dots"> {dots} </ul>
      <style>{`
       .slick-dots li.slick-active div {
         background-color: white;
       }
       .slick-slide {
         padding: 0 10px;
       }
       .slick-list {
         margin: 0 -10px;
       }
     `}</style>
    </div>
  ),
  customPaging: () => (
    <div className="w-3 h-3 rounded-full bg-white/30 slick-dot" />
  ),
};

const TestimonialsSection = () => {
  const t = useTranslations('Testimonials');
  const testimonials = [
    {
      name: t('testimonial1.name'),
      text: t('testimonial1.text'),
      image: '/fille1.jpg',
    },
    {
      name: t('testimonial2.name'),
      text: t('testimonial2.text'),
      image: '/fille2.jpg',
    },
    {
      name: t('testimonial3.name'),
      text: t('testimonial3.text'),
      image: '/garcon.jpg',
    },
  ];

  return (
    <section className="py-12 px-6 bg-normalBlue mt-8 my-4 pb-20">
      <div className="container mx-auto text-center">
        <h2 className="text-center text-white text-3xl px-4 font-bold">
          {t('title')}
        </h2>
        <p className="text-white text-center text-lg my-4">
          {t('description')}
        </p>
        <div className="">
          <Slider {...settings} className="max-w-xl mx-auto ">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 text-center bg-white !h-[260px] rounded-2xl !flex flex-col justify-center"
              >
                <div className="flex justify-between mt-4 mb-4">
                  <Image src="/stars.svg" alt="stars" width={124} height={24} />
                  <Image src="/quote.svg" alt="quote" width={30} height={35} />
                </div>
                <p className="text-lg mb-4">{testimonial.text}</p>
                <div className="flex ">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full mx-none"
                  />
                  <h3 className="font-bold flex items-center justify-center ml-3">
                    {testimonial.name}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
