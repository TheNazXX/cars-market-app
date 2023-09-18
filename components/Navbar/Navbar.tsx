import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button/Button";

export const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image 
            src="logo.svg"
            alt="logo"
            className="object-contain"
            width={118}
            height={18}
          />
        </Link>

        <Button 
          title="Sign in"
          styles="text-primary-blue rounded-full bg-white min-w-[130px]"
        /> 
      </nav>
    </header>
  );
};

