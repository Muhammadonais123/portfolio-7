
export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export enum Category {
  ALL = 'All',
  ELECTRONICS = 'Electronics',
  FASHION = 'Fashion',
  HOME = 'Home',
  BEAUTY = 'Beauty'
}
