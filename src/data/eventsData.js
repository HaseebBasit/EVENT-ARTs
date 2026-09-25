/**
 * EVENT ARTS - Centralized Data Store
 * Luxury Event Planning & Management Agency | Karachi, Pakistan
 */

export const WHATSAPP_NUMBER = "923049060514";

export const getWhatsAppUrl = (message = "Hello Event Arts, I would like to discuss an event.") => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const BRAND_INFO = {
  name: "Event Arts",
  tagline: "Events • Weddings • Corporate • Private",
  city: "Karachi, Pakistan",
  address: "DHA Phase 6, Karachi, Pakistan",
  phone: "+92 304 9060514",
  email: "eventarts@outlook.com",
  whatsappNumber: WHATSAPP_NUMBER,
  hours: "Mon – Sun: 10:00 AM – 8:00 PM PKT",
  socials: {
    instagram: "https://www.instagram.com/eventarts.pk?stkn=MWY2aWJ1ODZ2eWt5eA==",
    facebook: "https://www.facebook.com/eventarts1",
    tiktok: "https://www.tiktok.com/@eventarts.pk?lang=en",
    whatsapp: getWhatsAppUrl()
  }
};

export const VERIFIED_STATS = [
  { value: 200, suffix: "+", label: "Events Organized", icon: "calendar" },
  { value: 22000, suffix: "+", label: "Happy Clients", icon: "users" },
  { value: 6, suffix: " Years", label: "Experience", icon: "award" }
];

export const SERVICES = [
  {
    id: "wedding",
    title: "Wedding Events",
    eyebrow: "Mehndi • Baraat • Walima • Nikkah",
    shortDesc: "From intimate ceremonies to grand receptions, we create unforgettable wedding experiences.",
    longDesc: "Pakistan's most cherished wedding traditions brought to life with regal stage architectures, imported floral canopies, ambient mood lighting, and flawless day-of choreography.",
    image: "/images/owner/owner-28.jpg",
    items: [
      "Wedding Planning",
      "Ceremony Coordination",
      "Reception Planning",
      "Décor & Stage Design",
      "Guest Experience"
    ],
    features: [
      "Royal stage design & bespoke backdrops",
      "Mehndi lawn setups & festive jhula canopies",
      "Traditional bridal lounges & floor seating",
      "Custom crystal & floral entry walkways",
      "VIP bridal concierge & day-of coordination",
      "Comprehensive caterer & banquet integration"
    ]
  },
  {
    id: "corporate",
    title: "Corporate Events",
    eyebrow: "Conferences • Brand Events • Galas",
    shortDesc: "Professional and impactful events designed to reflect your brand and leave a lasting impression.",
    longDesc: "Engineered for excellence, our corporate productions feature modular LED display walls, precision line-array audio, branded registration suites, and executive gala catering.",
    image: "/images/owner/owner-08.jpg",
    items: [
      "Conferences & Seminars",
      "Brand Events",
      "Product Launches",
      "Corporate Dinners",
      "Stage & Production"
    ],
    features: [
      "High-definition LED screens & truss structures",
      "Annual award ceremonies & gala dinners",
      "Executive conferences & seminars",
      "Brand activations & product launch stages",
      "Professional hostesses & ushering staff",
      "Media backdrops & corporate branding"
    ]
  },
  {
    id: "private",
    title: "Birthday & Private Events",
    eyebrow: "Milestone Birthdays • Anniversaries • Dinners",
    shortDesc: "Celebrate life's special moments with personalized concepts and creative event planning.",
    longDesc: "Intimate family celebrations or milestone celebrations brought to life with bespoke themes, mood lighting, fine tabletop styling, and personalized stationery.",
    image: "/images/owner/owner-14.jpg",
    items: [
      "Birthday Celebrations",
      "Private Dinners",
      "Family Events",
      "Themed Parties",
      "Personalized Décor"
    ],
    features: [
      "Milestone birthday themes & floral backdrops",
      "Intimate candlelit dinners & anniversaries",
      "Custom dessert & cake staging",
      "Curated musical & acoustic setups",
      "Personalized table runners & stationery",
      "Children & family outdoor party setups"
    ]
  },
  {
    id: "decor",
    title: "Décor & Production",
    eyebrow: "Floral Craft • Lighting • Stagecraft",
    shortDesc: "Stunning setups, creative themes, lighting and flawless production for every occasion.",
    longDesc: "In-house production with structural staging, imported fresh flowers, ambient pin-spot lighting, and luxury furnishings tailored to perfection.",
    image: "/images/owner/owner-21.jpg",
    items: [
      "Stage Design",
      "Floral Décor",
      "Lighting",
      "Furniture & Setup",
      "Production Management"
    ],
    features: [
      "Intelligent moving heads & warm architectural lighting",
      "Exotic seasonal fresh floral arches & centerpieces",
      "Gold chrome & laser-cut dining furniture",
      "Mirrored LED glass walkways & fountains",
      "Turquoise & crystal chandelier installations",
      "Custom drapery, ceilings & tenting"
    ]
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    id: "creativity",
    title: "Creativity",
    tagline: "Fresh ideas tailored to your event.",
    description: "Every concept is customized from scratch, weaving contemporary aesthetics with rich cultural elegance.",
    icon: "sparkles"
  },
  {
    id: "precision",
    title: "Precision",
    tagline: "Flawless execution in every detail.",
    description: "Rigorous planning, detailed timelines, and synchronized production ensure nothing is left to chance.",
    icon: "compass"
  },
  {
    id: "personalization",
    title: "Personalization",
    tagline: "Every event is unique, just like you.",
    description: "Your story, your personality, and your aesthetic desires guide every styling and spatial choice we make.",
    icon: "user-heart"
  },
  {
    id: "excellence",
    title: "Excellence",
    tagline: "Our commitment to the highest standards.",
    description: "From luxury materials and pristine floral selection to VIP hospitality, we deliver uncompromising quality.",
    icon: "crown"
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "concepts",
    title: "Creative Concepts",
    description: "Fresh and unique ideas tailored to your event.",
    detail: "Bespoke spatial design, imaginative themes, and artistic vision curated exclusively for your celebration."
  },
  {
    id: "execution",
    title: "Professional Execution",
    description: "Flawless planning and professional event management.",
    detail: "End-to-end orchestration, seamless vendor alignment, and disciplined on-site stage management."
  },
  {
    id: "planning",
    title: "Personalized Planning",
    description: "Every event is designed around your vision.",
    detail: "Direct consultation, attentive listening, and bespoke solutions that respect your budget and desires."
  },
  {
    id: "detail",
    title: "Attention to Detail",
    description: "Every element is carefully planned and executed.",
    detail: "From floral color grades to custom lighting cues, no nuance is too small to escape our perfectionism."
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation",
    subtitle: "Understanding your vision, preferences and budget.",
    description: "We begin with a personalized discovery session to understand your aesthetic aspirations, event scale, venue preferences in Karachi, and overall vision.",
    image: "/images/owner/owner-14.jpg",
    tags: ["Aspiration Discovery", "Venue Exploration", "Budget Roadmap"]
  },
  {
    number: "02",
    title: "Planning & Design",
    subtitle: "We create a detailed plan with creative concepts and timelines.",
    description: "Our creative designers draft full architectural staging plans, curated floral palettes, mood boards, seating arrangements, and exact production schedules.",
    image: "/images/owner/owner-11.jpg",
    tags: ["Stage Concepts", "Floral Moodboards", "Run-of-Show Schedules"]
  },
  {
    number: "03",
    title: "Execution",
    subtitle: "Our team handles every detail with precision and professionalism.",
    description: "Our veteran production crew arrives on-site to construct stages, rig precision lighting, arrange fresh floral blooms, and calibrate pro-audio equipment.",
    image: "/images/owner/owner-08.jpg",
    tags: ["Structural Staging", "Audio/Visual Calibration", "Day-Of Management"]
  },
  {
    number: "04",
    title: "Your Perfect Event",
    subtitle: "You relax, enjoy and make beautiful memories.",
    description: "Step into your celebration as an honored guest. Our stage masters and guest coordinators handle all transitions smoothly while you cherish every second.",
    image: "/images/owner/owner-21.jpg",
    tags: ["VIP Concierge", "Ceremony Transitions", "Unforgettable Memories"]
  }
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Royal Crystal Stage & Red Velvet Lounge",
    category: "weddings",
    categoryLabel: "Weddings",
    image: "/images/owner/owner-28.jpg",
    tag: "Walima / Reception Stage",
    description: "Grand wedding stage featuring an ornate crystal chandelier, deep ruby velvet sofa, architectural palm landscaping, and rich floral wall."
  },
  {
    id: 2,
    title: "Golden Lawn Banquet & Crystal Candelabras",
    category: "weddings",
    categoryLabel: "Weddings",
    image: "/images/owner/owner-21.jpg",
    tag: "Open-Air Wedding Banquet",
    description: "Illuminated nighttime wedding garden featuring gold royal chairs, crystal chandelier canopies, and cascading floral risers."
  },
  {
    id: 3,
    title: "Traditional Sangeet Garden & Floral Strings",
    category: "weddings",
    categoryLabel: "Weddings",
    image: "/images/owner/owner-26.jpg",
    tag: "Sangeet / Mehndi",
    description: "Ethnic outdoor setup featuring hanging rose & jasmine strands, mirror-work embroidered cushions, floral carpet, and bridal thaalis."
  },
  {
    id: 4,
    title: "Festive Mehndi Seating & Dreamcatcher Canopies",
    category: "weddings",
    categoryLabel: "Weddings",
    image: "/images/owner/owner-12.jpg",
    tag: "Mehndi Celebration",
    description: "Handcrafted white jaali daybeds, pink canopy drapery, sunflower runners, and suspended Pakistani folk dreamcatchers."
  },
  {
    id: 5,
    title: "Turquoise Chandeliers & Marigold Heritage Lounge",
    category: "weddings",
    categoryLabel: "Weddings",
    image: "/images/owner/owner-39.jpg",
    tag: "Mayun / Mehndi",
    description: "Vibrant ethnic ceiling with turquoise crystal chandeliers, yellow marigold garlands, and classic carved seating."
  },
  {
    id: 6,
    title: "Grand Mehndi Lawn & Diwan Court",
    category: "weddings",
    categoryLabel: "Weddings",
    image: "/images/owner/owner-34.jpg",
    tag: "Lawn Mehndi",
    description: "Expansive outdoor festival layout with yellow and magenta velvet diwans, tasseled canopies, and suspended lanterns."
  },
  {
    id: 7,
    title: "Executive Gala & Multi-Tier Expo Banquet",
    category: "corporate",
    categoryLabel: "Corporate",
    image: "/images/owner/owner-08.jpg",
    tag: "Corporate Gala",
    description: "Grand corporate dinner layout with structural truss lighting, executive ivory lounge, and round conference tables."
  },
  {
    id: 8,
    title: "Concert Stage, LED Screen & Sangeet Floor",
    category: "corporate",
    categoryLabel: "Corporate",
    image: "/images/owner/owner-13.jpg",
    tag: "Stage & LED Production",
    description: "Full-scale stage production with high-resolution digital LED wall, pro audio line-array, and ambient lighting truss."
  },
  {
    id: 9,
    title: "Candlelit Fine Dining with Event Arts Signature Cutlery",
    category: "private",
    categoryLabel: "Private",
    image: "/images/owner/owner-14.jpg",
    tag: "Private Dinner",
    description: "Intimate table setting with matte black candelabras, fresh red roses, gold charger plates, and Event Arts menus."
  },
  {
    id: 10,
    title: "Silver Chrome Laser-Cut Dining Setup",
    category: "decor",
    categoryLabel: "Décor",
    image: "/images/owner/owner-27.jpg",
    tag: "Furniture & Styling",
    description: "Polished silver chrome tables with matching laser-cut chairs and tall crystal floral arrangements."
  },
  {
    id: 11,
    title: "Gold & Black Velvet VIP Dining Enclosure",
    category: "decor",
    categoryLabel: "Décor",
    image: "/images/owner/owner-22.jpg",
    tag: "VIP Hospitality",
    description: "Luxury dining space with gold fan-back velvet chairs, floral risers, and an illuminated glass mirror walkway."
  },
  {
    id: 12,
    title: "Daytime Marigold & Pastel Floral Archway",
    category: "decor",
    categoryLabel: "Décor",
    image: "/images/owner/owner-11.jpg",
    tag: "Floral Architecture",
    description: "Outdoor romantic garden stage with pastel pink and white floral hedge, yellow marigold drops, and vintage seating."
  },
  {
    id: 13,
    title: "Royal Grand Entrance Walkway",
    category: "weddings",
    categoryLabel: "Weddings",
    image: "/images/owner/owner-03.jpg",
    tag: "Bridal Walkway",
    description: "Stately entrance pathway illuminated with crystal fairy canopies and flanked by architectural floral arrangements."
  },
  {
    id: 14,
    title: "Corporate Summit Auditorium Stage",
    category: "corporate",
    categoryLabel: "Corporate",
    image: "/images/owner/owner-04.jpg",
    tag: "Auditorium Setup",
    description: "Crisp corporate keynote presentation stage with blue ambient backlighting and podium presentation systems."
  },
  {
    id: 15,
    title: "Intimate Garden Lounge & Floating Lanterns",
    category: "private",
    categoryLabel: "Private",
    image: "/images/owner/owner-07.jpg",
    tag: "Private Gathering",
    description: "Cozy open-air private celebration with warm bistro lighting, custom low-height coffee tables, and velvet bolsters."
  },
  {
    id: 16,
    title: "Luxury Floral Canopy & Stage Arch",
    category: "decor",
    categoryLabel: "Décor",
    image: "/images/owner/owner-31.jpg",
    tag: "Floral Ceiling",
    description: "Dense hanging ceiling installation featuring thousand-stem fresh imported wisteria, roses, and gold wire pendants."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ayesha & Farhan",
    role: "Mehndi & Walima Clients • DHA Phase 8",
    rating: 5,
    quote: "Event Arts transformed our wedding into an absolute fairytale. From the vibrant Mehndi diwans to the majestic Walima crystal stage, their attention to detail was unmatched."
  },
  {
    id: 2,
    name: "Usman Tariq",
    role: "Corporate Event Director • Avari Towers Gala",
    rating: 5,
    quote: "The professionalism and technical precision was world-class. Our annual summit with over 400 attendees ran without a single hiccup. Best event team in Karachi."
  },
  {
    id: 3,
    name: "Sana Ahmed",
    role: "Private Celebration Client • Clifton",
    rating: 5,
    quote: "From the delicate floral arrangements to the candlelit dining setup, everything was magical. Event Arts handled everything so we could simply enjoy our daughter's milestone."
  }
];

export const FOUNDER_DATA = {
  eyebrow: "MEET THE FOUNDER",
  title: "The Vision Behind Event Arts",
  image: "/images/owner/owner-img.jpg",
  designation: "Founder & Creative Director",
  bio: "A passionate individual with a vision to create extraordinary experiences, the founder of Event Arts brings a deep understanding of the event industry and an unwavering commitment to excellence.",
  bulletPoints: [
    "Passion for creating meaningful and enduring experiences",
    "Why Event Arts was created — to redefine luxury event management in Karachi",
    "Our signature approach: uniting architectural precision with heartfelt hospitality"
  ],
  quote: "Every celebration tells a unique story. Our mission is to transform that story into an immersive, breathtaking reality.",
  ctaText: "Read Our Story"
};
