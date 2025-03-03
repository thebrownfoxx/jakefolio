import { useLayoutEffect, useRef, useState } from "react";

export default function useHasHorizontalOverflow() {
  const ref = useRef<Element>(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  useLayoutEffect(() => {
    function handleResize() {
      const clientWidth = ref.current?.clientWidth ?? 0;
      const scrollWidth = ref.current?.scrollWidth ?? 0;
      setHasOverflow(clientWidth < scrollWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  return { ref, hasOverflow };
}
