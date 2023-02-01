import React from 'react';

import { Container } from './styles';

interface IconBoxProps {
  children: React.ReactNode;
  alt?: string,
  href?: string
}

export function IconBox({ href, children }: IconBoxProps) {
  return(
    <Container href={href} target="_blank">
      {children}
    </Container>
  );
}