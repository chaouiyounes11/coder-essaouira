'use client';

interface ButtonProps {
  theme: 'primary' | 'secondary';
  text: string;
  link: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Button = ({ theme, text, link, onClick }: ButtonProps) => {
  return (
    <a
      href={link}
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full flex items-center justify-center text-center h-14 font-bold
        ${
          theme === 'primary'
            ? 'bg-normalBlue text-white'
            : 'bg-transparent border border-normalBlue text-normalBlue'
        }
      `}
    >
      {text}
    </a>
  );
};

export default Button;
