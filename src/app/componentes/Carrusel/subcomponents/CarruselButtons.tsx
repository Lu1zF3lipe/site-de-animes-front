import { ReactNode } from "react";

interface CarruselButtonProps {
  children: ReactNode;
}

export function CarruselButtons({ children }: CarruselButtonProps) {
  return <div className="mt-28 flex">{children}</div>;
}
