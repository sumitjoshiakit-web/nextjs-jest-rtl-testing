import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  id,
  placeholder,
  value,
  onChange,
  disabled = false,
  className = '',
  ...props
}) => {
  const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label
          htmlFor={inputId}
          data-testid="input-label"
          className="block text-sm font-medium text-slate-700"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-3.5 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
          error ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300'
        } ${disabled ? 'bg-slate-100 cursor-not-allowed' : 'bg-white'} ${className}`.trim()}
        {...props}
      />
      {error && (
        <p data-testid="input-error" role="alert" className="text-xs text-rose-600 font-medium">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
