import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Next.js QA Testing & Component Automation Pipeline',
  description: 'Track A: Frontend Specialists - Jest and React Testing Library (RTL) Component Audit',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
