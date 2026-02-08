import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-slate-200">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.4] pointer-events-none" />
      
      {/* Fibonacci Spiral Hint (CSS/SVG) - abstract decoration */}
      <div className="absolute right-0 bottom-0 w-[50vw] h-[50vh] border-l border-t border-slate-200 opacity-30 rounded-tl-[100%]" />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center space-x-2 border border-slate-300 rounded-full px-4 py-1 bg-white/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent-main animate-pulse" />
            <span className="text-xs font-mono text-slate-600 tracking-widest uppercase">Fundación Andrés Grajales</span>
          </div>

          <h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] text-slate-900 text-balance">
            El conocimiento <br />
            <span className="italic text-slate-600">como acto de amor.</span>
          </h1>

          <p className="font-mono text-sm lg:text-base text-slate-600 max-w-lg leading-relaxed border-l-2 border-accent-main pl-6 mt-6">
            // STATUS: OPERATIONAL<br />
            Decodificando la desigualdad a través de la educación técnica y restaurando la dignidad humana con misericordia y amor.
          </p>
        </motion.div>

        {/* Logo / Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Glassmorphism Backdrops */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-main/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-emerald-100/30 rounded-full blur-2xl" />
                
                {/* Logo Container with Stencil Effect */}
                <div className="relative w-full h-full rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl flex items-center justify-center overflow-hidden ring-1 ring-slate-900/5">
                    <img 
                      src="/Fundacion_AG/images/logo_fag.png" 
                      alt="Logo Fundación Andrés Grajales" 
                      className="w-3/4 h-3/4 object-contain opacity-90 mix-blend-multiply filter contrast-125"
                    />
                </div>

                {/* Technical Markers */}
                <div className="absolute -top-4 -left-4 font-mono text-[10px] text-slate-400">POS: 001</div>
                <div className="absolute -bottom-4 -right-4 font-mono text-[10px] text-slate-400">REF: FAG_INIT</div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
