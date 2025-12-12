import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  name: string;
  btnName:string;
  location: string;
  label: string;
  subText: string;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() {}

  getProjects(): Project[] {
    return [
      {
        id: 1,
        name: 'ASBL BROADWAY',
        btnName: 'BROADWAY',
        location: 'Financial District, Gachibowli',
        label:'Exclusive 3-BHK',
        subText: 'Upcoming premium gated community',
        image: 'https://static.squareyards.com/resources/images/hyderabad/project-image/asbl-broadway-project-project-large-image1-1924.jpg',
        description:
        'ASBL’s upcoming project in the Financial District, adjacent to ASBL Loft, is a premium gated community spread across 5.03 acres with 75% open space. Residents will enjoy top-tier amenities, panoramic views, and excellent connectivity. This future-ready development is set to be handed over by December 2029, making it an ideal choice for those seeking an elevated urban lifestyle.'
      },

      {
        id: 2,
        name: 'ASBL LANDMARK',
        btnName:'LANDMARK',
        location: 'Kukatpally Y Jn, Hyderabad',
        label:'Premium 3, 3.5 & 4 BHKs',
        subText: 'Ultra-premium residences with iconic architecture',
        image: 'https://media.asbl.in/Landmark/Meta_Data/project-rendrer.webp',
        description:
          'A landmark development featuring high-end homes, world-class amenities, and iconic architectural design. At ASBL Landmark, every detail is crafted to offer you an unparalleled living experience.Experience the perfect blend of elegance and practicality in the heart of Kukatpally,where every aspect of living is taken to the next level.'
      },

      {
        id: 3,
        name: 'ASBL Loft',
        btnName: 'LOFT',
        location: 'Financial District, Gachibowli',
        label: 'Premium 3BHKs',
        subText: 'Modern minimalist living for urban professionals',
        image: 'https://media.asbl.in/Loft/Meta_Data/Landing-1.png',
        description:
        'ASBL Loft is a premium 3BHK apartment project by ASBL in Hyderabads Financial District (Gachibowli/Puppalaguda), featuring two 45-story towers on 4.92 acres, offering spacious modern homes with vast balconies, a clubhouse, pool, gym, and proximity to IT hubs, with possession expected around late 2026/2029, focusing on low-density luxury living with privacy and connectivity.'
      },

      {
        id: 4,
        name: 'ASBL Spectra',
        btnName: 'SPECTRA',
        location: 'Gachibowli',
        label: 'Exclusive 3BHK',
        subText: 'Luxurious high-rise residences with skyline views',
        image: 'https://media.asbl.in/Spectra/Meta_Data/Landing.jpg',
        description:
        'ASBL Spectra is a luxury residential project by Ashoka Builders in Hyderabads Financial District, offering spacious 3BHK apartments with unique "Outdoor Living Balconies," a huge clubhouse, and extensive amenities like pools, sports courts, and green spaces, focusing on modern, connected living near major IT hubs, with possession anticipated around late 2025/early 2027. '
      },

      {
        id: 5,
        name: 'ASBL Springs',
        btnName:'SPRINGS',
        location: 'Kompally, Hyderabad',
        label:'Premium 2 & 3BHK',
        subText: 'Family-focused community with lush green zones',
        image: 'https://housing-images.n7net.in/4f2250e8/8e9ece068316ef1f917134a650c43734/v0/large/asbl_springs-pocharam_telangana-hyderabad-ashoka_builders_india_private_limited.png',
        description:
        'ASBL Springs is a premium, RERA-approved residential project by Ashoka Builders in Pocharam, Hyderabad, offering 2 & 3 BHK apartments (1210-1475 sq ft) across two 14-floor towers on 4.11 acres, featuring 72% open space, modern amenities like a clubhouse & gym, and close proximity to Infosys SEZ and ORR, with possession starting early 2025 for a serene, connected living experience. '
      },

      {
        id: 6,
        name: 'ASBL SPIRE',
        btnName: 'SPIRE',
        location: 'Kokapet, Hyderabad',
        label:'Exclusive 3BHK',
        subText: 'Thoughtfully designed homes with efficient layouts',
        image: 'https://media.asbl.in/Spire/Meta_Data/Landing.webp',
        description:
        'ASBL Spire is a premium single-tower, G+35-floor residential project by Ashoka Builders in Kokapet, Hyderabad, offering spacious 3BHK lake-facing apartments (1905-2120 sq. ft.) with unique "outdoor living spaces" (large balconies) on 2.85 acres, featuring a 24,000 sq ft clubhouse, amenities like pools, gym, courts, 75% open space, and great connectivity to IT hubs like Neopolis, making it a low-density, luxury living option'
      },
      
      {
        id: 7,
        name: 'ASBL Lakeside',
        btnName: 'LAKESIDE',
        location: 'Khajaguda, Hyderabad',
        label:'Premium 2 & 3BHK',
        subText: 'Lake-facing premium apartments with peaceful surroundings',
        image: 'https://res.cloudinary.com/jll-global-gdim/image/upload/IN/Horizon/Resi/Prod/JLL_Hyd_Ashoka_Lakeside_39_EXT_1.jpg',
        description:
        'ASBL Lakeside is a residential project by Ashoka Builders (ASBL) in Manikonda/Khajaguda, Hyderabad, offering ready-to-move 2 & 3 BHK apartments with extensive amenities like a clubhouse, gym, pool, sports courts (badminton, basketball), and green spaces, built around the Khajaguda Lake for a serene environment with good connectivity to Gachibowli and Hitech City'
      },
    ];
  }
}
