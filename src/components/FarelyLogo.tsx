import farelyIcon from '../assets/icon.png';

interface FarelyLogoProps {
  size?: number;
  className?: string;
  showShadow?: boolean;
}

export function FarelyLogo({ size = 40, className = '', showShadow = false }: FarelyLogoProps) {
  return (
    <img
      src={farelyIcon}
      alt="Farely"
      width={size}
      height={size}
      className={`rounded-xl object-cover shrink-0 ${showShadow ? 'shadow-lg shadow-brand-green/20' : ''} ${className}`}
    />
  );
}
