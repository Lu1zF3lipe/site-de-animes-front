import { ReactNode } from "react";

interface CarruselContentProps {
  children: ReactNode;
}

export function CarruselContent({ children }: CarruselContentProps) {
  return <div className="w-full flex flex-row mt-6 gap-3 ">{children}</div>;
}
