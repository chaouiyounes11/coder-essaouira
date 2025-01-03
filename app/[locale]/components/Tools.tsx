import { useTranslations } from 'next-intl';
import Image from 'next/image';

const ToolsSection = () => {
  const t = useTranslations('Tools');
  return (
    <section className="py-12 px-6 bg-normalBlue mt-8 my-4">
      <div>
        <h2 className="text-center text-white text-3xl px-4 font-bold">
          {t('title')}
        </h2>
        <p className="text-white text-center text-lg my-4">
          {t('description')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 lg:max-w-7xl mx-auto">
        <div className=" !bg-mediumBlue shadow-md p-6 text-white rounded-lg">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
            <Image
              width={40}
              height={40}
              src="/vscode.svg"
              alt="Vscode"
              className="m-auto"
            />
          </div>
          <h3 className="text-xl font-semibold -800 mb-2 mt-4">
            Visual Studio Code (VSCode)
          </h3>
          <p className="text-gray-600">{t('vsCode')}</p>
        </div>

        <div className=" !bg-mediumBlue shadow-md p-6 pt-4  text-white rounded-lg">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
            <Image
              width={80}
              height={80}
              src="/scratch.svg"
              alt="scratch"
              className="m-auto"
            />
          </div>
          <h3 className="text-xl font-semibold -800 mb-2 mt-4">Scratch</h3>
          <p className="text-gray-600">{t('scratch')}</p>
        </div>

        <div className=" !bg-mediumBlue shadow-md p-6 text-white rounded-lg">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
            <Image
              width={70}
              height={70}
              src="/teachablemachine.svg"
              alt="teachable machine"
              className="m-auto"
            />
          </div>
          <h3 className="text-xl font-semibold -800 mb-2 mt-4">
            Teachable Machine
          </h3>
          <p className="text-gray-600">{t('teachable')}</p>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
