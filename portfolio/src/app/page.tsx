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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Navbar />
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Hi! I&apos;m Christopher Gottwaldt!&nbsp;
        </p>
        <ModeToggle />
      </div>

      <div id="header-message" className="my-6 text-xl"></div>
      
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mt-10 space-y-6 md:space-y-0 md:space-x-10">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/assets/madhacks.jpg"
            alt="Me at MadHacks"
            className="rounded-lg shadow-lg max-w-full h-auto"
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