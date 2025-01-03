'use client';

import Image from 'next/image';

// CollapseItem.tsx
interface CollapseItemProps {
  icon: string;
  title: string;
  day: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const CollapseItem = ({
  icon,
  title,
  day,
  content,
  isOpen,
  onClick,
}: CollapseItemProps) => {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className={`w-full flex flex-col shadow-md p-4 rounded-lg transition-colors duration-300 ${
          isOpen ? 'bg-turquoiseBlue/15' : 'bg-white'
        }`}
      >
        <div className="flex items-start justify-between w-full">
          <div className="flex items-center gap-4">
            <div
              className={`p-3 w-12 h-12 rounded-full ${
                isOpen ? 'bg-turquoiseBlue/15' : 'bg-turquoiseBlue/15'
              }`}
            >
              <Image src={icon} alt="icon" width={24} height={24} />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="font-bold text-black">{title}</h3>
              <p className="text-gray block">{day}</p>
            </div>
          </div>
          <div
            className={`transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'text-black'
            }`}
          >
            <Image src="/chevron.svg" alt="arrow" width={24} height={24} />
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 text-left ${
            isOpen ? 'max-h-48 mt-4' : 'max-h-0'
          }`}
        >
          <p className="text-black pl-[60px]">{content}</p>
        </div>
      </button>
    </div>
  );
};

// Program.tsx
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Button from './Button';

const Program = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations('Program');
  const t2 = useTranslations('Cta');
  const items = [
    {
      icon: '/coding.svg',
      title: t('day1Title'),
      day: t('day1'),
      content: t('day1Description'),
    },
    {
      icon: '/file.svg',
      title: t('day2Title'),
      day: t('day2'),
      content: t('day2Description'),
    },
    {
      icon: '/bot.svg',
      title: t('day3Title'),
      day: t('day3'),
      content: t('day3Description'),
    },
    {
      icon: '/people.svg',
      title: t('day4Title'),
      day: t('day4'),
      content: t('day4Description'),
    },
    {
      icon: '/diplom.svg',
      title: t('day5Title'),
      day: t('day5'),
      content: t('day5Description'),
    },
  ];

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="program" className="max-w-2xl mx-auto p-6">
      <div>
        <h2 className="text-center text-normalBlue text-3xl px-4 font-bold">
          {t('title')}
        </h2>
        <p className="text-gray text-md mt-4 mb-8 md:text-center md:text-2xl max-w-xl mx-auto">
          {t('description')}
        </p>
      </div>
      {items.map((item, index) => (
        <CollapseItem
          key={index}
          {...item}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
      <div className="!font-normal mt-16">
        <Button theme="primary" text={t2('signupNow')} link={t2('link')} />
      </div>
    </div>
  );
};

export default Program;
