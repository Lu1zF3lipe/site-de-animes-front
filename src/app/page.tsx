import { Search, Bookmark, UserCircle2} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
      <div className="h-[140rem] flex flex-col">
        <header className="h-16 w-full bg-zinc-900 flex flex-row items-center fixed">
          <a href="#" className="overflow-hidden items-center ml-44 flex-1">
            <Image src="/icons/logo.jpg" width={192} height={64} alt="logo do site" className="hover:opacity-50"/> 
          </a>
          <div className="h-full flex flex-row w-auto mr-60 justify-center items-center"> 
            <a href="#" className="flex w-16 h-full justify-center items-center hover:bg-zinc-700">
              <Search/>
            </a>
            <a href="#" className="flex w-16 h-full justify-center items-center hover:bg-zinc-700">
              <Bookmark/>
            </a>
            <a href="#" className="flex w-16 h-full justify-center items-center hover:bg-zinc-700">
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
                <div className="flex w-40 h-12 items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-center font-semibold text-2xl">ASSISTA JÁ</div> 
              </a>
            </div>
            <button>
            <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-16 hover:opacity-60">
                <path d="M12.6066 2L1.99997 12.6066" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
                <path d="M2 13L12.6066 23.6066" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
              </svg>            
            </button>
          </div>
          <div className="flex flex-row-reverse justify-center">
            <button className="mt-28">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="26" viewBox="0 0 15 26" fill="none" className="ml-8 hover:opacity-60">
                <path d="M2 23.6066L12.6066 13" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
                <path d="M12.6066 12.6066L2 1.99997" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
              </svg>
            </button>
            <div className="flex flex-col items-center  w-3/5">
              <div className="w-full border-b-2 border-[#6217CA] mt-24">
                <p className="mb-4 ml-2 text-zinc-300 sm:text-sm md:text-xl lg:text-4xl lg:font-medium">Mais Famosos</p>
              </div>
              <div className="w-full flex flex-row mt-6 justify-between ">
                <div className="flex flex-col w-40">
                  <img src="/icons/blackclover.jpg" alt="blackclover" className="w-[3.6rem] sm:w-[3.6rem] md:w-32 lg:w-40"></img>
                  <p className="mt-2 text-[0.35rem] text-zinc-300 sm:text-[0.5rem] md:text-xs md:font-normal lg:text-lg lg:font-medium">
                  black clover
                  </p>
                </div>
                <div className="flex flex-col w-40">
                  <img src="/icons/blackclover.jpg" alt="blackclover" className="w-[3.6rem] sm:w-[3.6rem] md:w-32 lg:w-40"></img>
                  <p className="mt-2 text-[0.35rem] text-zinc-300 sm:text-[0.5rem] md:text-xs md:font-normal lg:text-lg lg:font-medium">
                  É Sério Que Eu Sou o Mais Forte
                  </p>
                </div>
                <div className="flex flex-col w-40">
                  <img src="/icons/blackclover.jpg" alt="blackclover" className="w-[3.6rem] sm:w-[3.6rem] md:w-32 lg:w-40"></img>
                  <p className="mt-2 text-[0.35rem] text-zinc-300 sm:text-[0.5rem] md:text-xs md:font-normal lg:text-lg lg:font-medium">
                  Laughing Under the Clouds
                  </p>
                </div>
                <div className="flex flex-col w-40">
                  <img src="/icons/blackclover.jpg" alt="blackclover" className="w-[3.6rem] sm:w-[3.6rem] md:w-32 lg:w-40"></img>
                  <p className="mt-2 text-[0.35rem] text-zinc-300 sm:text-[0.5rem] md:text-xs md:font-normal lg:text-lg lg:font-medium">
                  My Unique Skill
                  </p>
                </div>
                <div className="flex flex-col w-40">
                  <img src="/icons/blackclover.jpg" alt="blackclover" className="w-[3.6rem] sm:w-[3.6rem] md:w-32 lg:w-40"></img>
                  <p className="mt-2 text-[0.35rem] text-zinc-300 sm:text-[0.5rem] md:text-xs md:font-normal lg:text-lg lg:font-medium">
                  Malevolent Spirits: Mononogatari
                  </p>
                </div>
                <div className="flex flex-col w-40">
                  <img src="/icons/blackclover.jpg" alt="blackclover" className="w-[3.6rem] sm:w-[3.6rem] md:w-32 lg:w-40"></img>
                  <p className="mt-2 text-[0.35rem] text-zinc-300 sm:text-[0.5rem] md:text-xs md:font-normal lg:text-lg lg:font-medium">
                  Yamada-kun and the even Witches
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-28">
              <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-8 hover:opacity-60">
                <path d="M12.6066 2L1.99997 12.6066" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
                <path d="M2 13L12.6066 23.6066" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
              </svg>            
            </button>
          </div>
          <div className="flex flex-row-reverse justify-center">
            <button className="mt-28">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="26" viewBox="0 0 15 26" fill="none" className="ml-8 hover:opacity-60">
                <path d="M2 23.6066L12.6066 13" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
                <path d="M12.6066 12.6066L2 1.99997" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
              </svg>
            </button>
            <div className="flex flex-col items-center  w-3/5">
              <div className="w-full border-b-2 border-[#6217CA] mt-24">
                <p className="mb-4 ml-2 text-zinc-300 sm:text-sm md:text-xl lg:text-4xl lg:font-medium">Mais Famosos</p>
              </div>
              <div className="w-full flex flex-row mt-6 justify-between ">
                <div className="flex flex-col w-40">
                  <img src="/icons/blackclover.jpg" alt="blackclover" className="w-[3.6rem] sm:w-[3.6rem] md:w-32 lg:w-40"></img>
                  <p className="mt-2 text-[0.35rem] text-zinc-300 sm:text-[0.5rem] md:text-xs md:font-normal lg:text-lg lg:font-medium">
                  black clover
                  </p>
                </div>
                <div className="flex flex-col w-40">
                  <img src="/icons/blackclover.jpg" alt="blackclover" className="w-[3.6rem] sm:w-[3.6rem] md:w-32 lg:w-40"></img>
                  <p className="mt-2 text-[0.35rem] text-zinc-300 sm:text-[0.5rem] md:text-xs md:font-normal lg:text-lg lg:font-medium">
                  É Sério Que Eu Sou o Mais Forte
                  </p>
                </div>
                <div className="flex flex-col w-40">
                  <img src="/icons/blackclover.jpg" alt="blackclover" className="w-[3.6rem] sm:w-[3.6rem] md:w-32 lg:w-40"></img>
                  <p className="mt-2 text-[0.35rem] text-zinc-300 sm:text-[0.5rem] md:text-xs md:font-normal lg:text-lg lg:font-medium">
                  Laughing Under the Clouds
                  </p>
                </div>
                <div className="flex flex-col w-40">
                  <img src="/icons/blackclover.jpg" alt="blackclover" className="w-[3.6rem] sm:w-[3.6rem] md:w-32 lg:w-40"></img>
                  <p className="mt-2 text-[0.35rem] text-zinc-300 sm:text-[0.5rem] md:text-xs md:font-normal lg:text-lg lg:font-medium">
                  My Unique Skill
                  </p>
                </div>
                <div className="flex flex-col w-40">
                  <img src="/icons/blackclover.jpg" alt="blackclover" className="w-[3.6rem] sm:w-[3.6rem] md:w-32 lg:w-40"></img>
                  <p className="mt-2 text-[0.35rem] text-zinc-300 sm:text-[0.5rem] md:text-xs md:font-normal lg:text-lg lg:font-medium">
                  Malevolent Spirits: Mononogatari
                  </p>
                </div>
                <div className="flex flex-col w-40">
                  <img src="/icons/blackclover.jpg" alt="blackclover" className="w-[3.6rem] sm:w-[3.6rem] md:w-32 lg:w-40"></img>
                  <p className="mt-2 text-[0.35rem] text-zinc-300 sm:text-[0.5rem] md:text-xs md:font-normal lg:text-lg lg:font-medium">
                  Yamada-kun and the even Witches
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-28">
              <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-8 hover:opacity-60">
                <path d="M12.6066 2L1.99997 12.6066" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
                <path d="M2 13L12.6066 23.6066" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
              </svg>            
            </button>
          </div>
          <div className="flex flex-row-reverse justify-center">
            <button className="mt-28">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="26" viewBox="0 0 15 26" fill="none" className="ml-8 hover:opacity-60">
                <path d="M2 23.6066L12.6066 13" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
                <path d="M12.6066 12.6066L2 1.99997" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
              </svg>
            </button>
            <div className="flex flex-col items-center w-3/5">
              <div className="w-full border-b-2 border-[#6217CA] mt-24">
                <p className="mb-4 ml-2 text-zinc-300 sm:text-sm md:text-xl lg:text-4xl lg:font-medium">Continue Assistindo</p>
              </div>
              <div className="w-full flex flex-row justify-between mt-6">
                <div className="flex flex-col w-[360px]">
                  <Image src="/icons/jujutsukaisenEP.jpg" width={360} height={360} alt="blackclover" className=""/>
                  <p className="mt-2 text-[0.35rem] text-zinc-300 sm:text-[0.5rem] md:text-xs md:font-normal lg:text-lg lg:font-medium">
                  S2 EP1 Jujutsu kaisen
                  </p>
                </div>
                <div className="flex flex-col w-[360px]">
                  <Image src="/icons/mashleEP.jpg" width={360} height={360} alt="ÉSérioQueEuSouoMaisForte" className=""/>
                  <p className="mt-2 text-[0.35rem] text-zinc-300 sm:text-[0.5rem] md:text-xs md:font-normal lg:text-lg lg:font-medium">
                  S1 E3 Mashle: magic and muscle
                  </p>
                </div>
                <div className="flex flex-col w-[360px]">
                  <Image src="/icons/zoo100EP.jpg" width={360} height={360} alt="LaughingUndertheClouds" className=""/>
                  <p className="mt-2 text-[0.35rem] text-zinc-300 sm:text-[0.5rem] md:text-xs md:font-normal lg:text-lg lg:font-medium">
                  S1 E4 zoo: 100 coisa pra fazer antes de virar zonbie
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-28">
              <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-8 hover:opacity-60">
                <path d="M12.6066 2L1.99997 12.6066" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
                <path d="M2 13L12.6066 23.6066" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
              </svg>            
            </button>
          </div>
        </main>
      </div>
  )
}
