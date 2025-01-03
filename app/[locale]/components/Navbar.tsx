'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ChangeLanguage from './ChangeLanguage';

const Navbar = ({ locale }: { locale: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const goTotop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        w-full fixed top-0 z-40 h-[80px] left-0
        transition-all duration-300 py-0 
        flex items-center justify-between px-4
        ${
          isScrolled
            ? 'bg-normalBlue/80 rounded-3xl left-[5%] shadow-lg !h-[50px] !w-[90%] md:!max-w-5xl md:left-1/2 md:-translate-x-1/2 top-5'
            : 'bg-lightBlue'
        }
      `}
    >
      <div className="w-full flex items-center justify-between md:max-w-7xl mx-auto">
        <Image
          src="/logo.jpeg"
          className="rounded-full duration-300 transition-all"
          alt="logo"
          onClick={goTotop}
          width={isScrolled ? 30 : 60}
          height={isScrolled ? 30 : 60}
        />
        <span
          onClick={goTotop}
          className={`absolute left-1/2 -translate-x-1/2 ${
            isScrolled ? 'text-white' : 'text-black'
          }  text-black font-bold text-xl`}
        >
          Coder Essaouira
        </span>
        <div className="w-fit">
          <ChangeLanguage locale={locale} isScrolled={isScrolled} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
