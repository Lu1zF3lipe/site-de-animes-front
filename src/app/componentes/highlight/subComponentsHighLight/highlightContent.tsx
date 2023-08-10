import { ReactNode } from "react";

interface HighlightContentProps {
  children: ReactNode;
}

export function HighlightContent({ children }: HighlightContentProps) {
  return <div className="flex items-center w-3/5 flex-col">{children}</div>;
}
