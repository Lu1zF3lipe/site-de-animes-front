import { ReactNode } from "react";

interface HighlightRootProps {
  children: ReactNode;
}

export function HighlightRoot({ children }: HighlightRootProps) {
  return (
    <div className="h-auto flex flex-row justify-center items-center bg-[#26C02C]">
      {children}
    </div>
  );
}
