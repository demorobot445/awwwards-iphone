import Scene from "@/components/Scene";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clique App",
};

export default function Home() {
  return (
    <>
      <Scene />
    </>
  );
}
