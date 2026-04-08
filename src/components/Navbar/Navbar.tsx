"use client";

import { satoshi } from "@/app/fonts";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CountrySelector from "./CountrySelector";

export default function Navbar() {
  return (
    <header className="absolute top-6 left-0 right-0 z-50">
      <div
        className={`mx-auto flex max-w-7xl ${satoshi.className} items-center justify-between px-6`}
      >
        {/* LOGO — single image unit */}
        <Link href="/" className="rounded-xl px-4 py-3">
          <Image
            src="/images/logo2.png"
            alt="CargolandFood"
            width={120}
            height={36}
            priority
            unoptimized
          />
        </Link>

        {/* CENTER NAV PILL */}
        <div className="hidden md:flex items-center gap-4 rounded-full bg-[#2D2020] px-6 py-3 text-sm text-[#F4F1EE]">
          <div className="group flex items-center gap-2 font-medium cursor-pointer rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-[#F25C05]">
            <span>🏪</span>
            <span>Vendor/Restaurant</span>
          </div>

          <div className="group flex items-center gap-2 font-medium cursor-pointer rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-[#F25C05]">
            <span>🛵</span>
            <span>Delivery man</span>
          </div>

          <div className="group flex items-center gap-2 font-medium cursor-pointer rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-[#F25C05]">
            <span>More</span>
            <ChevronDown
              size={16}
              className="transition-transform duration-200 group-hover:rotate-180"
            />
          </div>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          {/* COUNTRY */}
          <CountrySelector />

          {/* SIGN UP */}
          <button className="group flex items-center cursor-pointer gap-2 rounded-full border-2 border-white bg-[#ECE4B7] px-6 py-3 text-sm font-medium text-[#1F1614] transition hover:scale-[1.03] active:scale-[0.97]">
            Sign Up
            {/* Icons */}
            <span className="relative h-4 w-4">
              {/* Default */}
              <ArrowUpRight
                size={16}
                className="absolute inset-0 transition-opacity duration-400 group-hover:opacity-0"
              />

              {/* Hover */}
              <ArrowRight
                size={16}
                className="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
              />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
