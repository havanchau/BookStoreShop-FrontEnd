"use client";
import * as React from "react";
import Image from "next/image";
import Images from "../../public/assets/Images";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <main className="w-full">
      <div className="mt-12 flex items-center justify-between mb-12 mx-20">
        <ImageSlider images={Images.banner} />
        <div className="flex-col items-end justify-end">
          <Image
            src={Images.smallBanner[0]}
            alt="Image"
            width={392}
            height={150}
            className="mb-2 rounded-xl"
          />
          <Image
            src={Images.smallBanner[1]}
            alt="Image"
            width={392}
            height={150}
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="h-80 bg-blue-500 rounded-xl">
        <div className="h-20 flex mx-20 bg-white rounded-xl">
          <Image
            src={Images.label}
            alt="Label"
            className="ml-8"
            width={200}
            height={200}
          />
          <div>Kết thúc trong</div>
        </div>
      </div>
    </main>
  );
}
