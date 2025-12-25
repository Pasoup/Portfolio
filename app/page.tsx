export default function Home() {
  return (
    // MAIN PAGE CONTAINER (The white paper)
    <main className="min-h-screen p-8 max-w-5xl mx-auto flex flex-col gap-8 font-sans">
      
      {/* === TOP SECTION (Holds Left and Right blocks) === */}
      <section className="flex flex-col md:flex-row gap-8">
        
        {/* BLOCK 1: Left Side (Avatar & Nav) */}
        <div className="w-full md:w-1/3 flex flex-col items-center border-2 border-black p-4 rounded-lg">
          {/* Avatar Circle */}
          <div className="w-32 h-32 rounded-full border-4 border-black bg-gray-200 mb-6"></div>
          
          {/* Fake Nav Lines */}
          <div className="space-y-4 w-full px-8">
            <div className="h-4 bg-black rounded-full w-full"></div>
            <div className="h-4 bg-black rounded-full w-full"></div>
            <div className="h-4 bg-black rounded-full w-3/4"></div>
          </div>
        </div>

        {/* BLOCK 2: Right Side (Hello & Text) */}
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <h1 className="text-6xl font-bold">Hello</h1>
          
          {/* The Wavy Text Box */}
          <div className="border-4 border-black p-6 rounded-2xl h-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
             <p className="text-xl leading-relaxed">
               I am a developer who loves building things...
               (Write your intro here)
             </p>
          </div>
        </div>

      </section>

      {/* === BOTTOM SECTION (Projects Block) === */}
      {/* BLOCK 3: Projects Box */}
      <section className="relative h-64 border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between">
        
        {/* Left Arrow */}
        <button className="text-4xl p-2">◀</button>
        
        <div className="text-2xl font-bold">Project Placeholder</div>
        
        {/* Right Arrow */}
        <button className="text-4xl p-2">▶</button>


      </section>

    </main>
  );
}