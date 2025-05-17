export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  isNew?: boolean;
}

export interface BestSeller {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}