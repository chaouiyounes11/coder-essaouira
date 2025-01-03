import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');
  return (
    <footer className="bg-normalBlue text-white py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          {/* Logo and Description */}
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold mb-2">Coder Essaouira</h2>
            <p className="text-gray-300">{t('text')}</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          © 2025 Coder Essaouira. {t('copyRight')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
