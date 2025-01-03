import { useTranslations } from 'next-intl';

const Tarifs = () => {
  const t = useTranslations('Price');
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 lg:max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-normalBlue mb-8">
          {t('title')}
        </h2>
        <p className="text-lg text-center text-gray-200 mb-6 md:text-center md:text-2xl max-w-xl mx-auto">
          {t('description')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {/* 1 journée */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-left border-borderBlue border-[1px] border-b-4">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              {t('day1')}
            </h3>
            <p className="text-4xl font-semibold text-normalBlue mb-4">
              50&nbsp;€
            </p>
            <p className="text-gray-600">{t('descriptionDay1')}</p>
          </div>

          {/* 3 jours */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-left border-borderBlue border-[1px] border-b-4 relative">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              {t('day3')}
            </h3>
            <p className="text-4xl font-semibold text-normalBlue mb-4">
              130&nbsp;€
            </p>
            <p className="text-gray-600">{t('descriptionDay3')}</p>
            <p className="text-pinky p-3 rounded-full w-fit bg-pinky/15 absolute top-4 right-4">
              {t('price3')}
            </p>
          </div>

          {/* 5 jours */}
          <div className="bg-normalBlue shadow-lg rounded-lg p-6 text-left border-borderBlue border-[1px] border-b-4 relative">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {t('day5')}
            </h3>
            <p className="text-4xl font-bold text-white mb-4">200&nbsp;€</p>
            <p className="text-white">{t('descriptionDay5')}</p>
            <p className="text-pinky p-3 rounded-full w-fit bg-pinky/15 absolute top-4 right-4">
              {t('price5')}
            </p>
          </div>
        </div>

        <p className="text-center text-gray mt-10 mb-10 md:text-center md:text-2xl max-w-xl mx-auto">
          {t('lastSentence')}
        </p>
      </div>
    </section>
  );
};

export default Tarifs;
