"use client";

import HeaderItem, { HeaderItemProps } from "@/components/header/header-item";
import HeaderContainer from "@/components/header/header-container";
import HeaderHamburger from "@/components/header/header-hamburger";
import {
  mediumMediaType,
  smallMediaType,
  useMediaType,
} from "@/components/media-type";
import classNames from "classnames";

interface HeaderProps {
  items: HeaderItemProps[];
}

export default function Header({ items }: HeaderProps) {
  const mediaType = useMediaType();
  const showHamburger = [smallMediaType, mediumMediaType].includes(mediaType);

  return (
    <HeaderContainer
      className={classNames(!showHamburger ? "justify-center" : "justify-end")}
    >
      {showHamburger ? (
        <HeaderHamburger onClickAction={() => {}} />
      ) : (
        items.map(({ text, path }) => (
          <HeaderItem key={path} text={text} path={path} />
        ))
      )}
    </HeaderContainer>
  );
}
