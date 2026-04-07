import React from 'react';
import { ArrowRight, Sparkles, Activity, MapPin, Calendar } from 'lucide-react';
import './index.css';

export default function App() {
  return (
    <div className="bg-[#FCFBF7] min-h-screen text-grafite font-sans font-light selection:bg-grafite selection:text-rosa-cha">
       
       {/* SELECTION 1: HERO (With Background Image) */}
       <section id="home" className="relative bg-[#FCFBF7] min-h-[92vh] flex flex-col items-start justify-center z-20 px-6 sm:px-12 md:px-24 overflow-hidden pt-20">
          
          {/* Background Image Container with Gradients */}
          <div className="absolute inset-0 z-0">
             <div 
                className="absolute inset-0 bg-[url('/fotos/backgroud.png')] bg-cover bg-no-repeat bg-[center_right_-16rem] sm:bg-right opacity-90 transition-all duration-700"
                style={{ 
                   maskImage: 'linear-gradient(to bottom, black 85%, transparent), linear-gradient(to right, black 35%, transparent)'
                }}
             />
             {/* Smooth fade overlays to blend with the rest of the page */}
             <div className="absolute inset-0 bg-gradient-to-t from-[#FCFBF7] via-transparent to-transparent opacity-100"></div>
             {/* Extra mobile gradient for readability - Stronger on mobile */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#FCFBF7] via-[#FCFBF7]/95 sm:via-[#FCFBF7]/40 to-transparent opacity-100"></div>
          </div>

          <div className="relative z-20 flex flex-col items-start justify-center max-w-7xl w-full">
             <p className="text-[9px] md:text-xs uppercase tracking-[0.3em] font-bold mb-5 md:mb-6 text-left text-dourado drop-shadow-sm">Estética de Alta Performance</p>
             <h1 className="font-serif text-[2.2rem] sm:text-5xl md:text-7xl lg:text-[6.5rem] mb-6 text-left italic leading-[1.1] text-grafite max-w-3xl">
                Clínica <br className="sm:hidden" /> Claudia Freitas
             </h1>
             <p className="text-xs sm:text-base font-light max-w-xl text-left text-grafite/90 leading-relaxed mb-10 sm:mb-12">
                Protocolos personalizados que valorizem sua beleza natural e proporcionem resultados harmoniosos sob a tutela da nossa fundadora.
             </p>

             <div className="flex flex-col sm:flex-row items-start justify-start gap-3 sm:gap-6 text-[10px] md:text-xs tracking-wider text-grafite/70 uppercase mb-10 sm:mb-16 font-medium">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur-md rounded-full border border-grafite/5 shadow-sm"><Calendar className="w-4 h-4 text-dourado"/> Segunda à Sábado</div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur-md rounded-full border border-grafite/5 shadow-sm"><MapPin className="w-4 h-4 text-dourado"/> Goiânia, GO</div>
             </div>

             <a href="https://linkparaagendamento.linkbio.co/" target="_blank" rel="noreferrer" className="flex justify-center items-center gap-4 bg-grafite text-rosa-cha px-8 sm:px-16 py-4.5 sm:py-6 rounded-full font-bold uppercase tracking-widest text-[10px] sm:text-sm hover:scale-105 hover:bg-grafite/90 transition-all duration-300 shadow-[0_15px_35px_rgba(45,41,38,0.25)] mb-12 group">
                Fazer Agendamento via WhatsApp <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-dourado"/>
             </a>
          </div>
       </section>

       {/* SELECTION 2: BENEFITS (Light background) */}
       <section id="missao" className="bg-rosa-cha pt-32 pb-32 px-6 md:px-12 flex flex-col items-center relative z-0">
          <p className="text-xs uppercase tracking-widest text-[#B5915F] font-bold mb-4 text-center">Protocolos de Transformação</p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-grafite mb-12 md:mb-20 text-center">Nossos Diferenciais Estéticos</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl w-full">
            {[
              { title: "Tecnologia", subtitle: "Lifting Facial", text: "Ultraformer e Lavieen. Tecnologias não invasivas para uniformização facial.", icon: <Activity className="w-8 h-8 text-grafite mb-6" strokeWidth={1.5}/> },
              { title: "Harmonização", subtitle: "Avançada", text: "Técnica apurada para Botox, Fios de PDO e Preenchimento Labial.", icon: <Sparkles className="w-8 h-8 text-grafite mb-6" strokeWidth={1.5}/> },
              { title: "Excelência", subtitle: "Corporal", text: "Protocolos como Glúteo Max e reconstruções com Laser CO2.", icon: <ArrowRight className="w-8 h-8 text-grafite mb-6" strokeWidth={1.5}/> }
            ].map((p, i) => (
              <div key={i} className="bg-[#F8F1EB] p-8 md:p-10 flex flex-col items-center text-center rounded-sm shadow-sm hover:-translate-y-2 transition-transform duration-300">
                {p.icon}
                <div className="w-10 h-[1px] bg-dourado mb-6"></div>
                <h3 className="font-serif text-2xl mb-1 text-grafite">{p.title}</h3>
                <h4 className="font-serif text-xl italic mb-6 opacity-70 text-grafite">{p.subtitle}</h4>
                <p className="text-sm font-light opacity-80 leading-relaxed text-grafite/90">{p.text}</p>
              </div>
            ))}
          </div>
       </section>

       {/* SELECTION 3: ZIG-ZAG SECTIONS */}
       <section id="propostas" className="bg-[#FCFBF7] pt-24 pb-32 px-6 md:px-12 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col gap-20 md:gap-32">
             
             {/* Row 1 */}
             <div className="flex flex-col md:flex-row items-center gap-8 md:gap-24">
                <div className="flex-1 max-w-xl">
                   <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#B5915F] font-bold mb-4">Seja Exclusiva</p>
                   <h2 className="font-serif text-3xl lg:text-5xl mb-6 md:mb-8 leading-tight">Sinta-se segura no Ambiente Premium de Goiânia</h2>
                   <p className="text-sm md:text-base font-light opacity-80 leading-relaxed mb-6">
                      Incorpore o conforto de estar em mãos especializadas. Partilhamos de uma sensibilidade estética elevada, unindo profunda expertise em saúde à beleza.
                   </p>
                   <a href="#missao" className="inline-block mt-4 bg-dourado text-grafite px-8 py-3.5 uppercase tracking-widest text-[#1a1816] text-[10px] font-bold hover:scale-105 transition-transform shadow-md rounded-sm">
                      Conheça a clínica
                   </a>
                </div>
                
                <div className="flex-1 relative w-full h-[320px] md:h-[500px]">
                   <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1500&auto=format&fit=crop" className="w-full h-full object-cover rounded-sm shadow-xl relative z-10" alt="Clínica Interno"/>
                </div>
             </div>

             {/* Row 2 */}
             <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-24">
                <div className="flex-1 max-w-xl md:pl-10">
                   <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#B5915F] font-bold mb-4">Tratamentos Modernos</p>
                   <h2 className="font-serif text-3xl lg:text-5xl mb-6 md:mb-8 leading-tight">Protocolos de Alta Performance e Tecnologia</h2>
                   <p className="text-sm md:text-base font-light opacity-80 leading-relaxed mb-6">
                      Buscando inovações na medicina estética global, nossos métodos oferecem máxima eficiência com mínimo impacto intrusivo.
                   </p>
                   <a href="#missao" className="inline-block mt-4 bg-dourado text-grafite px-8 py-3.5 uppercase tracking-widest text-[#1a1816] text-[10px] font-bold hover:scale-105 transition-transform shadow-md rounded-sm">
                      Ver tratamentos
                   </a>
                </div>
                
                <div className="flex-1 relative w-full h-[320px] md:h-[500px]">
                   <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1000&auto=format&fit=crop" className="w-full h-full object-cover rounded-sm shadow-xl relative z-10" alt="Lavieen Laser"/>
                </div>
             </div>

          </div>
       </section>

       {/* SELECTION 4: ABOUT US (Team) */}
       <section id="equipe" className="bg-white text-grafite py-32 px-6 md:px-12 flex flex-col items-center border-t border-grafite/5 relative z-10">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#B5915F] font-bold mb-4">Quem somos?</p>
          <h2 className="font-serif text-3xl lg:text-5xl mb-8">Nossa Equipe de Referência</h2>
          
          <div className="flex items-center justify-center gap-3 mb-10 border border-grafite/10 py-1.5 px-4 rounded-full">
             <img src="https://bio.linkcdn.cc/upload/2024111101/173128740400042804.jpg" alt="Logo mini" className="w-4 h-4 rounded-full grayscale" />
             <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">Clínica Claudia Freitas</span>
          </div>

          <p className="text-sm md:text-base max-w-2xl text-center leading-relaxed opacity-80 mb-12 flex flex-col items-center border-t border-grafite/5 relative z-10">
             Nossa filosofia é trazer conforto em cada elemento. Encontre profissionais devotados ao cuidado extremo e altamente atualizados.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-10 md:gap-32 w-full max-w-4xl">
             
             {/* Profile 1 */}
             <div className="flex flex-col items-center text-center group cursor-pointer">
               <img src="https://bio.linkcdn.cc/upload/2024111101/173128740400042804.jpg" alt="Dra. Claudia Freitas" className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shadow-lg border-4 border-white mb-6 group-hover:scale-105 transition-transform duration-300"/>
               <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2 text-grafite">Dra. Claudia</h3>
               <p className="text-[10px] uppercase tracking-widest opacity-60 font-semibold text-grafite">Fundadora & Master em Fios PDO</p>
             </div>

             {/* Profile 2 */}
             <div className="flex flex-col items-center text-center group cursor-pointer">
               <img src="https://images.unsplash.com/photo-1594824432258-2900b462fc57?w=500&auto=format&fit=crop" alt="Equipe Clínica" className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shadow-lg border-4 border-white mb-6 grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-300"/>
               <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2 text-grafite">Equipe Clínica</h3>
               <p className="text-[10px] uppercase tracking-widest opacity-60 font-semibold text-grafite">Terapeutas & Especialistas Laser</p>
             </div>

          </div>
       </section>

       {/* SELECTION 5: FOOTER CTA */}
       <section className="relative bg-grafite text-rosa-cha pt-32 md:pt-60 pb-20 px-6 md:px-12 flex flex-col items-center justify-center">
          <svg className="absolute w-full h-[80px] md:h-[200px] top-0 left-0 -translate-y-[98%] z-10 pointer-events-none" viewBox="0 0 1440 320" preserveAspectRatio="none" fill="#2D2926">
             <path d="M0,96L80,122.7C160,149,320,203,480,202.7C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>

          <div className="max-w-6xl w-full flex flex-col lg:flex-row justify-between items-center z-20 gap-12 md:gap-20">
             
             {/* Left Text */}
             <div className="flex-1 max-w-lg text-center lg:text-left">
                <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] mb-10 md:mb-12 leading-[1.1]">Não hesite — <span className="italic opacity-80 text-dourado">venha viver sua transformação estética!</span></h2>
                
                <div className="flex flex-col gap-5 md:gap-6 text-sm opacity-90 tracking-wide font-light items-center lg:items-start text-rosa-cha">
                   <div className="flex items-center gap-4 text-xs sm:text-sm">
                      <Calendar className="w-5 h-5 text-dourado" /> Segunda à Sábado (Agendamento Prévio)
                   </div>
                   <div className="flex items-center gap-4 text-xs sm:text-sm">
                      <MapPin className="w-5 h-5 text-dourado" /> Av. Milão, 368 - Jardim Europa, Goiânia
                   </div>
                </div>
             </div>

             {/* Right CTA */}
             <div className="flex-1 w-full max-w-sm flex justify-center lg:justify-end pt-4 lg:pt-0">
                <a href="https://linkparaagendamento.linkbio.co/" target="_blank" rel="noreferrer" className="group relative flex flex-col items-center justify-center p-8 sm:p-12 bg-dourado text-grafite rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 hover:scale-105 transition-all duration-500 shadow-[0_0_50px_rgba(212,175,55,0.25)]">
                   <span className="font-serif text-2xl sm:text-4xl font-bold mb-2">Agendar</span>
                   <span className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold opacity-80 text-[#2D2926]">Pelo WhatsApp</span>
                   <div className="mt-4 p-3 bg-grafite text-rosa-cha rounded-full group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                   </div>
                </a>
             </div>

          </div>

          <div className="w-full max-w-6xl mt-20 pt-8 border-t border-rosa-cha/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest opacity-60">
            <p>© 2026 Clínica Claudia Freitas. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <a href="https://www.instagram.com/claudiafreitas.estetica/" target="_blank" rel="noreferrer" className="hover:text-dourado transition-colors">Instagram</a>
            </div>
          </div>

       </section>

    </div>
  );
}
