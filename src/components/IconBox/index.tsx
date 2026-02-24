import React from 'react';

interface Props {
  children: React.ReactNode;
  href: string;
  alt?: string;
}

export function IconBox({ children, href, alt }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-8 h-8 no-underline text-icon transition-all duration-300 hover:-translate-y-1 hover:text-button [&_.icon]:w-8 [&_.icon]:h-8"
      aria-label={alt ?? 'Link'}
    >
      {children}
    </a>
  );
}
