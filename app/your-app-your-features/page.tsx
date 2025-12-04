import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Clique App | Your App Your Features",
};

const Page = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/mise.png"
        alt="background-img"
        width={1920}
        height={1080}
        className="object-cover absolute inset-0 w-full h-full"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        {/* MAIN HEADING */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Your App Your Features
        </h1>

        {/* SUB ITEMS */}
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Push Notifications
            </h2>
            <p className="text-gray-300">
              Send automated push notifications upon “Going Live” or when
              sending a direct message.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              4K Streaming Events
            </h2>
            <p className="text-gray-300">
              Live shows, studio sessions, listening parties, and more.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Go Live</h2>
            <p className="text-gray-300">
              Behind the scenes, Q&A, work life, and personal life.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Presale & DM’s
            </h2>
            <p className="text-gray-300">
              Distribute unique presale codes and direct messages to all your
              fans or any audience subset you create.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Analytics Dashboard
            </h2>
            <p className="text-gray-300">
              Metrics derived from engagement, frequency, and monetization of
              content, subscribers, and events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
