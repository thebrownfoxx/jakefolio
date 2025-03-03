import React from "react";
import Image from "next/image";
import { fahkwang, oswald } from "@/app/fonts";
import { VscChevronDown } from "react-icons/vsc";
import classNames from "classnames";

export default function Abstract() {
  return (
    <div className="flex flex-col items-center text-onDark">
      <div className="flex flex-col items-center max-w-3xl py-16">
        <PortfolioTitle top />
        <Image
          className="mt-2 mb-1 md:mt-4 md:mb-2"
          src="/jovic.jpg"
          alt="Profile Picture"
          width={600}
          height={522}
          sizes="(max-width: 600px)"
        />
        <PortfolioTitle />
        <div className="flex flex-col items-center px-6">
          <h2
            className={classNames(
              "mt-8 text-lg md:text-2xl font-medium text-center",
              fahkwang.className,
            )}
          >
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
            meaningful visual insights that aspires those who were able to see
            and capture the certain moments we remember. In short, I&#39;m an
            artist! I do various design conceptualization from online graphics,
            book illustrations to animation and video editing.
          </p>
          <a href="#collections">
            <VscChevronDown className="mt-32 size-12" />
          </a>
        </div>
      </div>
    </div>
  );
}

interface PortfolioTitleProps {
  top?: boolean;
}

function PortfolioTitle({ top = false }: PortfolioTitleProps) {
  const textStyle = "text-7xl md:text-9xl font-black";
  const shadowPosition = top ? "top-5 md:top-10" : "bottom-5 md:bottom-10";
  return (
    <div className="relative">
      <h1 className={classNames("relative z-20", textStyle, oswald.className)}>
        PORTFOLIO
      </h1>
      <p
        className={classNames(
          "absolute text-dark",
          textStyle,
          shadowPosition,
          oswald.className,
        )}
      >
        PORTFOLIO
      </p>
    </div>
  );
}
