import { useTranslations } from 'next-intl';
import Image from 'next/image';

const ProgramObjectives = () => {
  const t = useTranslations('ProgramObjectives');
  const objectiveKeys = [
    'objective1',
    'objective2',
    'objective3',
    'objective4',
    'objective5',
    'objective6',
    'objective7',
    'objective8',
  ];

  return (
    <section className="py-12 px-6 bg-normalBlue mt-8 my-4">
      <div>
        <h2 className="text-center text-white text-3xl px-4 font-bold">
          {t('title')}
        </h2>
        <p className="text-white text-center text-lg mt-4 ">
          {t('description')}
        </p>
      </div>
      <ul className="list-disc list-inside text-left text-gray-700 space-y-4 mt-12 md:w-fit mx-auto">
        {objectiveKeys.map((objective, index) => (
          <li
            key={index}
            className="flex items-start list-none text-white !mt-8"
          >
            <Image
              src="/check.svg"
              alt="check icon"
              width={30}
              height={30}
              className="inline-block mr-2"
            />
            <span>{t(`${objective}`)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProgramObjectives;
