"use client";

import {Button} from "../Button/Button";
import Image from "next/image";
import "./Main.css";

export const Main = () => {
  const handleScroll= () => {};
  
  return (
    <div className="main">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="main__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="main__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <Button
          title="Explore Cars"
          styles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="main__image-container">
        <div className="main__image">
          <Image src="/main.png" alt="main" fill className="object-contain" />
        </div>

        <div className="main__image-overlay" />
      </div>
    </div>
  );
};

