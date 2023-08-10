interface CarruselTitleTitleProps {
  title: string;
}

export function CarruselTitle({ title }: CarruselTitleTitleProps) {
  return (
    <div className="w-full border-b-2 border-[#6217CA] mt-24">
      <p className="mb-1 md:mb-4 ml-2 text-zinc-300 text-[0.5rem] sm:text-xs md:text-lg lg:text-4xl lg:font-medium">
        {title}
      </p>
    </div>
  );
}
