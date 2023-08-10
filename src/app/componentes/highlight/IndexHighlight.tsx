import { Highlight as HighlightComponents } from "./subComponents/Index";

interface HighlightContentProps {
  HighlightContent: {
    name: string;
    image: string;
    text?: string;
    title?: string;
  };
  className?: string;
}

export function Highlight({
  HighlightContent,
  className,
}: HighlightContentProps) {
  return (
    <HighlightComponents.Root>
      <HighlightComponents.Button>
        <HighlightComponents.ButtonLeft />
      </HighlightComponents.Button>
      <HighlightComponents.Display HighlightContent={HighlightContent} />
      <HighlightComponents.Button>
        <HighlightComponents.ButtonRight />
      </HighlightComponents.Button>
    </HighlightComponents.Root>
  );
}
