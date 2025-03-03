import { ReactNode, RefObject } from "react";
import classNames from "classnames";

interface HeaderContainerProps {
  className?: string;
  ref?: RefObject<HTMLDivElement>;
  children: ReactNode;
}

export default function HeaderContainer({
  className,
  ref,
  children,
}: HeaderContainerProps) {
  return (
    <div
      ref={ref}
      className={classNames("flex gap-4 bg-primary text-onPrimary", className)}
    >
      {children}
    </div>
  );
}
