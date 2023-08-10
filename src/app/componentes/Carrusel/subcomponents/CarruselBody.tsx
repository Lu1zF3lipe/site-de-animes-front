import { ReactNode } from "react";

interface CarruselBodyProps {
  children: ReactNode;
}

export function CarruselBody({ children }: CarruselBodyProps) {
  return <div className="flex flex-col items-center  w-3/5">{children}</div>;
}
