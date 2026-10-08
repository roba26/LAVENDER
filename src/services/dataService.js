import women from '../images/women.png';
import men from '../images/men.jpg';
import luxury from '../images/vip.jpg';
import bestsellers from '../images/best sala.jpg';


import LavenderBloom from '../images/products/Lavender Bloom.png';
import rosevelvet from '../images/products/rose velvet.png';
import MidnightCedar from '../images/products/Midnight Cedar.png';
import OceanDrift from '../images/products/Ocean Drift.png';
import RoyalOud from '../images/products/Royal Oud.png';
import GoldEssence from '../images/products/Gold Essence.png';
import PureVanilla from '../images/products/Pure Vanilla.png';
import LavenderDreams from '../images/products/Lavender Dreams.png';

const categories = [
  { id: 1, title: 'Women', slug: 'women', image: women },
  { id: 2, title: 'Men', slug: 'men', image: men },
  { id: 3, title: 'Luxury', slug: 'luxury', image: luxury },
  { id: 4, title: 'Best Sellers', slug: 'best-sellers', image: bestsellers },
];

const products = [
  { id: 1, title: 'Lavender Bloom', category: 'Women', price: 59, size: '100 ml', image: LavenderBloom, description: 'A soft floral fragrance with lavender, jasmine and white musk. Light, elegant and perfect for every day.' },
  { id: 2, title: 'Rose Velvet', category: 'Women', price: 72, size: '75 ml', image: rosevelvet, description: 'Rich damask rose blended with vanilla and amber for a warm, romantic trail.' },
  { id: 3, title: 'Midnight Cedar', category: 'Men', price: 64, size: '100 ml', image: MidnightCedar, description: 'Deep cedarwood and bergamot with a smoky leather base. Confident and masculine.' },
  { id: 4, title: 'Ocean Drift', category: 'Men', price: 49, size: '100 ml', image: OceanDrift, description: 'A fresh aquatic scent with citrus top notes and a clean woody finish.' },
  { id: 5, title: 'Royal Oud', category: 'Luxury', price: 149, size: '50 ml', image: RoyalOud, description: 'Precious oud, saffron and amber in an unforgettable luxury blend.' },
  { id: 6, title: 'Gold Essence', category: 'Luxury', price: 189, size: '50 ml', image: GoldEssence, description: 'An opulent composition of sandalwood, honey and rare spices, presented in a collector bottle.' },
  { id: 7, title: 'Pure Vanilla', category: 'Best Sellers', price: 45, size: '100 ml', image: PureVanilla, description: 'Our most loved scent: creamy vanilla, tonka bean and a touch of caramel.' },
    { id: 8, title: 'Lavender Dreams', category: 'Best Sellers', price: 55, size: '100 ml', image:LavenderDreams, description: 'The signature Lavender fragrance, calming and fresh with a soft woody base.' },

];

// بترجّع Promise عشان تشبه جلب البيانات من API، ولما يجهز الباك بس بتغيّري الداخل
export const getCategories = () => Promise.resolve(categories);

export const getProducts = (category = 'All') =>
  Promise.resolve(
    category === 'All' ? products : products.filter((p) => p.category === category)
  );

export const getProductById = (id) =>
  Promise.resolve(products.find((p) => p.id === Number(id)) || null);