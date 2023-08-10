import { HighlightImage } from "./HighlightImage";
import { HighlightAncor } from "./highlightAncor";
import { HighlightContent as HighlightContentDisplay } from "./highlightContent";
import { HighlightTitle } from "./highlightTitle";
import { HighlightText } from "./highlightText";

interface HighlightContentProps {
  HighlightContent: {
    name: string;
    image: string;
    text?: string;
    title?: string;
  };
  className?: string;
}

export function HighlightDisplay({
  HighlightContent,
  className,
}: HighlightContentProps) {
  return (
    <div className="flex justify-center items-center gap-8 w-4/5">
      <HighlightContentDisplay>
        <HighlightTitle title={HighlightContent.title} />
        <HighlightText text={HighlightContent.text} />
        <HighlightAncor />
      </HighlightContentDisplay>
      <HighlightImage
        HighlightContent={HighlightContent}
        className={className}
      />
    </div>
  );
}
