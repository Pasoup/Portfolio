"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const constraintsRef = useRef(null);
  return (

    <main className="min-h-screen p-8 max-w-5xl mx-auto flex flex-col gap-8 font-sans">
      
          {/* entire */}
      <section className="flex flex-col md:flex-row gap-8">
        

        <div className="w-full md:w-1/3 flex flex-col items-center border-4 border-black p-4 rounded-lg">
          {/*placeholder image*/ }
          <div className="w-32 h-32 rounded-full border-4 border-black bg-gray-200 mb-6"></div>
          
 
          <div className="space-y-4">
              <h2> I like cats</h2>
          </div>
        </div>


        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <h1 className="text-6xl font-bold">HELLO</h1>
          

          <div className="border-4 border-black p-6 ">
             <p className="text-xl">
                My name is Pasu Leelahajiva, a 2nd Year SoftwareEngineer at 
                KMITL, Here are some of my work and projects I've done so far! 
                Hope you enjoy.
             </p>
          </div>
        </div>

      </section>
    
      {/* bottom box area, section creates the box */}
      <section className="relative flex border-4 border-black p-10 justify-between">
        

        <button className="text-4xl p-2">◀</button>
        
        <div className="text-2xl font-bold">Project Placeholder</div>
        

        <button className="text-4xl p-2">▶</button>


      </section>

    </main>
  );
}