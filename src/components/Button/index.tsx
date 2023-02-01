import React from 'react';

import { Container } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  typeSubmit?: boolean;
}

export function Button({ typeSubmit, children }: ButtonProps) {
  return (
    <>
      {typeSubmit ? (
        <Container >
          <input type='submit' >
            <span>{children}</span>
          </input>
        </Container>
      ) : (
        <Container>
          <span>{children}</span>
        </Container>
      )}
    </>
  );
};