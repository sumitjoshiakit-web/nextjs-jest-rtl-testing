import React from 'react';

export interface CardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  children,
  className = '',
}) => {
  return (
    <div
      data-testid="card-container"
      className={`bg-white border border-slate-200 rounded-xl p-6 shadow-sm ${className}`.trim()}
    >
      {title && (
        <h3 data-testid="card-title" className="text-lg font-bold text-slate-900 mb-1">
          {title}
        </h3>
      )}
      {description && (
        <p data-testid="card-description" className="text-sm text-slate-600 mb-3">
          {description}
        </p>
      )}
      {children}
    </div>
  );
};

export default Card;
