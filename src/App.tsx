import { useEffect } from 'react';
import Hero from './components/Hero';
import TheLegacy from './components/TheLegacy';
import BinaryMission from './components/BinaryMission';
import MathValues from './components/MathValues';

function App() {
  
  // Smooth scroll behavior for anchor links if we add them later
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="w-full bg-slate-50 min-h-screen text-slate-900 selection:bg-accent-main selection:text-white">
      {/* Navigation (Minimalist) */}
      <nav className="fixed w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
        <div className="font-mono text-xs pointer-events-auto cursor-pointer">F.A.G. SYSTEM v1.0</div>
        <div className="font-mono text-xs pointer-events-auto cursor-pointer border border-white/30 px-4 py-1 rounded-full hover:bg-white hover:text-black transition-colors">
            CONTACTO
        </div>
      </nav>

      <Hero />
      <TheLegacy />
      <BinaryMission />
      <MathValues />

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
                <p className="font-serif text-2xl text-slate-100 mb-2">Fundación Andrés Grajales</p>
                <p className="font-mono text-xs">INGENIERÍA HUMANISTA © {new Date().getFullYear()}</p>
            </div>
            <div className="flex justify-end font-mono text-xs gap-6">
                <a href="#" className="hover:text-accent-main transition-colors">LINKEDIN</a>
                <a href="#" className="hover:text-accent-main transition-colors">INSTAGRAM</a>
                <a href="#" className="hover:text-accent-main transition-colors">EMAIL</a>
            </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
