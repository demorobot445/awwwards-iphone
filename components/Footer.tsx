import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Tiktok, Twitter } from "./Icons";

const Footer = () => {
  return (
    <footer className="relative z-20 flex flex-col py-[46px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center px-4 md:px-0">
        <Image
          className="my-10 h-auto w-[60%] object-contain md:my-28"
          src="/full-logo.png"
          alt="3d-text"
          width={1366}
          height={689}
        />
      </div>
      <div className="grid grid-cols-4 gap-6 mb-6 w-fit mx-auto">
        <Link
          className="size-6 text-white"
          href="https://www.instagram.com/getcliqueapps?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
          target="_blank"
        >
          <Instagram />
        </Link>
        <Link
          className="size-6 text-white"
          href="https://www.tiktok.com/@getcliqueapps?_r=1&_t=ZP-922HZWWmOb9"
          target="_blank"
        >
          <Tiktok />
        </Link>
        <Link
          className="size-6 text-white"
          href="https://x.com/getcliqueapps?s=21"
          target="_blank"
        >
          <Twitter />
        </Link>
        <Link
          className="size-6 text-white"
          href="https://www.linkedin.com/company/clique-apps/?viewAsMember=true"
        >
          <Linkedin />
        </Link>
      </div>
      <p className="text-bold w-full cursor-pointer text-center text-xs md:text-base text-white">
        CLIQUE APPS &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
