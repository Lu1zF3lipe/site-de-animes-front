import { twMerge } from "tailwind-merge";

interface CarruselAnimeProps {
  text: string;
  src: string;
  className?: string;
}

export function CarruselAnime({ text, src, className }: CarruselAnimeProps) {
  return (
    <div className="flex flex-col w-full">
      <img
        src={src}
        alt={text}
        className={twMerge(
          "w-[3.6rem] sm:w-[3.6rem] md:w-24 lg:w-44",
          className
        )}
      ></img>
      <p className="mt-2 text-[0.35rem] text-zinc-300 sm:text-[0.5rem] md:text-[0.75rem] md:font-normal lg:text-base lg:font-medium">
        {text}
      </p>
    </div>
  );
}
