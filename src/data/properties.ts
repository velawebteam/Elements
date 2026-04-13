export interface Property {
  id: string;
  name: string;
  location: string;
  description: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  heroImage: string;
  gallery: string[];
  coordinates: { lat: number; lng: number };
}

export const properties: Property[] = [
  {
    id: "villa-aurora",
    name: "Villa Aurora",
    location: "Quinta do Lago, Algarve",
    description: "A masterclass in environmental integration. Villa Aurora is engineered to harness natural light and coastal breezes, creating a living space that actively contributes to occupant wellbeing. Features advanced air purification, circadian lighting systems, and materials selected for zero VOC emissions.",
    area: 850,
    bedrooms: 5,
    bathrooms: 7,
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    ],
    coordinates: { lat: 37.0381, lng: -8.0181 }
  },
  {
    id: "the-monolith",
    name: "The Monolith",
    location: "Vale do Lobo, Algarve",
    description: "Carved from the landscape, The Monolith stands as a testament to permanence and performance. This structure utilizes thermal mass engineering to maintain optimal internal climates year-round, while its brutalist-inspired geometry frames the Atlantic Ocean.",
    area: 1200,
    bedrooms: 6,
    bathrooms: 8,
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    ],
    coordinates: { lat: 37.0543, lng: -8.0617 }
  },
  {
    id: "horizon-house",
    name: "Horizon House",
    location: "Vilamoura, Algarve",
    description: "Designed around the concept of infinite extension. Horizon House blurs the boundary between interior sanctuary and exterior expanse. The residence incorporates a state-of-the-art water filtration and recovery system, alongside acoustic engineering for absolute silence.",
    area: 640,
    bedrooms: 4,
    bathrooms: 5,
    heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18efc2291?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    ],
    coordinates: { lat: 37.0786, lng: -8.1172 }
  }
];
