interface NavigateButtonProps {
  text: string;
  path: string;
  external?: boolean;
}

import React from "react";

export default function NavigateButton({
  text,
  path,
  external = false,
}: NavigateButtonProps) {
  const target = external ? "_blank" : "_self";

  return (
    <a className="font-bold" target={target} href={path}>
      {text}
    </a>
  );
}
