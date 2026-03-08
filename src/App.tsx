/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Instagram, 
  MessageCircle, 
  Calendar, 
  CheckCircle2, 
  ChevronRight, 
  Star,
  Menu,
  X,
  MapPin,
  Clock,
  Phone
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-serif font-bold tracking-tighter"
        >
          TAISE ELESBÃO <span className="text-gold italic font-normal text-sm md:text-base block md:inline ml-0 md:ml-2">Nail Designer</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm uppercase tracking-widest hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://www.instagram.com/taiseelesbao?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-gold transition-colors"
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a 
              href="https://wa.me/5547996660939?text=Agendar%20um%20Horario"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest cursor-pointer"
            >
              Agendar
            </motion.a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-serif text-left"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 space-y-4">
              <a 
                href="https://www.instagram.com/taiseelesbao?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-white/10 w-full py-3 rounded-xl font-bold"
              >
                <Instagram size={18} /> INSTAGRAM
              </a>
              <a 
                href="https://wa.me/5547996660939?text=Agendar%20um%20Horario"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-black w-full py-3 rounded-xl font-bold text-center block"
              >
                AGENDAR AGORA
              </a>
            </div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 md:pt-40 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.05),transparent_70%)]" />
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="h-[1px] w-12 bg-gold/50" />
              <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">Ateliê de Alta Performance</span>
            </div>
            <h1 className="text-7xl md:text-[120px] font-serif font-bold leading-[0.85] mb-10 tracking-tighter">
              Elegância em <br />
              <span className="italic text-gold font-normal">cada detalhe.</span>
            </h1>
            <p className="text-xl text-white/70 max-w-lg mb-4 leading-relaxed font-light">
              Especialista em unhas em gel e esmaltação premium. Elevando sua autoestima através de um design exclusivo e duradouro.
            </p>
            <p className="text-gold font-serif italic text-2xl mb-12">Cuide-se, você merece!</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a
                href="https://wa.me/5547996660939?text=Agendar%20um%20Horario"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, backgroundColor: '#d5b069' }}
                whileTap={{ scale: 0.98 }}
                className="bg-gold text-black px-12 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl shadow-gold/10 cursor-pointer"
              >
                <Calendar size={16} />
                Agendar Experiência
              </motion.a>
              <motion.a
                href="#gallery"
                whileHover={{ scale: 1.02, borderColor: 'rgba(197,160,89,0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="border border-white/10 px-12 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 backdrop-blur-sm cursor-pointer"
              >
                Ver Portfólio
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop" 
                alt="Nail Art Design" 
                className="w-full aspect-[3/4] object-cover hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            
            {/* Elegant Floating Element */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 glass p-8 rounded-[2.5rem] z-20 border-white/10 shadow-2xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-gold mb-2">
                  <Star size={24} className="fill-gold" />
                </div>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1">Qualidade</p>
                <p className="font-serif text-2xl italic">Impecável</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Alongamento em Fibra de Vidro",
      description: "Técnica de alta resistência e naturalidade para unhas longas e impecáveis.",
      price: "A partir de R$ 160",
      image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Alinhamento de Lâmina",
      description: "Nivelamento perfeito da superfície da unha para um acabamento profissional.",
      price: "R$ 100",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Esmaltação em Gel",
      description: "Brilho vitrificado e cor intensa com durabilidade de até 3 semanas.",
      price: "R$ 80",
      image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Banho de Gel",
      description: "Camada protetora que fortalece suas unhas naturais sem extensões.",
      price: "R$ 120",
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs uppercase tracking-[0.5em] text-gold font-bold mb-6">Menu de Serviços</h2>
            <p className="text-5xl md:text-6xl font-serif font-bold tracking-tighter">Excelência em cada <br /> procedimento.</p>
          </div>
          <p className="text-white/50 max-w-xs text-sm leading-relaxed">
            Utilizamos apenas produtos de linha profissional para garantir a integridade das suas unhas naturais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 border border-white/5">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
              <p className="text-white/50 text-sm mb-6 leading-relaxed font-light">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-gold font-bold tracking-widest text-sm italic">{service.price}</span>
                <div className="h-[1px] flex-grow mx-4 bg-white/10" />
                <ChevronRight size={16} className="text-white/20 group-hover:text-gold transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://lh3.googleusercontent.com/d/1w7kHNRVxazX6RkEUjWozatBCed31sTOE",
    "https://lh3.googleusercontent.com/d/1QGBVYc_r_nUCm9ijVaJG97yr1kkQffHi",
    "https://lh3.googleusercontent.com/d/11LPbCeGVvgIOjGx7R1kdsVmlMrGqtwjy",
    "https://lh3.googleusercontent.com/d/1wnjuI3Sax-ajOj8F5snL-B9vnFHlFbKx",
    "https://lh3.googleusercontent.com/d/1sRfo-D1h3BFzXvQee5RutpLQTYqMLfpA",
    "https://lh3.googleusercontent.com/d/1cJMLurGz4PT_6d2GGO3NXgvq_n21gPmb"
  ];

  return (
    <section id="gallery" className="py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.5em] text-gold font-bold mb-6">Curadoria</h2>
          <p className="text-5xl md:text-6xl font-serif font-bold tracking-tighter">Obras de Arte</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/5 relative group"
            >
              <img 
                src={img} 
                alt={`Trabalho ${i + 1}`} 
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <a 
                href="https://www.instagram.com/taiseelesbao?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
              >
                <Instagram size={32} className="text-white/80" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-xs uppercase tracking-[0.5em] text-gold font-bold mb-8">Agendamento</h2>
            <h3 className="text-5xl md:text-6xl font-serif font-bold mb-10 tracking-tighter">Reserve seu <br /> momento.</h3>
            
            <div className="space-y-12">
              <div className="flex items-start gap-6 group">
                <div className="bg-white/5 p-4 rounded-2xl text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-2">Localização</p>
                  <p className="text-lg font-light">Agílio Cunha, 1622 - Cidade Nova, Itajaí</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="bg-white/5 p-4 rounded-2xl text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-2">WhatsApp</p>
                  <p className="text-lg font-light">(47) 99666-0939</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="bg-white/5 p-4 rounded-2xl text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-2">Atendimento</p>
                  <p className="text-lg font-light">Seg - Sex: 09h às 19h | Sáb: 09h às 16h</p>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-12 rounded-[2rem] overflow-hidden border border-white/10 h-[250px] w-full shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.107049871434!2d-48.69707292455018!3d-26.91593497664654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8cc054859942d%3A0x94d8cc054859942d!2sR.%20Ag%C3%ADlio%20Cunha%2C%201622%20-%20Cidade%20Nova%2C%20Itaja%C3%AD%20-%20SC%2C%2088308-000!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Taise Elesbão"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="glass p-10 md:p-16 rounded-[3.5rem] border-white/10 shadow-2xl relative">
            <div className="absolute -top-6 -right-6 bg-gold text-black w-20 h-20 rounded-full flex items-center justify-center rotate-12 font-bold text-[10px] uppercase tracking-tighter text-center px-2">
              Vagas Limitadas
            </div>
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 ml-2">Nome Completo</label>
                <input type="text" className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 focus:border-gold/50 outline-none transition-all font-light" placeholder="Como podemos te chamar?" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 ml-2">WhatsApp</label>
                <input type="tel" className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 focus:border-gold/50 outline-none transition-all font-light" placeholder="(00) 00000-0000" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 ml-2">Serviço Desejado</label>
                <select className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 focus:border-gold/50 outline-none transition-all font-light appearance-none">
                  <option>Unhas em Gel</option>
                  <option>Esmaltação em Gel</option>
                  <option>Manutenção de Gel</option>
                </select>
              </div>
              <motion.a
                href="https://wa.me/5547996660939?text=Agendar%20um%20Horario"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, backgroundColor: '#d5b069' }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gold text-black py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-xl shadow-gold/20 cursor-pointer"
              >
                <MessageCircle size={18} />
                Solicitar Horário
              </motion.a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-serif font-bold tracking-tighter">
          TAISE ELESBÃO <span className="text-gold italic font-normal text-sm">Nail Designer</span>
        </div>
        
        <div className="flex gap-8 text-white/40 text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-gold transition-colors">Privacidade</a>
          <a href="#" className="hover:text-gold transition-colors">Termos</a>
          <a href="#" className="hover:text-gold transition-colors">FAQ</a>
        </div>
        
        <div className="flex gap-4">
          <a href="https://www.instagram.com/taiseelesbao?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-all">
            <Instagram size={18} />
          </a>
          <a href="https://wa.me/5547996660939?text=Agendar%20um%20Horario" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-all">
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
      <div className="text-center mt-12 text-white/20 text-[10px] uppercase tracking-[0.3em]">
        © 2024 Taise Elesbão Nail Design. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-[#050505] text-white selection:bg-gold selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      
      {/* Feedback Section */}
      <section className="py-24 glass border-y border-white/5">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-xs uppercase tracking-[0.5em] text-gold font-bold mb-4">Experiência</h2>
            <p className="text-3xl font-serif font-bold italic">Deixe seu depoimento</p>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <input 
                type="text" 
                placeholder="Seu Nome" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-gold/50 outline-none transition-all font-light text-sm"
              />
              <textarea 
                placeholder="Como foi sua experiência no ateliê?" 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-gold/50 outline-none transition-all font-light text-sm resize-none"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold text-black px-10 py-3 rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-gold/20"
              >
                Enviar Comentário
              </motion.button>
            </div>
          </div>
          
          <div className="mt-16 pt-12 border-t border-white/5">
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} className="fill-gold text-gold" />)}
            </div>
            <p className="text-lg font-serif italic text-center text-white/70 leading-relaxed">
              "O trabalho da Taise é simplesmente impecável. Minhas unhas nunca duraram tanto e o acabamento é extremamente natural. Recomendo de olhos fechados!"
            </p>
            <div className="mt-4 text-center">
              <p className="text-[10px] uppercase tracking-widest text-gold font-bold">Depoimento Verificado</p>
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
