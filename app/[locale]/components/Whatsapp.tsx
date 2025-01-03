'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Whatsapp = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div
      className={`fixed bottom-4 right-5 z-50 ${
        !isScrolled ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <Link href="https://wa.me/33756946661">
        <Image src="/whatsapp.svg" alt="whatsapp" width={40} height={40} />
      </Link>
    </div>
  );
};

export default Whatsapp;
