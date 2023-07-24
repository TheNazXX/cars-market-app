"use client";

import { Button } from "../Button/Button";
import { ShowMoreProps } from "./ShowMore.props";

export const ShowMore = ({pageNumber, isNext, setLimit}: ShowMoreProps) => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 8
    setLimit(newLimit);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button 
          title="ShowMore"
          styles="bg-primary-blue text-white rounded-full"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};
