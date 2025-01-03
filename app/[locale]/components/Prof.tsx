import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Button from './Button';

const ProfessorSection = () => {
  const t = useTranslations('Prof');
  const t2 = useTranslations('Cta');
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-8 lg:text-right">
          {t('meet')} <span className="text-normalBlue">Younès Chaoui</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between space-y-6 lg:space-y-0 lg:space-x-12">
          {/* Image Placeholder */}

          <div
            className="w-60 h-60 rounded-full  flex justify-center items-center border-blue-900 relative flex-shrink-0 lg:flex-col lg:flex-1"
            aria-label="Photo de Younes Chaoui"
          >
            <Image
              width={200}
              height={200}
              src="/younes.png"
              alt="Future Coders illustration"
              className="w-full h-auto absolute rounded-full lg:relative lg:max-w-[200px]"
            />
            <div className="hidden lg:block">
              <h3 className="text-2xl text-center font-semibold mb-8 ">
                Younes Chaoui, 34 {t('age')}
              </h3>
              <p className="text-gray mt-2 ">{t('text1')}</p>

              <p className="text-gray mt-4 ">{t('text2')}</p>
            </div>
          </div>

          {/* Description */}
          <div className="lg:flex-1">
            <h3 className="text-2xl text-center font-semibold mb-8 lg:hidden">
              Younes Chaoui, 34 {t('age')}
            </h3>
            <p className="text-gray mt-2 lg:hidden">{t('text1')}</p>

            <p className="text-gray mt-4 lg:hidden">{t('text2')}</p>

            <ul className="mt-4 space-y-2">
              <li className="flex items-start bg-normalBlue/15 text-normalBlue p-4 rounded-lg">
                <span className="text-gray-700">
                  <strong>{t('quality1')} :</strong> <br />
                  {t('desc1')}
                </span>
              </li>
              <li className="flex items-start bg-normalBlue/15 text-normalBlue p-4 rounded-lg">
                <span className="text-gray-700">
                  <strong>{t('quality2')} :</strong> <br /> {t('desc2')}
                </span>
              </li>
              <li className="flex items-start bg-normalBlue/15 text-normalBlue p-4 rounded-lg">
                <span className="text-gray-700">
                  <strong className="">{t('quality3')} :</strong> <br />
                  {t('desc3')}
                </span>
              </li>
              <li className="flex items-start bg-normalBlue/15 text-normalBlue p-4 rounded-lg">
                <span className="text-gray-700">
                  <strong>{t('quality4')} :</strong> <br />
                  {t('desc4')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 lg:max-w-sm lg:mx-auto">
          <Button link={t2('link')} text={t2('signup')} theme="primary" />
        </div>
      </div>
    </section>
  );
};

export default ProfessorSection;
