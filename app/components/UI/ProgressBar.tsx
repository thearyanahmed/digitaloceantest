import React from "react";
import Typography from "./Typography";

interface ProgressBarProps {
    percentage: number;
    color?: string;
    message?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, color, message }) => {

  var themessage = "";
  if(!message || message.length === 0 || message === null) {
    themessage = `${percentage}%`
  } else {
    themessage = message
  }
  

  var bgcolor = "";

  if(color) {
  switch(color) {
      case "primary":
        bgcolor = "bg-primary ";
        break;
      case "secondary":
        bgcolor = "bg-secondary ";
        break;
      case "red":
        if(percentage < 20) {
          bgcolor = "bg-red-100 ";
          }

          if(percentage < 40) {
            bgcolor = "bg-red-200";
          }

          if(percentage < 60) {
            bgcolor = "bg-red-300";
          }

          if(percentage < 80) {
            bgcolor = "bg-red-400";
          }

          if(percentage < 100) {
            bgcolor = "bg-red-500";
          }

        bgcolor = "bg-red-600 ";
      break;
      case "blue":
        if(percentage < 20) {
          bgcolor = "bg-sky-100 ";
          }

          if(percentage < 40) {
            bgcolor = "bg-sky-200";
          }

          if(percentage < 60) {
            bgcolor = "bg-sky-300";
          }

          if(percentage < 80) {
            bgcolor = "bg-sky-400";
          }

          if(percentage < 100) {
            bgcolor = "bg-sky-500";
          }

        bgcolor = "bg-sky-600 ";
      break;
      case "green":
        if(percentage < 20) {
            bgcolor = "bg-lime-100 ";
        }

        if(percentage < 40) {
          bgcolor = "bg-lime-200";
        }

        if(percentage < 60) {
          bgcolor = "bg-lime-300";
        }

        if(percentage < 80) {
          bgcolor = "bg-lime-400";
        }

        if(percentage < 100) {
          bgcolor = "bg-lime-500";
        }

        bgcolor = "bg-lime-600 ";
        break;
      case "trans": 
      default:
          if(color.length > 0) {
            bgcolor = `bg-${color}`;
          } else {
            bgcolor = "text-primary ";
          }
          
        // code block
    }
  } else {
    bgcolor = "bg-primary "
  }


    return (

      <div className="w-full flex flex-row">
          <div className="basis-3/4 justify-items-center content-center">
              <div className="w-full bg-stone-400 rounded-full h-4">
              <div 
                  className={`${bgcolor} h-4 rounded-full basis-3/4`}
                  style={{ width: `${percentage}%` }}
              ></div>
              </div>
          </div>
          <div className="basis-1/4 justify-items-center p-1"><Typography variant="smaller" color="secondary">{themessage}</Typography></div>
       </div>
    );
}

export default ProgressBar;