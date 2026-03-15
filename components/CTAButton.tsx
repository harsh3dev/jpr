import Link from 'next/link';

interface CTAButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'white' | 'outline-white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CTAButton({
  text,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 shadow-lg';

  const variants = {
    primary:
      'bg-accent text-white hover:bg-accent-hover hover:shadow-xl hover:-translate-y-1 active:translate-y-0 text-shadow-sm',
    secondary:
      'bg-white text-primary border-2 border-primary hover:bg-primary-50 hover:shadow-xl hover:-translate-y-1 active:translate-y-0',
    white:
      'bg-white text-primary hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1 active:translate-y-0',
    'outline-white':
      'bg-transparent text-white border-2 border-white hover:bg-white/10 hover:shadow-xl hover:-translate-y-1 active:translate-y-0',
  };

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {text}
    </button>
  );
}
