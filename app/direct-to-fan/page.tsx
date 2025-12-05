import Footer from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Clique App | Direct To Fan",
};

const Page = () => {
  return (
    <>
      <section className="relative min-h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          className="object-cover w-full h-full absolute inset-0"
          src="/mise.png"
          alt="background-img"
          width={1920}
          height={1080}
          priority
        />

        {/* Dark Overlay for clarity */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Direct to Fan</h1>

          <p className="text-lg md:text-2xl font-light leading-relaxed">
            Fans download <span className="font-semibold">YOUR</span> app, not
            another social media or “tech platform”.
          </p>
          <div className="badge mt-5 flex items-center justify-center gap-2 ">
            <Image
              className="h-16 w-fit object-contain"
              src="/badge/googleplay.png"
              width={1366}
              height={689}
              alt="badge"
            />
            <Image
              className="h-16 w-fit object-contain"
              src="/badge/appstore.png"
              width={1366}
              height={689}
              alt="badge"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
