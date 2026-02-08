import { motion } from 'framer-motion';

const BinaryMission = () => {
  return (
    <section className="w-full">
      <div className="grid lg:grid-cols-2 min-h-screen">
        
        {/* BLOCK 1: KIDS / ENGINEERING */}
        <div className="relative group overflow-hidden bg-slate-900 text-white border-r border-slate-800">
          <div className="absolute inset-0 bg-[url('/images/fag1.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 from-10% via-slate-900/90 via-35% to-transparent to-60%" />
          
          <div className="relative z-10 p-8 lg:p-16 h-full flex flex-col justify-end">
            <div className="mb-6 font-mono text-xs text-accent-main flex items-center gap-2">
               <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
               01. LÓGICA & FUTURO
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">Ingeniería del Pensamiento</h2>
            <p className="text-slate-300 font-sans max-w-md leading-relaxed mb-8">
              Enseñamos a las niñas y niños a pensar en código. No solo para que programen computadoras, sino para que depuren la realidad. La abstracción es una superpotencia en un mundo concreto.
            </p>
            <ul className="space-y-3 font-mono text-sm text-emerald-400">
                <li className="flex items-center gap-3">
                    <span className="text-slate-600">&gt;</span> Formación en Raspberry Pi 5
                </li>
                <li className="flex items-center gap-3">
                    <span className="text-slate-600">&gt;</span> Pensamiento Algorítmico
                </li>
                 <li className="flex items-center gap-3">
                    <span className="text-slate-600">&gt;</span> Robótica Social
                </li>
            </ul>
          </div>
        </div>

        {/* BLOCK 2: SENIORS / MERCY */}
        {/* Accessibility Focused: High contrast text, clear legibility */}
        <div className="relative group overflow-hidden bg-slate-50 text-slate-900">
           <div className="absolute inset-0 bg-[url('/images/fag2.png')] bg-cover bg-center sepia-[.2] transition-transform duration-700 group-hover:scale-105" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-50 from-10% via-slate-50/90 via-35% to-transparent to-60%" />
           
           <div className="relative z-10 p-8 lg:p-16 h-full flex flex-col justify-end">
            <div className="mb-6 font-mono text-xs text-slate-500 flex items-center gap-2">
               <span className="w-2 h-2 bg-accent-main rounded-full"></span>
               02. DIGNIDAD & CONEXIÓN
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6 text-slate-900">Alfabetización Digital</h2>
            <p className="text-slate-700 font-sans text-lg lg:text-xl max-w-md leading-relaxed mb-8 font-medium">
              La tecnología no debe aislar a nuestros mayores, debe acercarlos. Restauramos la autonomía a través de la paciencia y el respeto.
            </p>
             <ul className="space-y-4 font-sans text-base text-accent-main font-semibold">
                <li className="flex items-center gap-3 border-b border-slate-200 pb-2">
                    <span className="text-slate-400 font-mono">01</span> Conexión con seres queridos
                </li>
                <li className="flex items-center gap-3 border-b border-slate-200 pb-2">
                    <span className="text-slate-400 font-mono">02</span> Autonomía bancaria y salud
                </li>
                 <li className="flex items-center gap-3 border-b border-slate-200 pb-2">
                    <span className="text-slate-400 font-mono">03</span> Seguridad en la red
                </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BinaryMission;
