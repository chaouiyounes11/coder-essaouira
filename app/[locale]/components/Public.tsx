import { useTranslations } from 'next-intl';
import Image from 'next/image';

const PublicSection = () => {
  const t = useTranslations('Who');
  return (
    <section className="py-12 pb-0 px-6 mt-8 my-4">
      <div className="w-full flex justify-center items-center relative max-w-md mx-auto">
        <Image
          width={200}
          height={200}
          src="/class.png"
          alt="classroom"
          className="w-[90%] h-auto"
        />
        <Image
          width={40}
          height={40}
          src="/brackets.png"
          alt="brackets coding"
          className="absolute h-auto top-[-40px] left-[0px]"
        />
        <Image
          width={60}
          height={60}
          src="/boom.png"
          alt="coding"
          className="absolute h-auto bottom-[-20px] right-[-10px]"
        />
      </div>
      <div className="mt-10">
        <h2 className="text-center text-normalBlue text-3xl px-4 font-bold">
          {t('title')}
        </h2>
        <p className="text-gray text-md mt-4 md:text-center md:text-2xl max-w-xl mx-auto">
          {t('description')}
        </p>
      </div>
    </section>
  );
};

export default PublicSection;
