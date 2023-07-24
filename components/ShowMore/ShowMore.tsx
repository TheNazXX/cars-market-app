"use client";

import { updateSearchParams } from "@/utils";
import { Button } from "../Button/Button";
import { ShowMoreProps } from "./ShowMore.props";
import {useRouter} from 'next/navigation';

export const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
  
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 8
    const newPathName = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathName);
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
