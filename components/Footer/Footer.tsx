import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/constants/footerLinks';
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 px-6 py-10 sm:px-16">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="/logo.svg" className="object-contain" width={118} height={18} alt="logo" />
          <p className="text-base text-gray-700">
            Cars Market 2023 <br /> All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map(({ title, links }) => {
            return (
              <div key={title} className="footer__link">
                <h3 className="font-bold">{title}</h3>
                {links.map(({ title, url }) => {
                  return (
                    <Link key={title} href={url} className="text-gray-500 hover:opacity-50">
                      {title}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-500 sm:px-16 px-6 py-10">
        <div className="footer__copyrights-link">
          <p>@2023 Cars Market. All Rights Reserved</p>
          <Link href="/" className="text-gray-500 hover:opacity-50">
            Privacy Policy
          </Link>
        </div>

        <Link href="/" className="text-gray-500 hover:opacity-50">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};
