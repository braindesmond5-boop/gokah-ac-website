import React from 'react';
import Link from 'next/link';
// We use a custom inline function below instead of cn from utils or cva

// Temporary inline cn function until we make utils
function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, href, target, rel, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-primary-hover shadow-md",
      secondary: "bg-secondary text-white hover:bg-sky-600 shadow-md",
      outline: "border border-primary text-primary hover:bg-primary hover:text-white",
      ghost: "hover:bg-surface text-foreground",
      danger: "bg-accent text-white hover:bg-orange-600 shadow-md",
    };
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg font-semibold",
    };

    const combinedClasses = classNames(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link href={href} target={target} rel={rel} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
