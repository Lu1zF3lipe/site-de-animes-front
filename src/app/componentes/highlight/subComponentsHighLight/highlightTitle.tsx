interface HighlightTitleProps {
  title?: string;
}

export function HighlightTitle({ title }: HighlightTitleProps) {
  return (
    <p
      className="text-center font-['Helvetica'] text-zinc-950 mb-4 lg:mb-8
      text-base font-bold md:text-xl md:font-bold lg:text-4xl lg:font-bold"
    >
      {title}
    </p>
  );
}
