import { useRef, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
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

            {/* Section 3: Gallery */}
            <div className="h-screen flex-shrink-0 flex items-center gap-12 px-12 md:px-24 bg-ink">
              {property.gallery.map((img, idx) => (
                <div key={idx} className="w-[80vw] md:w-[60vw] h-[70vh] relative overflow-hidden">
                  <img src={img} alt={`${property.name} detail ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Section 4: CTA */}
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
