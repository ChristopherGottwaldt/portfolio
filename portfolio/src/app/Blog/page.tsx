import React from "react";
// import { Card, CardContent, CardHeader, CardFooter, CardTitle } from "@/components/ui/card";
// import Image from "next/image";
import TestClientComponent from "@/components/blogs/TestClientComponent"; // Import the client-side MDX component
import Navbar from "@/components/ui/NavBar";
import { ModeToggle } from "@/components/ui/darkThemeToggle";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="fixed left-0 top-0 flex w-full items-center justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-4 pt-4 px-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
        <Navbar />
        <div className="ml-4">
          <ModeToggle />
        </div>
      </div>

      {/* Render the MDX content with prose for proper styling */}
      <div className="prose lg:prose-xl dark:prose-invert">
        <br />
        <br />
        <br />
        <TestClientComponent />
      </div>
    </main>
  );
};

export default Home;
