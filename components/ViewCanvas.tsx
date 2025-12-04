"use client";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import Rig from "./Rig";
import LoadingSkeleton from "./LoadingSkeleton";
import { patchThreeLoadingManager } from "@/lib/patchThreeLoadingManager";
import AssetsPreload from "./AssetsPreload";
import { useMediaQuery } from "react-responsive";
patchThreeLoadingManager();

const ViewCanvas = () => {
  const [eventSource, setEventSource] = useState<HTMLElement | null>(null);
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  useEffect(() => {
    setEventSource(document.body);
  }, []);

  return (
    <Canvas
      style={{ position: "fixed", inset: 0, overflow: "hidden" }}
      camera={{ position: [0, 0.7, 3], fov: isDesktop ? 30 : 40 }}
      eventSource={eventSource ?? undefined}
      eventPrefix="client"
    >
      <AssetsPreload />
      <Suspense fallback={<LoadingSkeleton />}>
        <View.Port />
      </Suspense>
      {/* <OrbitControls /> */}
      <Rig />
    </Canvas>
  );
};

export default ViewCanvas;
