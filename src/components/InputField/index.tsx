import React from 'react';

import { Container, Icon } from './styles';

interface InputFieldProps {
  type?: string;
  name: string;
  placeholder: string;
  isTextArea?: boolean;
  required?: boolean;
  children: React.ReactNode
}

export function InputField({
  type,
  name,
  placeholder,
  isTextArea,
  required,
  children
}: InputFieldProps) {
  return(
    <Container>
      <Icon>
        {children}
      </Icon>
      {isTextArea ? (
        <textarea name={name} cols={30} rows={8} placeholder={placeholder} required={required}/>
      ):(
        <input type={type} name={name} placeholder={placeholder} required={required}/>
      )}
    </Container>
  );
}