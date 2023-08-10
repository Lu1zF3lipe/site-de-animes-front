interface HighlightTextProps {
  text?: string;
}

export function HighlightText({ text }: HighlightTextProps) {
  return (
    <p className="text-center font-['Lato'] text-zinc-950 
      text-[0.75rem] md:text-base lg:text-2xl lg:font-medium ">
      {text}
    </p>
  );
}
