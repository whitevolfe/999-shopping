export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'electronics' | 'cosmetics';
  image: string;
  description: string;
  featured?: boolean;
}

export const products: Product[] = [
  // Electronics
  {
    id: 'e1',
    name: 'Wireless Headphones Pro',
    price: 12999,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    description: 'Premium noise-cancelling wireless headphones',
    featured: true
  },
  {
    id: 'e2',
    name: 'Smart Watch Ultra',
    price: 24999,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    description: 'Advanced fitness tracking and notifications',
    featured: true
  },
  {
    id: 'e3',
    name: 'Bluetooth Speaker',
    price: 8999,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80',
    description: 'Portable speaker with 360° sound'
  },
  {
    id: 'e4',
    name: 'USB-C Hub Pro',
    price: 4999,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80',
    description: '7-in-1 multiport adapter'
  },
  {
    id: 'e5',
    name: 'Wireless Mouse',
    price: 3499,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
    description: 'Ergonomic design with precision tracking'
  },
  {
    id: 'e6',
    name: 'Power Bank 20000mAh',
    price: 5999,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80',
    description: 'Fast charging portable charger'
  },
  
  // Cosmetics
  {
    id: 'c1',
    name: 'Luxury Face Cream',
    price: 4500,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1556229010-aa1e6baecf87?w=500&q=80',
    description: 'Anti-aging moisturizer with SPF',
    featured: true
  },
  {
    id: 'c2',
    name: 'Natural Serum Set',
    price: 6999,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80',
    description: 'Vitamin C & Hyaluronic Acid combo',
    featured: true
  },
  {
    id: 'c3',
    name: 'Matte Lipstick Collection',
    price: 2999,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&q=80',
    description: 'Long-lasting matte finish - 5 shades'
  },
  {
    id: 'c4',
    name: 'Eye Shadow Palette',
    price: 3999,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&q=80',
    description: '12 pigmented colors for every look'
  },
  {
    id: 'c5',
    name: 'Hair Care Bundle',
    price: 5499,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&q=80',
    description: 'Shampoo, conditioner & hair mask'
  },
  {
    id: 'c6',
    name: 'Perfume Collection',
    price: 8999,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80',
    description: 'Luxury fragrances - 3 bottles'
  }
];
