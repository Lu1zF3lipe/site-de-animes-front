import autoprefixer from "autoprefixer";
import { Search, Bookmark, UserCircle2} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
      <div className="h-screen flex flex-col">
        <header className="h-16 bg-zinc-900 flex flex-row items-center">
          <a href="#" className="overflow-hidden items-center ml-44 flex-1">
            <Image src="/icons/logo.jpg" width={192} height={64} alt="logo do site" className=""/> 
          </a>
          <div className="flex flex-row w-auto mr-44 space-x-12"> 
            <a href="#" className="items-center ">
              <Search/>
            </a>
            <a href="#" className="items-center ">
              <Bookmark/>
            </a>
            <a href="#" className="items-center ">
              <UserCircle2/>
            </a>
          </div>
        </header>
        <main className="h-auto">
          <div className="bg-[#26C02C] h-auto flex flex-row-reverse justify-center items-center">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="26" viewBox="0 0 15 26" fill="none" className="mr-64">
                <path d="M2 23.6066L12.6066 13" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
                <path d="M12.6066 12.6066L2 1.99997" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
              </svg>
            </button>
            <Image src="/icons/girlwithglasses.jpg" width={403} height={605} alt="logo do site" className="mx-8"/>
            <div className="flex items-center w-2/6 mx-8 flex-col">
              <p className="text-center font-['Helvetica'] text-zinc-950 text-3xl font-bold">
                THE GIRL I LIKE FORGOT HER GLASSES <br/> <br/>
              </p>
              <p className="text-center font-['Lato'] text-zinc-950 text-lg font-medium">
                O ano escolar de Komura começa com uma nova paixão, mas a garota que ele gosta tende a esquecer seus óculos!
              </p>
              <a href="#" className="mt-8">
                <div className="flex w-40 h-12 items-center justify-center bg-zinc-800 text-center font-semibold text-2xl">ASSISTA JÁ</div> 
              </a>
            </div>
            <button>
            <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-32">
                <path d="M12.6066 2L1.99997 12.6066" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
                <path d="M2 13L12.6066 23.6066" stroke="#6217CA" stroke-width="4" stroke-linecap="round"/>
              </svg>            
            </button>
          </div>
          <div className="h-[96rem]">
          </div>
        </main>
      </div>
  )
}
