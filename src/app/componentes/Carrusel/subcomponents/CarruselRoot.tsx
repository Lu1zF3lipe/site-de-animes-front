import { ReactNode } from "react"

interface CarruselRootProps {
	children: ReactNode
}

export function CarruselRoot({ children }: CarruselRootProps) {
  return (
    <div className="flex flex-row-reverse justify-center">
      {children}
    </div>
  )
}


