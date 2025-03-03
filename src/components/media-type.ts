import { useEffect, useState } from "react";
import remToPixels from "@/components/rem-to-pixels";

interface MediaType {
  name: string;
  minWidthRem: number;
}

export const smallMediaType: MediaType = {
  name: "sm",
  minWidthRem: 40,
};

export const mediumMediaType: MediaType = {
  name: "md",
  minWidthRem: 48,
};

export const largeMediaType: MediaType = {
  name: "lg",
  minWidthRem: 64,
};

export const xLargeMediaType: MediaType = {
  name: "xl",
  minWidthRem: 80,
};

export const xxLargeMediaType: MediaType = {
  name: "2xl",
  minWidthRem: 96,
};

export const mediaTypes = [
  smallMediaType,
  mediumMediaType,
  largeMediaType,
  xLargeMediaType,
  xxLargeMediaType,
];

export function useMediaType() {
  const [mediaType, setMediaType] = useState<MediaType>(smallMediaType);

  useEffect(() => {
    function handler() {
      const width = window.innerWidth;
      const mediaType = mediaTypes.findLast(
        (value) => width >= remToPixels(value.minWidthRem),
      );
      if (mediaType) {
        setMediaType(mediaType);
      }
    }

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  });

  return mediaType;
}
