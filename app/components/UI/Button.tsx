
// Button.tsx
'use client'; // Add this at the top to enable client-side interactivity

import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  color?: "green" | "red" | "blue";
  fullWidth?: true | false;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, type, color, fullWidth }) => {

  var bgcolor: string = "bg-button";
  var hovercolor: string = "bg-buttonhover";

  if(color) {
    switch(color) {
      case "red":
        bgcolor = "bg-red-800";
        hovercolor = "bg-red-200";
        break;
      case "green":
        bgcolor = "bg-lime-700";
        hovercolor = "bg-red-300";
        break;
      case "blue":
        bgcolor = "bg-cyan-600";
        hovercolor = "bg-cyan-300";
    }
  }

  var fullw = "";
  if(fullWidth) {
      fullw = "w-full"
  }
  const tailwindcss = `px-4 py-2.5 text-base font-medium text-navtext ${bgcolor} hover:${hovercolor} focus:ring-2 focus:outline-none focus:ring-secondary rounded-lg text-center ${fullw}`;
  
  return (
    <button 
      type={type || "button"} 
      onClick={onClick} 
      className={tailwindcss}
    >
      {children}
    </button>
  );
};

export default Button;



/*
import React from 'react';

type ButtonProps = {
    id?: String;
    name?: String;
    onClick: () => void;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
  }


export const Button = (props: ButtonProps) => {
    return <button onClick={onClick} className="px-4 py-2.5 text-base font-medium text-navtext bg-button hover:bg-buttonhover focus:ring-2 focus:outline-none focus:ring-secondary rounded-lg text-center">
              {props.children}
            </button>
}

*/



/*
"use client"; // Add this line to make it a Client Component

import React from 'react';

type ButtonProps = {
    id?: string;
    name?: string;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
}

export const Button = ({ children, ...rest }: ButtonProps) => {
    return (
        <button 
            className="px-4 py-2.5 text-base font-medium text-navtext bg-button hover:bg-buttonhover focus:ring-2 focus:outline-none focus:ring-secondary rounded-lg text-center"
        />

    );
}
    */
