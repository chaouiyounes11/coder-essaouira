'use client';
import Image from 'next/image';

// CollapseItem.tsx
interface CollapseItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const CollapseItem = ({
  question,
  answer,
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
            <div className="flex flex-col items-start">
              <h3 className="font-bold text-black text-left">{question}</h3>
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
          <p className="text-black">{answer}</p>
        </div>
      </button>
    </div>
  );
};

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Button from './Button';

const FAQSection = () => {
  const t = useTranslations('Faq');
  const t2 = useTranslations('Cta');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: t('q1'),
      answer: t('a1'),
    },
    {
      question: t('q2'),
      answer: t('a2'),
    },
    {
      question: t('q3'),
      answer: t('a3'),
    },
    {
      question: t('q4'),
      answer: t('a4'),
    },
    {
      question: t('q5'),
      answer: t('a5'),
    },
    {
      question: t('q6'),
      answer: t('a6'),
    },
    {
      question: t('q7'),
      answer: t('a7'),
    },
  ];

  return (
    <section
      className="bg-gray-100 py-12 px-6 my-4 md:mx-4 md:rounded-lg max-w-5xl !mx-auto flex flex-col"
      id="faq-reservation"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-normalBlue mb-6">
          Vos questions, nos réponses
        </h2>
      </div>
      <div className="">
        {faqs.map((item, index) => (
          <CollapseItem
            key={index}
            {...item}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      <div className="!font-normal mt-16">
        <Button theme="primary" text={t2('signupNow')} link={t2('link')} />
      </div>
    </section>
  );
};

export default FAQSection;
