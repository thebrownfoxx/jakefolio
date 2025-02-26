import React from "react";
import Image from "next/image";

interface CollectionImageProps {
  src: string;
  width: number;
  height: number;
}

export default function CollectionImage({
  src,
  width,
  height,
}: CollectionImageProps) {
  return (
    <Image
      src={src}
      alt=""
      width={width}
      height={height}
      style={{
        flex: "1 1 auto",
        objectFit: "scale-down",
        maxWidth: "100%",
        height: "auto",
      }}
    />
  );
}
