"use client";

import React, { useRef } from "react";
import CollectionInfo from "@/app/components/collection/collection-info";
import classNames from "classnames";
import CollectionImage from "./collection-image";
import { useHasBeenVisible } from "@/app/components/has-been-visible";

export interface CollectionProps {
  className?: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  type: string;
  description: string;
  navigateText: string;
  path: string;
  external?: boolean;
  layout: "image-first" | "info-first";
}

export default function Collection({
  className,
  imageSrc,
  imageWidth,
  imageHeight,
  title,
  type,
  description,
  navigateText,
  path,
  external = false,
  layout,
}: CollectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasBeenVisible = useHasBeenVisible(ref);

  const image = (
    <div className="flex basis-[600px] items-center">
      <CollectionImage src={imageSrc} width={imageWidth} height={imageHeight} />
    </div>
  );

  const wrap = layout === "image-first" ? "flex-wrap" : "flex-wrap-reverse";

  return (
    <div
      ref={ref}
      className={classNames(
        className,
        "flex items-center justify-center",
        wrap,
        "transition-all ease-in duration-700",
        hasBeenVisible || "opacity-0 translate-y-20",
      )}
    >
      {layout === "image-first" && image}
      <CollectionInfo
        className="flex-grow basis-[320px] p-8"
        title={title}
        type={type}
        description={description}
        navigateText={navigateText}
        path={path}
        external={external}
      />
      {layout === "info-first" && image}
    </div>
  );
}
