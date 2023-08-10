import { ReactNode } from "react"

interface HighlightButtonProps {
	children: ReactNode
}

export function HighlightButtons({ children }: HighlightButtonProps) {
	return (
		<div>
			{children}
		</div>
	)
}
