"use client";
import Hero from "@/components/Hero";
import WorkCardTDW from "@/components/WorkCardTDW";
import WorkCardKidden from "@/components/WorkCardKidden";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <div className="w-full bg-blueMain">
        <section className="max-w-[800px] mx-auto py-10  ">
          <div className="flex  justify-center">
            <h1
              className="
             text-9xl font-medium my-8 py-1 border-y-2 tracking-widest uppercase border-y-pink-100    
            bg-gradient-to-r  from-pink-100 via-purple-300 to-fuchsia-300 
            inline-block text-transparent bg-clip-text"
            >
              Nuestro{<br />} Trabajo
            </h1>
          </div>
          {/*work cards*/}
          <WorkCardTDW />
          <WorkCardKidden />
        </section>
      </div>
    </main>
  );
}
