import { useTranslations } from 'next-intl';
import Button from './Button';

const Location = () => {
  const t = useTranslations('Footer');
  const t2 = useTranslations('Cta');
  return (
    <div className="mb-8 w-[90%] mx-auto max-w-5xl">
      <p className=" text-center font-bold text-lg my-4">{t('location')}</p>
      <iframe
        className="w-full mb-8  rounded-lg overflow-hidden shadow-md"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.6860424249794!2d-9.75826242370244!3d31.505312474220982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdad9b7f5a63f169%3A0x24a6121ff68b21e0!2sCoder%20Essaouira!5e0!3m2!1sfr!2sfr!4v1738133884159!5m2!1sfr!2sfr"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <Button link={t2('link')} text={t2('signup')} theme="secondary" />
    </div>
  );
};

export default Location;
