import { motion } from 'framer-motion';
import { Sigma, Pi, Scale } from 'lucide-react';

const ValueRow = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5, ease: "easeOut" }}
    className="flex gap-6 items-start group p-6 rounded-xl hover:bg-white transition-colors duration-300"
  >
    <div className="shrink-0 w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-accent-main group-hover:text-white transition-colors duration-300">
        <Icon size={32} strokeWidth={1.5} />
    </div>
    
    <div>
        <h3 className="font-serif text-2xl mb-2 text-slate-900 group-hover:text-accent-main transition-colors">{title}</h3>
        <p className="font-sans text-slate-600 text-sm leading-relaxed">
            {description}
        </p>
    </div>
  </motion.div>
);

const MathValues = () => {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: The Vertical Photo */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative lg:h-[800px] w-full max-w-md mx-auto lg:max-w-none"
            >
                {/* Photo Frame */}
                <div className="absolute inset-0 border border-slate-200 translate-x-4 translate-y-4 rounded-2xl" />
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                     <img 
                        src="/images/fag3.png" 
                        alt="Comunidad Fundación Andrés Grajales" 
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay Gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                    
                    {/* Caption on Photo */}
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                        <p className="font-mono text-xs opacity-70 mb-2">FIG. 3.0: COMUNIDAD</p>
                        <p className="font-serif text-xl italic">"La suma de las partes"</p>
                    </div>
                </div>
            </motion.div>

            {/* Right Column: Values */}
            <div className="space-y-12">
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <span className="font-mono text-accent-main text-xs tracking-[0.2em] uppercase font-bold bg-white border border-slate-200 px-4 py-1 rounded-full">
                        // Principios Fundamentales
                    </span>
                    <h2 className="font-serif text-5xl lg:text-6xl text-slate-900 leading-tight">
                        Creemos en lo<br/>
                        <span className="italic text-slate-400">invisible.</span>
                    </h2>
                     <p className="font-sans text-slate-600 text-lg max-w-lg">
                        Más allá del hardware y el código, nuestra verdadera infraestructura son los valores que sostienen cada interacción humana.
                     </p>
                </motion.div>

                <div className="space-y-4">
                    <ValueRow 
                        icon={Sigma} 
                        title="Conocimiento Sumativo" 
                        description="La educación no es lineal, es exponencial. Cada habilidad técnica adquirida suma a la capacidad del individuo de transformar su entorno."
                        delay={0.2}
                    />
                     <div className="h-px bg-slate-200 mx-6" />
                     <ValueRow 
                        icon={Pi} 
                        title="Constante Universal" 
                        description="La dignidad humana es nuestra constante pi (π). No importa el cálculo o la circunstancia, es un valor inmutable que fundamenta nuestro código."
                        delay={0.3}
                    />
                     <div className="h-px bg-slate-200 mx-6" />
                     <ValueRow 
                        icon={Scale} 
                        title="Equilibrio Social" 
                        description="Buscamos la ecuación donde la oportunidad iguala al talento. La caridad bien entendida es justicia distribuida con precisión."
                        delay={0.4}
                    />
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default MathValues;
