import React from "react";
import Image from "next/image";
import { fahkwang, oswald } from "@/app/fonts";
import { VscChevronDown } from "react-icons/vsc";

export default function Abstract() {
  return (
    <div className="flex flex-col items-center text-onDark">
      <div className="flex flex-col items-center max-w-3xl py-16">
        <PortfolioTitle top />
        <Image
          className="mt-4 mb-2"
          src="/jovic.jpg"
          alt="Profile Picture"
          width={600}
          height={522}
          sizes="(max-width: 600px)"
        />
        <PortfolioTitle />
        <h2 className={`mt-8 text-2xl font-medium ${fahkwang.className}`}>
          Jovic Cudia - Multimedia Artist
        </h2>
        <p className="mt-8 text-center text-xs">
          Crafted from bones to flesh and a graduate of Bachelor of Fine Arts
          Major in Visual Communication.
        </p>
        <p className="mt-4 text-center text-xs">
          I love listening to various genres of music but mostly alternative
          rock to think about the mundane things in life and its beauty.
          Frequently on the chase for something to move forward and create
          meaningful visual insights that aspires those who were able to see and
          capture the certain moments we remember. In short, I&#39;m an artist!
          I do various design conceptualization from online graphics, book
          illustrations to animation and video editing.
        </p>
        <a href="#collections">
          <VscChevronDown className="mt-32 size-12" />
        </a>
      </div>
    </div>
  );
}

interface PortfolioTitleProps {
  top?: boolean;
}

function PortfolioTitle({ top = false }: PortfolioTitleProps) {
  const shadowPosition = top ? "top-10" : "bottom-10";
  return (
    <div className="relative">
      <h1 className={`relative text-9xl font-black ${oswald.className} z-20`}>
        PORTFOLIO
      </h1>
      <p
        className={`absolute ${shadowPosition} text-9xl text-dark font-black ${oswald.className}`}
      >
        PORTFOLIO
      </p>
    </div>
  );
}
