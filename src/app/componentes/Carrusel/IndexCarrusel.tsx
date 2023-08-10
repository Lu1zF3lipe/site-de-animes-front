import { Carrusel as CarruselComponets } from "./subcomponents/Index";

interface animesProps {
  animes: {
    name: string;
    image: string;
  }[];
  className?: string;
}

export function Carrusel({ animes, className }: animesProps) {
  return (
    <CarruselComponets.Root>
      <CarruselComponets.Button>
        <CarruselComponets.ButtonLeft />
      </CarruselComponets.Button>
      <CarruselComponets.Body>
        <CarruselComponets.Title title="Lamçamentos" />
        <CarruselComponets.Content>
          {animes.map((anime) => (
            <CarruselComponets.Anime
              text={anime.name}
              src={anime.image}
              className={className}
            />
          ))}
        </CarruselComponets.Content>
      </CarruselComponets.Body>
      <CarruselComponets.Button>
        <CarruselComponets.ButtonRight />
      </CarruselComponets.Button>
    </CarruselComponets.Root>
  );
}
