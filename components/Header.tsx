"use client";

import { LayoutRefContext } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { Instagram, Linkedin, Tiktok, Twitter } from "./Icons";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { goToLabel } = useContext(LayoutRefContext);
  const [active, setActive] = useState<boolean>(false);

  const handleContact = () => {
    setActive(false);
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        goToLabel("contact", innerHeight * 1.3);
      }, 1000);
    } else {
      goToLabel("contact", innerHeight * 1.3);
    }
  };

  return (
    <>
      <div className="fixed hidden z-10 md:flex justify-between items-center w-full md:pt-6 pt-3 md:px-8 px-5">
        <div className="flex items-center gap-16">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={1366}
              height={689}
              className={"w-10 h-10 object-contain"}
            />
          </Link>
          <p className="text-sm text-white">
            Premium & Immersive Apps for
            <br />
            Artists, Creators & Brands
          </p>
        </div>
        <div className="group relative text-white hidden h-10 w-10 items-center justify-center gap-10 rounded transition-all md:flex">
          <div className="absolute top-10 right-0 flex flex-col pt-2.5">
            <div className="flex flex-col gap-1 rounded p-2">
              <Link
                href="/direct-to-fan"
                className="cursor-pointer text-right font-mono text-lg whitespace-nowrap uppercase transition duration-300 hover:text-red-500 hover:drop-shadow-[0_0_10px_red]"
              >
                Direct to Fan
              </Link>
              <Link
                href="/monetization"
                className="cursor-pointer text-right font-mono text-lg whitespace-nowrap uppercase transition duration-300 hover:text-red-500 hover:drop-shadow-[0_0_10px_red]"
              >
                Monetization
              </Link>
              <Link
                href="your-app-your-features"
                className="cursor-pointer text-right font-mono text-lg whitespace-nowrap uppercase transition duration-300 hover:text-red-500 hover:drop-shadow-[0_0_10px_red]"
              >
                Your App Your Features
              </Link>
              <button
                onClick={handleContact}
                className="cursor-pointer text-right font-mono text-lg whitespace-nowrap uppercase transition duration-300 hover:text-red-500 hover:drop-shadow-[0_0_10px_red]"
              >
                Create Your App
              </button>
            </div>
          </div>
        </div>
        <div className="grid absolute right-8 grid-cols-4 gap-3">
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
          <Link className="size-6 text-white" href="#">
            <Linkedin />
          </Link>
        </div>
        {/* <MusicStreamLine color={"bg-white"} /> */}
      </div>

      <header
        data-active={active}
        className="fixed top-0 md:hidden left-0 z-40 mx-2 my-2 flex w-[calc(100vw-16px)] items-center justify-between gap-2 rounded py-2 pr-4 pl-2 font-sans text-white backdrop-blur-lg data-[active='true']:rounded-b-none md:w-full md:items-center md:px-8 md:py-6 md:backdrop-blur-none"
      >
        <Link href="/" className="size-10">
          <Image
            className="h-full w-full object-contain"
            alt="logo"
            src="/logo.png"
            width={1028}
            height={1028}
          />
        </Link>

        <button
          onClick={() => setActive((prev) => !prev)}
          className="w-6 text-white md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 23 16"
            fill="currentColor"
          >
            <circle cx="1.6" cy="1.67" r="1.25" />
            <circle cx="11.67" cy="1.67" r="1.25" />
            <circle cx="21.75" cy="1.67" r="1.25" />
            <circle cx="1.6" cy="14.33" r="1.25" />
            <circle cx="11.67" cy="14.33" r="1.25" />
            <circle cx="21.75" cy="14.33" r="1.25" />
          </svg>
        </button>
      </header>
      <div
        data-active={active}
        className="pointer-events-none text-white fixed top-0 left-0 z-30 mx-2 flex w-[calc(100%-16px)] flex-col gap-2 rounded-b px-4 py-2 opacity-0 backdrop-blur-lg transition-all duration-500 data-[active='true']:pointer-events-auto data-[active='true']:top-16 data-[active='true']:opacity-100"
      >
        <Link
          href="/direct-to-fan"
          onClick={() => setActive(false)}
          className="text-bold cursor-pointer text-left text-lg uppercase"
        >
          Direct to Fan
        </Link>
        <Link
          href="/monetization"
          onClick={() => setActive(false)}
          className="text-bold cursor-pointer text-left text-lg uppercase"
        >
          Monetization
        </Link>
        <Link
          href="your-app-your-features"
          onClick={() => setActive(false)}
          className="text-bold cursor-pointer text-left text-lg uppercase"
        >
          Your App Your Features
        </Link>

        <button
          onClick={handleContact}
          className="text-bold text-left cursor-pointer text-lg uppercase"
        >
          CREATE YOUR WORLD
        </button>
      </div>
    </>
  );
};

export default Header;
