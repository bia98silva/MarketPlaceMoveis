import { Product, BestSeller } from '../types';

export const modernProducts: Product[] = [
  {
    id: '1',
    title: 'Poltrona Moderna',
    description: 'Poltrona confortável com design moderno e minimalista',
    price: 299.99,
    image: 'https://via.placeholder.com/150',
    isNew: true,
  },
  {
    id: '2',
    title: 'Mesa de Centro',
    description: 'Mesa de centro com tampo de vidro e estrutura metálica',
    price: 354.50,
    image: 'https://via.placeholder.com/150',
    isNew: false,
  },
  {
    id: '3',
    title: 'Sofá 3 Lugares',
    description: 'Sofá confortável com tecido premium e pés de madeira escura',
    price: 899.99,
    image: 'https://via.placeholder.com/150',
    isNew: true,
  },
  {
    id: '4',
    title: 'Luminária de Chão',
    description: 'Luminária articulada com acabamento metalizado',
    price: 199.99,
    image: 'https://via.placeholder.com/150',
    isNew: false,
  },
  {
    id: '5',
    title: 'Estante Modular',
    description: 'Estante modular com compartimentos ajustáveis',
    price: 459.90,
    image: 'https://via.placeholder.com/150',
    isNew: true,
  },
];

export const newProducts: Product[] = [
  {
    id: '6',
    title: 'Cadeira Ergonômica',
    description: 'Cadeira ergonômica com ajustes de altura e encosto',
    price: 454.69,
    image: 'https://via.placeholder.com/200',
  },
  {
    id: '7',
    title: 'Mesa de Jantar',
    description: 'Mesa de jantar extensível para até 8 pessoas',
    price: 799.99,
    image: 'https://via.placeholder.com/200',
  },
  {
    id: '8',
    title: 'Cama Box Queen',
    description: 'Cama box com base e colchão ortopédico',
    price: 1299.99,
    image: 'https://via.placeholder.com/200',
  },
  {
    id: '9',
    title: 'Guarda-roupa 6 Portas',
    description: 'Guarda-roupa espaçoso com espelho e gavetas',
    price: 1599.90,
    image: 'https://via.placeholder.com/200',
  },
];

export const bestSellers: BestSeller[] = [
  {
    id: '1',
    title: 'Zara Home Collection',
    subtitle: 'Get 25% OFF',
    image: 'https://via.placeholder.com/350x150',
  },
  {
    id: '2',
    title: 'Scandinavian Design',
    subtitle: 'Get 30% OFF',
    image: 'https://via.placeholder.com/350x150',
  },
  {
    id: '3',
    title: 'Minimalist Living',
    subtitle: 'Get 20% OFF',
    image: 'https://via.placeholder.com/350x150',
  },
];