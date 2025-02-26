import React from "react";
import CollectionInfo from "@/app/components/collection/collection-info";
import classNames from "classnames";
import CollectionImage from "../../../../public/collection-image";

export interface CollectionProps {
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
  const image = (
    <div className="flex basis-[600px] items-center">
      <CollectionImage src={imageSrc} width={imageWidth} height={imageHeight} />
    </div>
  );

  const wrap = layout === "image-first" ? "flex-wrap" : "flex-wrap-reverse";

  return (
    <div className={classNames("flex items-center justify-center", wrap)}>
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
