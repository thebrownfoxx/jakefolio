import { RefObject, useEffect, useState } from "react";
import { useIsVisible } from "@/app/components/is-visible";

export function useHasBeenVisible(ref: RefObject<HTMLDivElement | null>) {
  const isVisible = useIsVisible(ref);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setHasBeenVisible(true);
    }
  }, [isVisible]);

  return hasBeenVisible;
}
