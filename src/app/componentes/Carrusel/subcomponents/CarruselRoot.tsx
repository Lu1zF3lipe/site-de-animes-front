import { ReactNode } from "react";

interface CarruselRootProps {
  children: ReactNode;
}

export function CarruselRoot({ children }: CarruselRootProps) {
  return <div className="flex flex-row justify-center">{children}</div>;
}
