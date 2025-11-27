import { Environment, View } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import { SecondModel } from "./SecondModel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Scene = () => {
  return (
    <main className="min-h-screen">
      <section id="second-section" className="absolute inset-0 -z-10 h-screen">
        <View className="w-dvw h-dvh">
          <Environment environmentIntensity={0.6} files={"/env.hdr"} />
          <SecondModel shirtType={"sport"} />
        </View>
      </section>
    </main>
  );
};

export default Scene;
