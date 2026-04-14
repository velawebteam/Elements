import { useRef, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Bed, 
  Bath, 
  Maximize, 
  Home, 
  Flame, 
  Dumbbell, 
  Sun, 
  Luggage, 
  Snowflake, 
  Thermometer, 
  Wind, 
  Droplets, 
  Battery, 
  Smartphone, 
  Zap, 
  Leaf, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  Users 
} from 'lucide-react';
import { properties } from '../data/properties';

export default function ProjectDetail() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [xRange, setXRange] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Calculate the exact distance to scroll horizontally and set container height
  useEffect(() => {
    const updateDimensions = () => {
      if (contentRef.current) {
        const width = contentRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setXRange(width - viewportWidth);
        
        // Set container height to match content width for a 1:1 scroll feel
        // We add a bit of extra height if needed, but 1:1 is usually best for "natural" feel
        setContainerHeight(`${width}px`);
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    const timer = setTimeout(updateDimensions, 500);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearTimeout(timer);
    };
  }, [property]);

  const [containerHeight, setContainerHeight] = useState('500vh');

  // Transform vertical scroll into horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], [0, -xRange]);
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return <div className="h-screen flex items-center justify-center text-2xl font-serif">Project not found</div>;
  }

  return (
    <div className="bg-ink text-beige">
      {/* 
        The container height determines how long the user has to scroll vertically 
        to complete the horizontal movement. 500vh means 5 screens of scrolling.
      */}
      <div ref={containerRef} style={{ height: containerHeight }} className="relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div ref={contentRef} style={{ x }} className="flex h-full">
            
            {/* Section 1: Hero */}
            <div className="h-screen w-screen flex-shrink-0 relative flex items-center justify-center">
              <div className="absolute inset-0">
                <img src={property.heroImage} alt={property.name} className="w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-transparent" />
              </div>
              <div className="relative z-10 px-12 md:px-24 w-full max-w-7xl mx-auto">
                <motion.h1 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="font-serif text-6xl md:text-9xl mb-6"
                >
                  {property.name}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="text-sm tracking-[0.3em] uppercase text-gold"
                >
                  {property.location}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="absolute bottom-12 left-12 md:left-24 flex items-center gap-4 text-xs tracking-widest uppercase opacity-50"
                >
                  <div className="w-12 h-[1px] bg-beige" />
                  Scroll to explore
                </motion.div>
              </div>
            </div>

            {/* Section 2: Description & Specs */}
            <div className="h-screen w-screen flex-shrink-0 flex items-center px-12 md:px-24 bg-ink">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-7xl mx-auto w-full">
                <div>
                  <h2 className="font-serif text-4xl md:text-5xl mb-8">Concept</h2>
                  <p className="text-lg opacity-80 leading-relaxed max-w-xl">
                    {property.description}
                  </p>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xs tracking-widest uppercase text-gold mb-8">Specifications</h3>
                  <div className="space-y-6 text-sm tracking-widest uppercase">
                    <div className="flex justify-between border-b border-white/10 pb-4">
                      <span className="opacity-50">Internal Area</span>
                      <span>{property.area} m²</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-4">
                      <span className="opacity-50">Bedrooms</span>
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-4">
                      <span className="opacity-50">Bathrooms</span>
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-4">
                      <span className="opacity-50">Location</span>
                      <span>{property.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: First Gallery Image */}
            <div className="h-screen flex-shrink-0 flex items-center px-12 md:px-24 bg-ink">
              <div className="w-[80vw] md:w-[60vw] h-[70vh] relative overflow-hidden">
                <img src={property.gallery[0]} alt={`${property.name} detail 1`} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Section 4: Pure Architectural Vision */}
            <div className="h-screen w-screen flex-shrink-0 flex items-center px-12 md:px-24 bg-ink">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto w-full items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="space-y-8"
                >
                  <h2 className="font-serif text-5xl md:text-7xl leading-tight">Pure Architectural<br/>Vision</h2>
                  <div className="space-y-6 text-base opacity-70 leading-relaxed max-w-xl font-light">
                    <p>
                      Raul Lino foi um influente arquiteto português, conhecido por projetos como a "Casa Portuguesa" e a "Casa do Cipreste", e embora a sua obra seja vasta e se espalhe por Portugal, ele tem uma ligação notável com Tavira, onde projetou as famosas Casas de Raul Lino (ou Casas da Família Guerreiro), um conjunto arquitetónico importante classificado como Interesse Municipal, que reflete o seu estilo único, explorando o modo de vida português e influências luso-mouriscas.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Materials & Craftsmanship</h3>
                    <ul className="space-y-3 text-sm opacity-80">
                      {[
                        "Micro-cement floors and walls in warm, natural tones",
                        "Premium natural wood accents",
                        "Floor-to-ceiling glass façades",
                        "Custom sculptural elements",
                        "Desert garden landscaping"
                      ].map((item, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <span className="w-1 h-1 bg-gold rounded-full" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5 }}
                  className="h-[70vh] relative overflow-hidden shadow-2xl border border-white/5"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Architectural Vision" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-ink/10" />
                </motion.div>
              </div>
            </div>

            {/* Section 5: Comfort Living */}
            <div className="h-screen w-screen flex-shrink-0 flex items-center px-12 md:px-24 bg-ink">
              <div className="max-w-7xl mx-auto w-full space-y-16">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="font-serif text-4xl md:text-6xl text-center"
                >
                  Comfort Living through thoughtful Layout
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
                  {[
                    { icon: <Bed className="w-6 h-6" />, title: "3 Suites", desc: "3 Master Suites, each 25 m²" },
                    { icon: <Bath className="w-6 h-6" />, title: "3 Bathrooms", desc: "Premium fixtures" },
                    { icon: <Maximize className="w-6 h-6" />, title: "Atrium", desc: "Central courtyard for natural light and airflow" },
                    { icon: <Home className="w-6 h-6" />, title: "Inside Outside Living", desc: "Seamless indoor-outdoor flow" },
                    { icon: <Flame className="w-6 h-6" />, title: "Rooftop BBQ", desc: "Outdoor entertaining space" },
                    { icon: <Dumbbell className="w-6 h-6" />, title: "Gym & Spa", desc: "Sauna / Ice Bath / Yoga / Mindfulness" },
                    { icon: <Sun className="w-6 h-6" />, title: "Lightboxes", desc: "Architectural lighting features" },
                    { icon: <Luggage className="w-6 h-6" />, title: "Fully Furnished", desc: "Turn-key ready — come with your trolley and move in" },
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex flex-col items-center text-center p-10 bg-ink hover:bg-white/[0.02] transition-colors group"
                    >
                      <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                      <h4 className="text-[10px] tracking-[0.3em] uppercase mb-3 font-medium">{item.title}</h4>
                      <p className="text-[9px] opacity-40 leading-relaxed max-w-[150px]">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 6: Technology & Sustainability */}
            <div className="h-screen w-screen flex-shrink-0 flex items-center px-12 md:px-24 bg-ink">
              <div className="max-w-7xl mx-auto w-full space-y-20">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="font-serif text-4xl md:text-6xl text-center"
                >
                  Technology & Sustainability
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-y-16 gap-x-12">
                  {[
                    { icon: <Snowflake className="w-6 h-6" />, title: "AC" },
                    { icon: <Thermometer className="w-6 h-6" />, title: "Floor Heating (Water)" },
                    { icon: <Wind className="w-6 h-6" />, title: "Air Recovery Ventilation" },
                    { icon: <Droplets className="w-6 h-6" />, title: "Humidity Control" },
                    { icon: <Sun className="w-6 h-6" />, title: "Solar Panel PV" },
                    { icon: <Battery className="w-6 h-6" />, title: "Battery Storage" },
                    { icon: <Smartphone className="w-6 h-6" />, title: "Smart Home" },
                    { icon: <Zap className="w-6 h-6" />, title: "Car Charger" },
                    { icon: <Leaf className="w-6 h-6" />, title: "Low Maintenance" },
                    { icon: <ShieldCheck className="w-6 h-6" />, title: "Premium Isolation" },
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex flex-col items-center gap-6 group"
                    >
                      <div className="text-gold/40 group-hover:text-gold transition-colors duration-500 scale-90 group-hover:scale-110">{item.icon}</div>
                      <span className="text-[10px] tracking-[0.3em] uppercase opacity-30 group-hover:opacity-100 transition-all duration-500 text-center">{item.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 7: A Singular Investment */}
            <div className="h-screen w-screen flex-shrink-0 flex items-center px-12 md:px-24 bg-beige text-ink">
              <div className="max-w-7xl mx-auto w-full text-center space-y-10 pt-12">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="space-y-6"
                >
                  <h2 className="font-serif text-6xl md:text-8xl">A Singular Investment</h2>
                  <p className="text-xl opacity-60 max-w-2xl mx-auto font-light leading-relaxed">
                    Beyond lifestyle, this property represents a strategic acquisition in one of Europe's most desirable coastal regions
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
                  {[
                    { 
                      icon: <TrendingUp className="w-8 h-8" />, 
                      title: "Strong Value Growth", 
                      desc: "The Eastern Algarve continues to see robust appreciation, with premium properties in high demand from international buyers." 
                    },
                    { 
                      icon: <Award className="w-8 h-8" />, 
                      title: "Ultra-Rare Design", 
                      desc: "Modern architectural masterpieces of this caliber are exceptionally scarce in the Algarve, making this a truly unique opportunity." 
                    },
                    { 
                      icon: <Users className="w-8 h-8" />, 
                      title: "Rental Potential", 
                      desc: "Luxury villas in Luz de Tavira command premium rental rates, offering excellent returns for investment-minded owners." 
                    },
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-12 bg-beige hover:bg-ink/[0.02] transition-colors group space-y-6"
                    >
                      <div className="text-gold flex justify-center group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                      <div className="space-y-4">
                        <h3 className="text-xs tracking-[0.3em] uppercase font-bold">{item.title}</h3>
                        <p className="text-sm opacity-70 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-8"
                >
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-40">
                    Exclusive viewings by appointment only
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Section 8: Remaining Gallery */}
            <div className="h-screen flex-shrink-0 flex items-center gap-12 px-12 md:px-24 bg-ink">
              {property.gallery.slice(1).map((img, idx) => (
                <div key={idx} className="w-[80vw] md:w-[60vw] h-[70vh] relative overflow-hidden">
                  <img src={img} alt={`${property.name} detail ${idx + 2}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Section 9: CTA */}
            <div className="h-screen w-screen flex-shrink-0 flex items-center justify-center bg-beige text-ink relative">
              <div className="text-center max-w-2xl px-6">
                <h2 className="font-serif text-5xl md:text-7xl mb-8">Inquire</h2>
                <p className="text-sm tracking-widest uppercase opacity-60 mb-12">
                  Pricing and detailed specifications available upon request.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-block px-12 py-5 bg-ink text-beige text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-colors duration-300"
                >
                  Request Information
                </Link>
              </div>
              <div className="absolute bottom-12 right-12 text-xs tracking-widest uppercase opacity-40">
                Elements Architecture
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
