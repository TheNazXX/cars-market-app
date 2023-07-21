"use client";

import Image from "next/image";
import { ButtonProps } from "./Button.props";

import "./Button.css";

export const Button = ({title, styles, btnType, handleClick, rightIcon}: ButtonProps) => {
  return (
    <button 
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn hover:opacity-80 ${styles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 `}>
        {title}
      </span>

      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} fill  className="object-contain" alt="Right icon"/>
        </div>
      )}
    </button>
  );
};

