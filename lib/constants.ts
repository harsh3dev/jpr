import type { Service, PropertyCarePlan, ContactInfo, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Property Care', href: '/services' },
  { label: 'Snow Removal', href: '/services#snow' },
  { label: 'Garden Care', href: '/services#garden' },
  { label: 'Junk Removal', href: '/services#junk' },
  { label: 'Machinery', href: '/machinery' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'snow-removal',
    title: 'Snow Removal',
    description: 'Professional snow clearing and deicing to keep your property safe all winter long.',
    icon: '❄️',
    features: ['Snow Plowing', 'Deicing', 'Sidewalk Cleaning', 'Salting'],
    category: 'snow',
  },
  {
    id: 'garden-care',
    title: 'Garden Care',
    description: 'Complete lawn and garden maintenance to keep your property lush and beautiful.',
    icon: '🌿',
    features: ['Lawn Cutting & Trimming', 'Edging', 'Fertilizer Treatment', 'Fall Leaf Cleanup'],
    category: 'garden',
  },
  {
    id: 'junk-removal',
    title: 'Junk Removal',
    description: 'Efficient property cleanup and waste removal so your space stays clean and clear.',
    icon: '🚛',
    features: ['Debris Removal', 'Property Cleanup', 'Waste Disposal', 'Haul Away'],
    category: 'junk',
  },
];

export const PROPERTY_CARE_PLANS: PropertyCarePlan[] = [
  {
    id: 'winter-plan',
    title: '4 Month Winter Plan',
    duration: '4-month',
    services: [
      'Snow Removal',
      'Deicing',
      'Sidewalk Cleaning',
      'Salting',
      'Snow Plowing',
    ],
    featured: false,
  },
  {
    id: 'garden-plan',
    title: '8 Month Garden Care',
    duration: '8-month',
    services: [
      'Weekly Lawn Cutting and Trimming',
      'Edging',
      'Fertilizer and Weed Treatment',
      'Over Seeding',
      'Top Dressing',
      'Fall Leaf Cleanup',
    ],
    featured: false,
  },
  {
    id: 'full-care-plan',
    title: '12 Month Full Property Care',
    duration: '12-month',
    services: [
      'Snow Removal',
      'Deicing',
      'Sidewalk Cleaning',
      'Salting',
      'Plowing',
      'Weekly Lawn Cutting and Trimming',
      'Edging',
      'Fertilizer and Weed Treatment',
      'Over Seeding',
      'Top Dressing',
      'Fall Leaf Cleanup',
      'Tree Inspection and Care',
      'Soil Enrichment',
      'Additional Planting Available',
    ],
    featured: true,
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: 'teamjpr.ca@gmail.com',
  phones: ['+1 (905) 351-8545', '+1 (905) 932-5008'],
};

export const TOOLS = {
  snow: ['Shovel', 'Snow Blower', 'Plow', 'Salt Spreader'],
  garden: ['Lawn Mower', 'Hedge Trimmer', 'Leaf Blower', 'Rake', 'Pruning Shears'],
};

export const MACHINERY_IMAGES = [
  { src: '/images/machinery/machine-1.jpg', alt: 'Professional machinery' },
  { src: '/images/machinery/machine-2.jpg', alt: 'Snow removal equipment' },
  { src: '/images/machinery/machine-3.jpg', alt: 'Landscaping tools' },
  { src: '/images/machinery/machine-4.jpg', alt: 'Garden care machinery' },
  { src: '/images/machinery/machine-5.jpg', alt: 'Property maintenance equipment' },
  { src: '/images/machinery/machine-6.jpg', alt: 'Commercial grade tools' },
  { src: '/images/machinery/machine-7.jpg', alt: 'Heavy duty equipment' },
  { src: '/images/machinery/machine-8.jpg', alt: 'Lawn care machinery' },
  { src: '/images/machinery/machine-9.jpg', alt: 'Professional tools' },
];

export const GALLERY_IMAGES = [
  { src: '/images/gallery-lawn.png', alt: 'Beautifully maintained lawn' },
  { src: '/images/garden-care.png', alt: 'Garden care in progress' },
  { src: '/images/snow-removal.png', alt: 'Snow removal service' },
  { src: '/images/project-showcase.png', alt: 'Professional landscaping' },
  { src: '/images/about-team.png', alt: 'Property care result' },
  { src: '/images/gallery-lawn.png', alt: 'Lawn trimming service' },
  { src: '/images/garden-care.png', alt: 'Garden maintenance' },
  { src: '/images/gallery-cleanup.png', alt: 'Seasonal cleanup' },
  { src: '/images/project-showcase.png', alt: 'Full property care' },
];
