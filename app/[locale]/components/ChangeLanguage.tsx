'use client';

import { usePathname, useRouter } from 'next/navigation';

const ChangeLanguage = ({
  locale,
  isScrolled,
}: {
  locale: string;
  isScrolled: boolean;
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const path = pathname.split('/').slice(2).join('/');
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <div>
      <select
        value={locale}
        onChange={handleLanguageChange}
        className={`
            block w-fit bg-transparent font-bold 
            border-none px-4 py-2 rounded-md
         
            ${
              isScrolled
                ? 'text-white placeholder-white'
                : 'text-gray-700 placeholder-gray-500'
            }
          `}
      >
        <option className="font-bold text-black" value="en">
          EN
        </option>
        <option className="font-bold text-black" value="fr">
          FR
        </option>
      </select>
    </div>
  );
};

export default ChangeLanguage;
