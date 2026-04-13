import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { properties } from '../data/properties';

export default function Projects() {
  return (
    <div className="bg-beige min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Environments</h1>
          <p className="text-sm tracking-widest uppercase opacity-60 max-w-md">
            A curated selection of our engineered habitats in the Algarve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {properties.map((prop, index) => (
            <motion.div 
              key={prop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index % 2 === 0 ? 0 : 0.2 }}
              className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <Link to={`/projects/${prop.id}`}>
                <div className="relative aspect-[3/4] overflow-hidden mb-8">
                  <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={prop.heroImage} 
                    alt={prop.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-serif text-3xl md:text-4xl mb-2">{prop.name}</h2>
                    <p className="text-xs tracking-widest uppercase opacity-60">{prop.location}</p>
                  </div>
                  <div className="text-xs tracking-widest uppercase opacity-40 text-right">
                    <div>{prop.area} m²</div>
                    <div>{prop.bedrooms} Beds</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
