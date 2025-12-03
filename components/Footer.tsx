import Image from "next/image";

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
      <p className="text-bold w-full cursor-pointer text-center text-xs md:text-base text-white">
        CLIQUE APPS &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
