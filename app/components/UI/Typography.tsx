import React from 'react';

interface TypographyProps {
    children: React.ReactNode;
    variant?: 'header' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'small' | 'smaller' | 'subtitle' | 'error' | 'normal' | 'succes' | 'verybig' | 'header1' | 'header2' | 'header3' | 'verysmall';
    color?: string;
}

const Typography: React.FC<TypographyProps> = (props) => {
    const textvalue = props.children;
    var textcolor = "";

    if(props.color) {
    switch(props.color) {
        case "primary":
          textcolor = "text-primary ";
          break;
        case "secondary":
            textcolor = "text-secondary ";
          break;
        case "error":
            textcolor = "text-red-600 ";
            break;
        case "succes":
            textcolor = "text-lime-600 ";
            break;
        default:
            if(props.color.length > 0) {
                textcolor = `text-${props.color}`;
            } else {
                textcolor = "text-typography ";
            }
            
          // code block
      }
    }

/*
    if (props.color === "primary") {
        textcolor = "text-primary ";
    }
    if (props.color === "secondary") {
        textcolor = "text-secondary ";
    }

    if (props.variant === "error") {
        textcolor = "text-red-600 ";
    }

    if (props.variant === "error") {
        textcolor = "text-white ";
    }

    if (props.variant === "succes") {
        textcolor = "text-lime-600 ";
    }


    if (props.color) {
        textcolor = `text-${props.color} `;
    }
    */

    if (props.variant) {
        switch (props.variant) {
            case "header":
                return <h2 className={`${textcolor} text-3xl capitalize tracking-tight antialiased font-bold text-wrap`}>{textvalue}</h2>;
            case "verybig":
                return <h2 className={`${textcolor} text-4xl md:text-5xl antialiased font-bold text-wrap`}>{textvalue}</h2>;
            case "verysmall": 
                return <span style={{ display: 'block' }} className={`${textcolor} text-[10px] font-normal`}>{textvalue}</span>;
            case "h1":
                return <h2 className={`${textcolor} text-2xl md:text-3xl antialiased font-bold text-wrap`}>{textvalue}</h2>;
            case "h2":
                return <h2 className={`${textcolor} text-3xl antialiased font-bold text-wrap`}>{textvalue}</h2>;
            case "h3":
                return <h3 className={`${textcolor} text-2xl antialiased font-bold text-wrap`}>{textvalue}</h3>;
            case "h4":
                return <h4 className={`${textcolor} text-xl antialiased font-bold text-wrap`}>{textvalue}</h4>;
            case "h5":
                return <h5 className={`${textcolor} text-base antialiased font-bold text-wrap`}>{textvalue}</h5>;
            case "header1": 
                return <h2 className={`${textcolor} text-xl antialiased font-bold text-wrap leading-tight`}>{textvalue}</h2>;
            case "header2": 
                return <h3 className={`${textcolor} text-base antialiased font-bold text-wrap uppercase tracking-loose`}>{textvalue}</h3>;
            case "header3": 
                return <h4 className={`${textcolor} text-base antialiased text-wrap leading-normal `}>{textvalue}</h4>;
            case "p":
                return <span className={`${textcolor} text-md antialiased text-wrap`}>{textvalue}</span>;
            case "normal":
                return <span className={`${textcolor} text-base text-wrap font-light`}>{textvalue}</span>;
            case "small":
                return <span style={{ display: 'block' }} className={`${textcolor} text-base font-normal`}>{textvalue}</span>;
            case "smaller":
                return <span style={{ display: 'block' }} className={`${textcolor} text-sm font-normal`}>{textvalue}</span>;
            case "subtitle":
                return <span style={{ display: 'block' }} className={`${textcolor} text-xs antialiased font-light text-wrap`}>{textvalue}</span>;
            case "error":
                return <span style={{ display: 'block' }} className={`text-red-600 text-base font-bold text-wrap`}>{textvalue}</span>;
            case "succes":
                return <span style={{ display: 'block' }} className={`text-lime-600 text-base font-bold text-wrap`}>{textvalue}</span>;
            default:
                return <span style={{ display: 'block' }} className={`${textcolor} text-xs antialiased text-wrap`}>{textvalue}</span>;
        }
    }

    return <p>Error</p>; // Add a default return to satisfy TypeScript's strict typing
}

export default Typography;