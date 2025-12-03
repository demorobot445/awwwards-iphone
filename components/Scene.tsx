import { Environment, View } from "@react-three/drei";
import React, { useRef } from "react";
import { SecondModel } from "./SecondModel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Form from "./Form";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);
const Scene = () => {
  const htmlRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen">
      <section id="second-section" className="absolute inset-0 -z-10 h-screen">
        <View className="w-dvw h-dvh">
          <Environment environmentIntensity={0.6} files={"/env.hdr"} />
          <SecondModel shirtType={"sport"} htmlRef={htmlRef} />
        </View>
      </section>
      <div ref={htmlRef} className="fixed z-20 h-fit w-full left-0 top-[100vh]">
        <Form />
        <Footer />
      </div>
    </main>
  );
};

export default Scene;
