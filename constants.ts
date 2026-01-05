
import { Product, Category } from './types';

const CATEGORIES = [Category.ELECTRONICS, Category.FASHION, Category.HOME, Category.BEAUTY];

const TITLES: Record<Category, string[]> = {
  [Category.ELECTRONICS]: ['Pro Headphones', 'Smart Watch X', 'Ultra Phone', 'Bluetooth Speaker', 'Laptop Pro', 'VR Headset'],
  [Category.FASHION]: ['Summer Dress', 'Denim Jacket', 'Silk Scarf', 'Running Shoes', 'Designer Watch', 'Cotton Tee'],
  [Category.HOME]: ['Cozy Sofa', 'Kitchen Mixer', 'Bedding Set', 'Floor Lamp', 'Air Purifier', 'Smart Lock'],
  [Category.BEAUTY]: ['Face Serum', 'Matte Lipstick', 'Hair Oil', 'Moisturizer', 'Floral Perfume', 'Eye Palette'],
  [Category.ALL]: []
};

export const generateProducts = (count: number): Product[] => {
  const products: Product[] = [];
  for (let i = 1; i <= count; i++) {
    const category = CATEGORIES[i % CATEGORIES.length];
    const categoryTitles = TITLES[category];
    const title = `${categoryTitles[i % categoryTitles.length]} ${Math.ceil(i / 10)}`;
    
    products.push({
      id: i,
      title,
      category,
      price: Math.floor(Math.random() * 500) + 10,
      image: `https://picsum.photos/seed/${i + 100}/400/500`,
      description: `This is a premium product from our ${category} collection, designed for high quality and style.`
    });
  }
  return products;
};
