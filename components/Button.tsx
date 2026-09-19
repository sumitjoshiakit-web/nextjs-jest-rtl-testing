import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({
  text,
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  type = 'button',
  className = '',
  ...props
}) => {
  const content = text || children;

  const baseClass =
    'px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed select-none text-sm inline-flex items-center justify-center';

  const variantClasses = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm',
    secondary: 'bg-slate-800 text-white hover:bg-slate-900 shadow-sm',
    danger: 'bg-rose-600 text-white hover:bg-rose-700 shadow-sm',
    outline: 'border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 shadow-xs',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${variantClasses[variant]} ${className}`.trim()}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
