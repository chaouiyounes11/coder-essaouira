import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface CardProps {
  img: string;
  title: string;
  paragraph: string;
}

const Card = ({ img, title, paragraph }: CardProps) => {
  return (
    <div className="rounded-lg bg-turquoiseBlue/20 p-6 flex-1">
      <div className="flex items-start gap-4">
        <Image src={img} alt="icon" width={30} height={30} />
        <h3 className="font-bold text-black">{title}</h3>
      </div>
      <p className="text-black pl-[50px]">{paragraph}</p>
    </div>
  );
};

const WhyJoin = () => {
  const t = useTranslations('Why');
  return (
    <section className="py-12 px-6 mt-8 my-4">
      <div>
        <h2 className="text-center text-normalBlue text-3xl px-4 font-bold">
          {t('title')}
        </h2>
        <p className="text-gray mt-4 text-md md:text-center md:text-2xl max-w-xl mx-auto">
          {t('description')}
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-8 lg:flex-row lg:gap-2 max-w-7xl mx-auto">
        <Card img="idea.svg" title={t('title1')} paragraph={t('paragraph1')} />
        <Card
          img="monitor.svg"
          title={t('title2')}
          paragraph={t('paragraph2')}
        />
        <Card img="bag.svg" title={t('title3')} paragraph={t('paragraph3')} />
      </div>
    </section>
  );
};

export default WhyJoin;
