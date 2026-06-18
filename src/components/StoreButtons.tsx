import appStoreBadge from '../assets/App_Store_(iOS).svg.webp';
import playStoreBadge from '../assets/google-play-store-mobile-apps-logo-free-png.webp';
import { APP_STORE_URL, PLAY_STORE_URL } from '../constants';

type StoreButtonVariant = 'hero' | 'download' | 'banner';

interface StoreButtonProps {
  variant?: StoreButtonVariant;
  className?: string;
}

const variantStyles: Record<StoreButtonVariant, { app: string; play: string }> = {
  hero: {
    app: 'bg-brand-green text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all hover:opacity-90 hover:-translate-y-1 active:scale-95 shadow-lg shadow-green-200',
    play: 'bg-slate-900 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all hover:bg-slate-800 hover:-translate-y-1 active:scale-95 shadow-lg',
  },
  download: {
    app: 'bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 transition-transform hover:scale-105',
    play: 'bg-white border border-green-100 text-brand-green px-8 py-4 rounded-2xl flex items-center gap-3 transition-transform hover:scale-105',
  },
  banner: {
    app: 'bg-white px-6 py-3 rounded-2xl shadow-xl hover:bg-slate-50 transition-colors flex items-center justify-center',
    play: 'bg-slate-900 px-6 py-3 rounded-2xl shadow-xl hover:bg-slate-800 transition-colors flex items-center justify-center',
  },
};

const iconSizes: Record<StoreButtonVariant, string> = {
  hero: 'h-7 w-7',
  download: 'h-8 w-8',
  banner: 'h-11 w-auto',
};

const labelSizes: Record<StoreButtonVariant, { eyebrow: string; title: string }> = {
  hero: { eyebrow: 'text-[9px]', title: 'text-sm' },
  download: { eyebrow: 'text-[10px] uppercase font-bold', title: 'text-xl' },
  banner: { eyebrow: 'text-[10px] uppercase font-bold', title: 'text-xl' },
};

export function AppStoreButton({ variant = 'hero', className = '' }: StoreButtonProps) {
  if (variant === 'banner') {
    return (
      <a href={APP_STORE_URL} className={`${variantStyles.banner.app} ${className}`}>
        <img
          src={appStoreBadge}
          alt="Download on the App Store"
          className={`${iconSizes.banner} object-contain`}
        />
      </a>
    );
  }

  return (
    <a href={APP_STORE_URL} className={`${variantStyles[variant].app} ${className}`}>
      <img
        src={appStoreBadge}
        alt=""
        className={`${iconSizes[variant]} object-contain shrink-0`}
        aria-hidden
      />
      <div className="text-left">
        <div className={`${labelSizes[variant].eyebrow} font-medium opacity-70 leading-none uppercase`}>
          Available on
        </div>
        <div className={`${labelSizes[variant].title} font-bold leading-none mt-1`}>App Store</div>
      </div>
    </a>
  );
}

export function GooglePlayButton({ variant = 'hero', className = '' }: StoreButtonProps) {
  if (variant === 'banner') {
    return (
      <a href={PLAY_STORE_URL} className={`${variantStyles.banner.play} ${className}`}>
        <img
          src={playStoreBadge}
          alt="Get it on Google Play"
          className={`${iconSizes.banner} object-contain`}
        />
      </a>
    );
  }

  return (
    <a href={PLAY_STORE_URL} className={`${variantStyles[variant].play} ${className}`}>
      <img
        src={playStoreBadge}
        alt=""
        className={`${iconSizes[variant]} object-contain shrink-0`}
        aria-hidden
      />
      <div className="text-left">
        <div className={`${labelSizes[variant].eyebrow} font-medium opacity-70 leading-none uppercase`}>
          Get it on
        </div>
        <div className={`${labelSizes[variant].title} font-bold leading-none mt-1`}>Google Play</div>
      </div>
    </a>
  );
}
