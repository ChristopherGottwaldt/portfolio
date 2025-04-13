import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

import Navbar from "@/components/ui/NavBar";
import { ModeToggle } from "@/components/ui/darkThemeToggle"
import Link from "next/link";

export default function Home() {
return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <div className="fixed left-0 top-0 flex w-full items-center justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-4 pt-4 px-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">        <Navbar></Navbar>
          <div className="ml-4">
            <ModeToggle></ModeToggle>
          </div>  
        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
        </div> */}
      </div>
    <div>
      <br />
      <br />
      <br />
      <p>I made this website with Next.js, React, ShadCN, Typescript, MDX, and Tailwind.</p>
      <p className="text-align: center">Here&apos;s where you can see my code:</p>
        <Link href="https://github.com/ChristopherGottwaldt/portfolio" className="text-blue-350 underline hover:text-blue-700">Portfolio Site GitHub</Link> 
    </div>

    {/* <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
      <p>Welcome to my website! <br />I am a student at UW-Madison studying Computer Science and Data Science</p>
    </div> */}
  </main>
);
}
