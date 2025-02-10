import React, { ChangeEventHandler } from 'react';

type InputProps = {
  id?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: 'text' | 'email' | 'password' | 'search'| 'date' | 'website';
  value?: string;
  placeholder?: string;
  maxLength?: number;
};

export const Input = (props: InputProps) => {
  return (
    <input
      className="px-4 py-3.5 bg-white appearance-none leading-tight rounded ring-1 ring-primary border text-secondary font-light w-full"
      {...props}
    />
  );
};
export default Input