/* eslint-disable @next/next/no-img-element */
import { Search, Bookmark, UserCircle2, X} from "lucide-react";
import Image from "next/image";
import { Carrusel } from "./componentes/Carrusel/Index";

export default function Home() {
  return (
      <div className="h-[140rem] flex flex-col">
        <header className="h-16 w-full bg-zinc-900 flex flex-row items-center fixed">
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
        <main className="h-auto">
          <div className="h-auto flex flex-row-reverse justify-center items-center bg-[#26C02C]">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="26" viewBox="0 0 15 26" fill="none" className="ml-16 hover:opacity-60">
                <path d="M2 23.6066L12.6066 13" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
                <path d="M12.6066 12.6066L2 1.99997" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
              </svg>
            </button>
            <Image src="/icons/girlwithglasses.jpg" width={403} height={605} alt="logo do site" className="ml-10"/>
            <div className="flex items-center w-2/6 flex-col">
              <p className="text-center font-['Helvetica'] text-zinc-950 text-3xl font-bold">
                THE GIRL I LIKE FORGOT HER GLASSES <br/> <br/>
              </p>
              <p className="text-center font-['Lato'] text-zinc-950 text-lg font-medium">
                O ano escolar de Komura começa com uma nova paixão, mas a garota que ele gosta tende a esquecer seus óculos!
              </p>
              <a href="#" className="mt-8">
                <div className="flex w-40 h-12 items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-center text-zinc-300 font-semibold text-2xl">ASSISTA JÁ</div> 
              </a>
            </div>
            <button>
            <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-16 hover:opacity-60">
                <path d="M12.6066 2L1.99997 12.6066" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
                <path d="M2 13L12.6066 23.6066" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
              </svg>            
            </button>
          </div>
          <Carrusel.Root>
            <Carrusel.Button>
              <Carrusel.ButtonLeft/>
            </Carrusel.Button>
            <Carrusel.Body>
              <Carrusel.Title title="Lamçamentos"/>
              <Carrusel.Content>
                <Carrusel.Anime text="Black clover" src="/icons/blackclover.jpg"/>
                <Carrusel.Anime text="É Sério Que Eu Sou o Mais Forte" src="/icons/ÉSérioQueEuSouoMaisForte.jpg"/>
                <Carrusel.Anime text="Laughing Under the Clouds" src="/icons/LaughingUndertheClouds.jpg"/>
                <Carrusel.Anime text="My Unique Skill" src="/icons/MyUniqueSkill.jpg"/>
                <Carrusel.Anime text="Malevolent Spirits: Mononogatari" src="/icons/MalevolentSpiritsMononogatari.jpg"/>
                <Carrusel.Anime text="Yamada-kun and the even Witches" src="/icons/Yamada-kunandtheevenWitches.jpg"/>
              </Carrusel.Content>
            </Carrusel.Body>
            <Carrusel.Button>
              <Carrusel.ButtonRight/>
            </Carrusel.Button>
          </Carrusel.Root>

          <Carrusel.Root>
            <Carrusel.Button>
              <Carrusel.ButtonLeft/>
            </Carrusel.Button>
            <Carrusel.Body>
              <Carrusel.Title title="Mais famosos"/>
              <Carrusel.Content>
                <Carrusel.Anime text="Black clover" src="/icons/blackclover.jpg"/>
                <Carrusel.Anime text="É Sério Que Eu Sou o Mais Forte" src="/icons/ÉSérioQueEuSouoMaisForte.jpg"/>
                <Carrusel.Anime text="Laughing Under the Clouds" src="/icons/LaughingUndertheClouds.jpg"/>
                <Carrusel.Anime text="My Unique Skill" src="/icons/MyUniqueSkill.jpg"/>
                <Carrusel.Anime text="Malevolent Spirits: Mononogatari" src="/icons/MalevolentSpiritsMononogatari.jpg"/>
                <Carrusel.Anime text="Yamada-kun and the even Witches" src="/icons/Yamada-kunandtheevenWitches.jpg"/>
              </Carrusel.Content>
            </Carrusel.Body>
            <Carrusel.Button>
              <Carrusel.ButtonRight/>
            </Carrusel.Button>
          </Carrusel.Root>

          <Carrusel.Root>
            <Carrusel.Button>
              <Carrusel.ButtonLeft/>
            </Carrusel.Button>
            <Carrusel.Body>
              <Carrusel.Title title="Continue Assistindo"/>
              <Carrusel.Content>
                <Carrusel.Anime className="w-24 sm:w-40 md:w-72 lg:w-[360px]" text="S2 EP1 Jujutsu kaisen" src="/icons/jujutsukaisenEP.jpg"/>
                <Carrusel.Anime className="w-24 sm:w-40 md:w-72 lg:w-[360px]" text="S1 E3 Mashle: magic and muscle" src="/icons/mashleEP.jpg"/>
                <Carrusel.Anime className="w-24 sm:w-40 md:w-72 lg:w-[360px]" text="S1 E4 zoo: 100 coisa pra fazer antes de virar zonbie" src="/icons/zoo100EP.jpg"/>
              </Carrusel.Content>
            </Carrusel.Body>
            <Carrusel.Button> 
              <Carrusel.ButtonRight/>
            </Carrusel.Button>
          </Carrusel.Root>
        </main>
      </div>
  )
}
