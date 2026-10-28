export interface ProjectItem {
  id: string;
  src: string;
  title: string;
  category: 'Custom New Sofas' | 'Repair & Re-upholstery' | 'Bed & Wall Panels';
  catId: 'custom' | 'repair' | 'panels';
  description: string;
  location: string;
  highlight: string;
  specs: { label: string; value: string }[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'tan-leatherette-sectional',
    src: '/assets/aistudio/a7ac741c-5f03-4ba9-8614-ff1a9d317c64_e06ab3bd.jfif',
    title: 'Tan Leatherette L-Sectional',
    category: 'Custom New Sofas',
    catId: 'custom',
    description: 'Contemporary L-shaped lounge sectional with adjustable multi-position headrests and rich wood-paneled corner framing.',
    location: 'Jubilee Hills, Hyderabad',
    highlight: 'Adjustable Headrests & Sturdy Frame',
    specs: [
      { label: 'Upholstery', value: 'Commercial Grade PU Leatherette' },
      { label: 'Configuration', value: 'Left-Facing L-Sectional' },
      { label: 'Headrests', value: 'Multi-Angle Ratchet Mechanisms' },
    ],
  },
  {
    id: 'modular-corner-sage',
    src: '/assets/aistudio/fbed8f66-43f9-4194-91a4-cad5fd103082_900fb8e0.jfif',
    title: 'Sage Cyan Modular Corner Sectional',
    category: 'Custom New Sofas',
    catId: 'custom',
    description: 'Expansive family corner seating tailored with deep multi-density foam cushions and durable textured linen-blend fabric.',
    location: 'Gachibowli, Hyderabad',
    highlight: 'Deep Lounge Seating',
    specs: [
      { label: 'Upholstery', value: 'Textured Linen-Cotton Blend' },
      { label: 'Seating', value: '7-Seater Modular Corner' },
      { label: 'Cushions', value: 'High-Density 40-Density HR Foam' },
    ],
  },
  {
    id: 'royal-carved-suite',
    src: '/assets/aistudio/236821d7-e76a-465e-89b1-c51ad78acde8_b4bc6635.jfif',
    title: 'Royal Classical Carved Sofa Suite',
    category: 'Repair & Re-upholstery',
    catId: 'repair',
    description: 'Antique Teakwood carved frame restoration with silver-champagne metallic leafing, spring overhaul, and ice-blue velvet re-upholstery.',
    location: 'Banjara Hills, Hyderabad',
    highlight: 'Heritage Frame Restoration',
    specs: [
      { label: 'Frame', value: 'Antique Carved Solid Teakwood' },
      { label: 'Finish', value: 'Silver-Champagne Metallic Leaf' },
      { label: 'Fabric', value: 'Heavyweight Damask & Velvet' },
    ],
  },
  {
    id: 'royal-blue-living-suite',
    src: '/assets/aistudio/Gemini_Generated_Image_qvu7qqqvu7qqqvu7_37c72443.png',
    title: 'Royal Teal-Blue Chesterfield Lounge Suite',
    category: 'Custom New Sofas',
    catId: 'custom',
    description: 'Full formal living room set with rolled-arm 3-seaters, matching padded ottomans, and walnut carved coffee table.',
    location: 'Somajiguda, Hyderabad',
    highlight: 'Classic Rolled-Arm Styling',
    specs: [
      { label: 'Upholstery', value: 'Royal Blue Microfiber Velvet' },
      { label: 'Includes', value: '3-Seater, 2-Seater & 2 Ottomans' },
      { label: 'Woodwork', value: 'Polished Walnut Turned Legs' },
    ],
  },
  {
    id: 'emerald-curved-sectional',
    src: '/assets/aistudio/701eecd9-d95a-4aa2-a089-f7fd992661d3_2149956e.jfif',
    title: 'Emerald Velvet Curved Modern Sectional',
    category: 'Custom New Sofas',
    catId: 'custom',
    description: 'Minimalist continuous curved backrest in emerald green velvet with matching cylindrical bolster cushions and black metal legs.',
    location: 'Hitec City, Hyderabad',
    highlight: 'Seamless Curved Architecture',
    specs: [
      { label: 'Upholstery', value: 'Jewel-Tone Emerald Velvet' },
      { label: 'Legs', value: 'Matte Black Powder-Coated Steel' },
      { label: 'Pillows', value: 'Matching Cylinder Bolsters' },
    ],
  },
  {
    id: 'emerald-barrel-suite',
    src: '/assets/aistudio/b9f00a57-d9b7-4c90-9107-7677a57cc071_abe28a00.jfif',
    title: 'Curved Emerald Sofa with Barrel Armchairs',
    category: 'Custom New Sofas',
    catId: 'custom',
    description: 'Curvilinear 3-seater sofa paired with dual tub-barrel armchairs, gold stiletto legs, and round bolster cushions.',
    location: 'Madhapur, Hyderabad',
    highlight: 'Coordinated Living Ensemble',
    specs: [
      { label: 'Upholstery', value: 'Plush Forest Velvet' },
      { label: 'Ensemble', value: 'Curved 3-Seater + 2 Barrel Chairs' },
      { label: 'Hardware', value: 'Polished Gold Metallic Legs' },
    ],
  },
  {
    id: 'olive-sectional-ottoman',
    src: '/assets/aistudio/b09ccf15-47a0-4e9b-b1e1-a0920a95a771_288e746c.jfif',
    title: 'Olive Suede Modular Sectional with Ottoman',
    category: 'Custom New Sofas',
    catId: 'custom',
    description: 'Extra-long 5-seater modular lounge with floating movable ottoman and contrast rust velvet geometric accent cushions.',
    location: 'Kondapur, Hyderabad',
    highlight: 'Modular Configuration',
    specs: [
      { label: 'Upholstery', value: 'Heavyweight Olive Suede Fabric' },
      { label: 'Dimensions', value: '11ft Modular Linear Footprint' },
      { label: 'Ottoman', value: 'Movable Storage / Chaise Ottoman' },
    ],
  },
  {
    id: 'tufted-wingback-chairs',
    src: '/assets/aistudio/9321e5a2-6c51-4c65-98f7-9ee913f9c49c_651ac98e.jfif',
    title: 'Diamond Tufted Wingback Armchairs & Stools',
    category: 'Repair & Re-upholstery',
    catId: 'repair',
    description: 'High-back ergonomic reading armchairs with deep diamond button tufting and matching circular footrest stools.',
    location: 'Basheer Bagh Studio',
    highlight: 'Classic Wingback Craftsmanship',
    specs: [
      { label: 'Tufting', value: 'Hand-Pleated Diamond Buttons' },
      { label: 'Pair', value: 'Twin Wingbacks + 2 Round Stools' },
      { label: 'Wood Legs', value: 'Solid Teak Stained Tapered Legs' },
    ],
  },
  {
    id: 'botanical-dual-sofas',
    src: '/assets/aistudio/3d56dd61-23bf-4bd7-80a3-6c9e17c3bd2e_1a18ab7f.jfif',
    title: 'Two-Tone Sage & Almond Contemporary Set',
    category: 'Repair & Re-upholstery',
    catId: 'repair',
    description: 'Clean dual-sofa conversation layout in contrasting two-tone upholstery with matching botanical tropical toss cushions.',
    location: 'Avanti Nagar, Hyderabad',
    highlight: 'Two-Tone Color Blocking',
    specs: [
      { label: 'Fabric', value: 'Dual-Tone Cotton Linen' },
      { label: 'Set', value: 'Facing 3-Seater Sofas' },
      { label: 'Accents', value: 'Tropical Botanical Leaf Cushions' },
    ],
  },
  {
    id: 'terracotta-curved-suite',
    src: '/assets/aistudio/b7115d4b-837f-4bbc-b1bf-776bd8736c90_6c04a049.jfif',
    title: 'Curved Terracotta Velvet Living Room Suite',
    category: 'Custom New Sofas',
    catId: 'custom',
    description: 'Curved diamond-quilted terracotta sofas with fluted brass accents, marble coffee tables, and matching teal wing armchairs.',
    location: 'Basheer Bagh Client Residence',
    highlight: 'Bespoke Luxury Signature',
    specs: [
      { label: 'Upholstery', value: 'Italian Microfiber Velvet' },
      { label: 'Trims', value: 'Brushed Brass Fluted Channels' },
      { label: 'Armchairs', value: 'Twin Sculptural Teal Wing Chairs' },
    ],
  },
  {
    id: 'biscuit-tufted-sectional',
    src: '/assets/aistudio/40e23448-2079-4a24-b486-deecc0d2c916_cb3a0b54.jfif',
    title: 'Grey Biscuit-Tufted Modular Lounge Sectional',
    category: 'Custom New Sofas',
    catId: 'custom',
    description: 'Low-profile architectural grid tufting with multi-density high-resilience foam cushioning and corner lounge layout.',
    location: 'Avanti Nagar, Hyderabad',
    highlight: 'Cloud Grid Comfort',
    specs: [
      { label: 'Style', value: 'Modular Biscuit Tufting' },
      { label: 'Foam', value: 'Multi-Density 45D HR Foam' },
      { label: 'Layout', value: 'Custom L-Shape Sectional' },
    ],
  },
  {
    id: 'fluted-wall-panel',
    src: '/assets/aistudio/a7078ca0-b580-48a8-9d21-1b3fdcb3f058_8eb7dee7.jfif',
    title: 'Floor-to-Ceiling Fluted Acoustic Headboard Wall',
    category: 'Bed & Wall Panels',
    catId: 'panels',
    description: 'Architectural vertical fluted wall paneling with integrated indirect halo illumination and floating bed platform.',
    location: 'Master Bedroom Suite, Hyderabad',
    highlight: 'Floor-to-Ceiling Architecture',
    specs: [
      { label: 'Dimensions', value: 'Full Floor-to-Ceiling Height' },
      { label: 'Lighting', value: 'Integrated Warm Halo LEDs' },
      { label: 'Acoustics', value: 'Sound-Softening High-Density Padding' },
    ],
  },
];

export function getWhatsAppEstimateLink(designTitle: string): string {
  const text = encodeURIComponent(
    `Hi Delux Sofa Liners, I saw the "${designTitle}" on your website and would like a free estimate and measurement in Hyderabad.`
  );
  return `https://wa.me/919703701756?text=${text}`;
}
