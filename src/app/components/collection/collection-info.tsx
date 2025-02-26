import React from "react";
import NavigateButton from "@/app/components/collection/navigate-button";
import { fahkwang } from "@/app/fonts";
import classNames from "classnames";

interface CollectionInfoProps {
  className?: string;
  title: string;
  type: string;
  description: string;
  navigateText: string;
  path: string;
  external?: boolean;
}

export default function CollectionInfo({
  className,
  title,
  type,
  description,
  navigateText,
  path,
  external = false,
}: CollectionInfoProps) {
  return (
    <div className={classNames(className, "flex flex-col gap-4")}>
      <h3 className={classNames("text-4xl", fahkwang.className)}>{title}</h3>
      <h6>{type}</h6>
      <p>{description}</p>
      <NavigateButton text={navigateText} path={path} external={external} />
    </div>
  );
}
