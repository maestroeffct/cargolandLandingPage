"use client";

import Image from "next/image";
import { satoshi } from "@/app/fonts";
import { downloadAppData } from "./downloadAppData";

export default function DownloadAppSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-6">
      <div
        className={`
          relative mx-auto max-w-7xl
          min-h-[820px] sm:min-h-[860px] md:min-h-[420px] lg:h-[460px]
          overflow-hidden rounded-[32px]
          bg-[#2B1E1E]
          ${satoshi.className}
        `}
      >
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 px-6 md:px-10 py-10 md:py-12">
          {/* LEFT CONTENT — stays fully visible */}
          <div className="text-white">
            <h2 className="text-[28px] sm:text-[32px] md:text-3xl lg:text-[42px] font-extrabold leading-tight">
              {downloadAppData.title}
            </h2>

            <p className="mt-5 md:mt-10 max-w-lg text-white/80 text-[15px] sm:text-[16px] md:text-xl leading-relaxed">
              {downloadAppData.description}
            </p>

            <div className="mt-6 md:mt-10 flex flex-wrap items-start gap-4 max-[420px]:flex-col">
              <Image
                src={downloadAppData.googlePlay}
                alt="Google Play"
                width={160}
                height={50}
                className="h-auto w-[160px]"
              />
              <Image
                src={downloadAppData.appStore}
                alt="App Store"
                width={160}
                height={50}
                className="h-auto w-[160px]"
              />
            </div>
          </div>

          {/* RIGHT PHONE — intentionally overflows */}
          <div className="relative mt-2 flex justify-center lg:justify-end">
            <Image
              src={downloadAppData.phoneImage}
              alt="CargolandFood App"
              width={320}
              height={640}
              priority
              className="w-[320px] sm:w-[360px] md:w-[300px] translate-y-2 sm:translate-y-6 md:translate-y-5 md:translate-x-0 lg:translate-x-[-80px]"
            />

            {/* floating icons */}
            <Image
              src="/images/icons/food-1.png"
              alt=""
              width={44}
              height={44}
              className="absolute -top-6 right-6 block"
            />
            <Image
              src="/images/icons/food-2.png"
              alt=""
              width={40}
              height={40}
              className="absolute top-14 -right-3 block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
