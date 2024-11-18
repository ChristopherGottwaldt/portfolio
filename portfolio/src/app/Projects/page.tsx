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
      {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
      </div> */}

    <div>
      <br />
      <br />
      <p>Changes coming soon!</p>
    </div>
  </main>
);
}
