import Footer from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Clique App | Monetization",
};

const Page = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center w-full bg-black text-white overflow-hidden">
        {/* Background */}
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src="/mise.png"
          alt="background-img"
          width={1920}
          height={1080}
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            MONETIZATION
          </h1>

          <p className="text-lg md:text-2xl text-center mb-12">
            Engage with Your fans in your own private community
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Item 1 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Integrated Event Ticketing
              </h2>
              <p className="text-gray-300">
                Create endless VIP experiences for your top fans through our
                turnkey ticketing suite.
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Subscriptions
              </h2>
              <p className="text-gray-300">
                Provide un-filtered access and exclusive experience for your
                biggest fans with monthly or annual subscriptions.
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Premium Content
              </h2>
              <p className="text-gray-300">
                Sell virtual classes, lessons, trainings, live performances, and
                more.
              </p>
            </div>

            {/* Item 4 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Store/Merch
              </h2>
              <p className="text-gray-300">
                Most exclusive “you” items for your fans as well as tickets for
                in-person events or streaming shows.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
