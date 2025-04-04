import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Navbar from "@/components/ui/NavBar";
import { ModeToggle } from "@/components/ui/darkThemeToggle"
import Image from "next/image";

const artworks = ["cliffjumpingFriends.jpg", "dragonEye.jpg",  
  "waterfallCave.jpg", "abstractDepth.jpg", "angelBoy.jpg", 
  "bTreeNeuron.jpg", "pixelTree.png", "stillLife.jpg", "crystals.jpg"]

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
    <div className="w-full max-w-5xl text-center">
        {/* <br /> */}
        <br />
        <br />
        <br />
        <p className="text-lg font-semibold mb-8">Some artwork that I have done!</p>

        {/* Grid container for artwork cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
          {artworks.map((img, index) => (
            <Card key={index} className="overflow-hidden shadow-lg">
              <CardHeader>
                {/* just going to remove file extension for name */}
                <CardTitle>{img.slice(0, -4)}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Image
                  src={`/assets/${img}`}
                  width={500}
                  height={500}
                  alt={img}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </CardContent>
              <CardFooter className="text-sm text-gray-500">
                {/* <p>.</p> */}
              </CardFooter>
            </Card>
          ))}
        </div>
        <br />
        <p>NOTE: References from Google Images used for dragonEye, waterfallCave, and angelBoy!</p>
      </div>
    </main>
  );
}
