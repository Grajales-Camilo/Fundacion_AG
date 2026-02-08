import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Heart } from 'lucide-react';

const TheLegacy = () => {
  return (
    <section className="py-32 bg-slate-100/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Asymmetrical Layout: Narrow Left Context */}
          <div className="lg:col-span-4 space-y-12 sticky top-24">
            <div>
              <h2 className="font-mono text-xs tracking-widest text-slate-500 uppercase mb-4">
                01. EL ORIGEN_
              </h2>
              <div className="w-12 h-px bg-slate-900 mb-8" />
              <p className="font-serif text-3xl text-slate-900 italic leading-tight">
                "No construimos edificios, compilamos oportunidades."
              </p>
            </div>
            
            <div className="p-6 bg-white border-l-4 border-accent-secondary shadow-sm">
               <blockquote className="font-mono text-xs text-slate-600 leading-relaxed">
                 VAR: LEGACY_MODE = TRUE;<br/>
                 La ingeniería es la herramienta más noble cuando se aplica para resolver el bug de la pobreza.
               </blockquote>
            </div>
          </div>

          {/* Asymmetrical Layout: Wide Right Story */}
          <div className="lg:col-span-8 space-y-16">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="prose prose-lg prose-slate max-w-none"
            >
                <h3 className="font-serif text-4xl text-slate-800 mb-6">Andrés Grajales: El constructor de Sueños</h3>
                <p className="text-slate-600 font-sans leading-relaxed">
                  ¿Cómo se mide el éxito de una vida? Jaime Andrés no lo medía en estructuras de concreto, sino en la solidez de los cimientos humanos. Como ingeniero, entendía que un sistema es tan fuerte como su nodo más vulnerable. 
                </p>
                <p className="text-slate-600 font-sans leading-relaxed mt-6">
                  Su escepticismo ante la caridad tradicional lo llevó a una conclusión algorítmica: <strong>Dar no es restar, es multiplicar</strong>. No se trataba de regalar el pescado, ni siquiera de enseñar a pescar, sino de rediseñar el río para que todos tuvieran acceso a la orilla.
                </p>
            </motion.div>

            {/* Bento Grid Concept for Story details */}
            <div className="grid md:grid-cols-2 gap-4 relative">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5 }}
                 className="group bg-slate-900 text-slate-100 p-8 flex flex-col justify-between min-h-[250px] relative overflow-hidden"
               >
                 <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                    <Cpu size={120} strokeWidth={0.5} />
                 </div>
                 <span className="font-mono text-xs text-accent-main mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"/> 
                    INPUT
                 </span>
                 <div className="relative z-10">
                    <p className="font-serif text-2xl mb-2">Disciplina Técnica</p>
                    <div className="h-px w-0 group-hover:w-full bg-accent-main transition-all duration-500 mb-2" />
                    <p className="text-slate-400 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                        &gt; Inicializando protocolos de aprendizaje...<br/>
                        &gt; Compilando habilidades_
                    </p>
                 </div>
               </motion.div>

               {/* Connector Arrow */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4, duration: 0.3 }}
                 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex bg-white rounded-full p-3 border border-slate-200 shadow-xl text-accent-main"
               >
                 <ArrowRight size={20} />
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: 0.2 }}
                 className="group bg-white p-8 border border-slate-200 flex flex-col justify-between min-h-[250px] relative overflow-hidden hover:border-accent-main/30 transition-colors shadow-sm hover:shadow-md"
               >
                 <div className="absolute top-0 right-0 p-4 text-slate-100 group-hover:text-red-50 transition-colors transform group-hover:scale-110 duration-700">
                    <Heart size={120} strokeWidth={0.5} />
                 </div>
                 <span className="font-mono text-xs text-slate-400 mb-2 flex items-center gap-2">
                    OUTPUT
                    <span className="w-2 h-2 bg-accent-main rounded-full"/> 
                 </span>
                 <div className="relative z-10">
                   <p className="font-serif text-2xl text-slate-900 mb-2">Impacto Humano</p>
                   <div className="h-px w-0 group-hover:w-full bg-red-400 transition-all duration-500 mb-2" />
                   <p className="text-slate-500 text-xs font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 leading-relaxed">
                        Resultado: Dignidad restaurada y autonomía recuperada para la comunidad.
                   </p>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheLegacy;
