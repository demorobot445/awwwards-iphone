// import { ShirtType } from "@/lib/textures";
import { View } from "@react-three/drei";
import React from "react";
import { FirstSportModel } from "./FirstSportModel";
import { SecondModel } from "./SecondModel";
import ThirdModel from "./ThirdModel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Scene = () => {
  return (
    <main className="min-h-screen">
      <section id="first-section" className="h-screen">
        <View className="w-dvw h-dvh">
          <FirstSportModel />
        </View>
      </section>
      <section
        id="third-section"
        className="absolute left-0 top-[500vh] h-screen"
      >
        <View className="w-dvw h-dvh">
          <ThirdModel shirtType={"sport"} />
        </View>
      </section>
      <section id="second-section" className="absolute inset-0 -z-10 h-screen">
        <View className="w-dvw h-dvh">
          <SecondModel shirtType={"sport"} />
        </View>
      </section>
    </main>
  );
};

export default Scene;
