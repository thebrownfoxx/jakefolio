import { ReactNode } from "react";

interface HeaderContainerProps {
  children: ReactNode;
}

export default function HeaderContainer({ children }: HeaderContainerProps) {
  return (
    <div className="flex justify-center gap-4 bg-primary text-onPrimary">
      {children}
    </div>
  );
}
