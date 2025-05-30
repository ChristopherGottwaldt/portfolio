'use client';
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
import React, {useEffect} from "react";
import { time } from "console";
import Image from "next/image";

let i = 0;
let text = "Welcome to my site!"
let speed = 80;

export default function Home() {
  useEffect (() => {
    let timeoutID : any;
    const typeWriter = () => {
      const headerMessage = document.getElementById("header-message");
      if (headerMessage && i < text.length) {
        headerMessage.innerHTML += text.charAt(i);
        i++;
        timeoutID = setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
    return () => {clearTimeout(timeoutID)}
  },[])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <div className="fixed left-0 top-0 flex w-full items-center justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-4 pt-4 px-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">        <Navbar></Navbar>
          <div className="ml-4">
            <ModeToggle></ModeToggle>
          </div>  
        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
        </div> */}
      </div>
      <br />
      <div id="header-message" className="mt-20 my-6 text-xl"></div>      
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mt-10 space-y-6 md:space-y-0 md:space-x-10">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Image
            src="/assets/madhacks.jpg"
            width={500}
            height={500}
            alt="Me at MadHacks"
            className="rounded-lg shadow-lg max-w-full h-auto transition-transform duration-500 hover:rotate-y-180"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to My Site!</h1>
          <p className="text-lg">
            Nice to meet you! I am a student at UW-Madison studying Computer Science and Data Science.
          </p>
        </div>
      </div>
    </main>
  );
}