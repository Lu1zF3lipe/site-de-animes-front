import { twMerge } from "tailwind-merge";

interface HighlightContentProps {
  HighlightContent: {
    name: string;
    image: string;
    text?: string;
    title?: string;
  };
  className?: string;
}

export function HighlightImage({
  HighlightContent,
  className,
}: HighlightContentProps) {
  return (
    <div>
      <img
        src={HighlightContent.image}
        alt={HighlightContent.name}
        className={twMerge((className = "w-[150px] h-[250px] sm:w-[203px] sm:h-[305px] md:w-[303px] md:h-[450px] lg:w-[403px] lg:h-[605px]"), className)}
      />
    </div>
  );
}
