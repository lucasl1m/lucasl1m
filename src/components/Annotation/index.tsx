import React from 'react';

interface Props {
  children: React.ReactNode;
}

export function Annotation({ children }: Props) {
  return (
    <div className="relative text-base max-w-full py-2 px-6 text-caption after:content-[''] after:absolute after:bg-button after:left-0 after:top-0 after:bottom-0 after:w-1.5 after:rounded after:transition-all [&>b]:relative [&>b]:text-body [&>b]:font-semibold [&>b]:transition-all hover:[&>b]:text-whiteText">
      {children}
    </div>
  );
}
