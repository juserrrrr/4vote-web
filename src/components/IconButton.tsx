import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  backgroundColor?: string;
  backgroundImage?: string;
  onClick?: () => void;
  ariaLabel: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, backgroundColor, backgroundImage, onClick, ariaLabel }) => {
  const style = {
    backgroundColor: backgroundImage ? 'transparent' : backgroundColor,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="w-12 h-12 rounded-full flex items-center justify-center m-2"
      style={style}
    >
      {icon}
    </button>
  );
};

export default IconButton;
