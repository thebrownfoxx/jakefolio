"use client";

import React from "react";
import { IoMdMenu } from "react-icons/io";

interface HeaderHamburgerProps {
  onClickAction: () => void;
}

export default function HeaderHamburger({
  onClickAction,
}: HeaderHamburgerProps) {
  return (
    <button onClick={onClickAction}>
      <IoMdMenu className="size-8 m-4" />
    </button>
  );
}
