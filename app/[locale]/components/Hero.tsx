'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Button from './Button';

export default function Hero() {
  const t = useTranslations('Hero');
  const t2 = useTranslations('Cta');
  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    const element = document.getElementById('program');

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="bg-lightBlue pt-20 pb-14 mt-[80px] w-full">
      <div className="w-full flex justify-center items-center relative max-w-lg mx-auto">
        <Image
          width={200}
          height={200}
          src="/ellipse.png"
          alt="blue circle illustration"
          className="w-[90%] h-auto"
        />
        <Image
          width={200}
          height={200}
          src="/girl.png"
          alt="girl coding"
          className="w-[90%] absolute h-auto bottom-[20px]"
        />
        <Image
          width={40}
          height={40}
          src="/code.png"
          alt="coding"
          className="absolute h-auto top-0 left-[20px]"
        />
        <Image
          width={100}
          height={100}
          src="/editor.png"
          alt="code editor"
          className="absolute h-auto top-0 right-[20px]"
        />
      </div>
      <div className="">
        <h1 className="text-4xl font-bold text-center mt-4">
          Coder Essaouira:
        </h1>
        <br />
        <h2 className="text-center text-3xl px-4 font-semibold">
          {t.rich('title', {
            create: (chunks) => (
              <span className="text-normalBlue" key="create">
                {chunks}
              </span>
            ),
            code: (chunks) => (
              <span className="text-normalBlue" key="code">
                {chunks}
              </span>
            ),
            innovate: (chunks) => (
              <span className="text-normalBlue" key="innovate">
                {chunks}
              </span>
            ),
          })}
        </h2>
        <p className="mt-4 text-center px-4">{t('description')}</p>
        <div className="flex justify-center px-5 flex-col mt-4 gap-6 md:flex-row md:gap-4">
          <Button theme="primary" text={t2('signup')} link={t2('link')} />
          <Button
            theme="secondary"
            text={t2('discover')}
            onClick={handleClick}
            link=""
          />
        </div>
      </div>
    </section>
  );
}
