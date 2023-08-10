/* eslint-disable @next/next/no-img-element */
import { Search, Bookmark, UserCircle2, X} from "lucide-react";
import Image from "next/image";
import { Carrusel } from "./componentes/Carrusel/IndexCarrusel";
import { Highlight } from "./componentes/highlight/IndexHighlight";

const animesContent = [
  {
    name: "Black clover",
    image: "/icons/blackclover.jpg"
  },
  {
    name: "É Sério Que Eu Sou o Mais Forte",
    image: "/icons/ÉSérioQueEuSouoMaisForte.jpg"
  },
  {
    name: "Laughing Under the Clouds",
    image: "/icons/LaughingUndertheClouds.jpg"
  },
  {
    name: "My Unique Skill",
    image: "/icons/MyUniqueSkill.jpg"
  },
  {
    name: "Malevolent Spirits: Mononogatari",
    image: "/icons/MalevolentSpiritsMononogatari.jpg"
  },
  {
    name: "Yamada-kun and the even Witches",
    image: "/icons/Yamada-kunandtheevenWitches.jpg"
  }
];
const animesContent2 = [
  {
    name: "S2 EP1 Jujutsu kaisen",
    image: "/icons/jujutsukaisenEP.jpg",
  },
  {
    name: "S1 E3 Mashle: magic and muscle",
    image: "/icons/mashleEP.jpg",
  },
  {
    name: "S1 E4 zoo: 100 coisa pra fazer antes de virar zonbie",
    image: "/icons/zoo100EP.jpg",
  }
];

const HighlightContent = {
  name: "girl with glasses",
  image: "/icons/girlwithglasses.jpg",
  title: "THE GIRL I LIKE FORGOT HER GLASSES",
  text: "O ano escolar de Komura começa com uma nova paixão, mas a garota que ele gosta tende a esquecer seus óculos!"
}

export default function Home() {
  return (
      <div className="h-[140rem] flex flex-col">
        <header className="h-16 w-full bg-zinc-900 flex flex-row items-center sticky top-0">
          <a href="#" className="overflow-hidden items-center ml-44 flex-1">
            <Image src="/icons/logo.jpg" width={192} height={64} alt="logo do site" className="hover:opacity-50"/> 
          </a>
          <div className="h-full flex flex-row w-auto mr-60 justify-center items-center"> 
            <a href="#" className="flex w-16 h-full justify-center text-zinc-300 items-center hover:bg-zinc-700">
              <Search/>
            </a>
            <a href="#" className="flex w-16 h-full justify-center text-zinc-300 items-center hover:bg-zinc-700">
              <Bookmark/>
            </a>
            <a href="#" className="flex w-16 h-full justify-center text-zinc-300 items-center hover:bg-zinc-700">
              <UserCircle2/>
            </a>
          </div>
        </header>
        <main className="">
          <Highlight HighlightContent={HighlightContent} />

          <Carrusel animes={animesContent}/>
          <Carrusel animes={animesContent}/>
          <Carrusel animes={animesContent2} className="w-24 sm:w-40 md:w-72 lg:w-[360px]" />

        </main>
      </div>
  )
}
