import React, { ChangeEventHandler } from 'react';

type TextareaProps = {
  id?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>; // Update to HTMLTextAreaElement
  value?: string;
  placeholder?: string;
  children?: string;
  maxLength?: number;
  rows: number;
};

export const Textarea = (props: TextareaProps) => {
  return (
    <textarea 
      {...props} 
      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
    >
      {props.children}
    </textarea>
  );
};

export default Textarea;