export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  // Футболки
  {
    id: 1,
    name: "Классическая футболка с логотипом",
    price: 1299,
    description: "Удобная хлопковая футболка с авторским дизайном",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    category: "футболки",
  },
  {
    id: 2,
    name: "Оверсайз футболка",
    price: 1599,
    description: "Стильная oversize футболка из качественного хлопка",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    category: "футболки",
  },

  // Кепки
  {
    id: 3,
    name: "Снэпбэк с вышивкой",
    price: 899,
    description: "Классическая кепка с качественной вышивкой логотипа",
    image:
      "https://images.unsplash.com/photo-1588117472013-59bb13edafec?w=400&h=400&fit=crop",
    category: "кепки",
  },
  {
    id: 4,
    name: "Бейсболка черная",
    price: 799,
    description: "Универсальная черная бейсболка на каждый день",
    image:
      "https://images.unsplash.com/photo-1575428652377-a22d0b526e8e?w=400&h=400&fit=crop",
    category: "кепки",
  },

  // Стикеры
  {
    id: 5,
    name: "Набор стикеров",
    price: 299,
    description: "Коллекция из 10 водостойких стикеров",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category: "стикеры",
  },

  // Кружки
  {
    id: 6,
    name: "Керамическая кружка",
    price: 699,
    description: "Качественная керамическая кружка 350 мл",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop",
    category: "кружки",
  },

  // Значки
  {
    id: 7,
    name: "Металлический значок",
    price: 199,
    description: "Эмалированный значок с авторским дизайном",
    image:
      "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?w=400&h=400&fit=crop",
    category: "значки",
  },

  // Блокноты
  {
    id: 8,
    name: "Дизайнерский блокнот",
    price: 599,
    description: "А5 блокнот в твердой обложке, 120 страниц",
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=400&fit=crop",
    category: "блокноты",
  },

  // Шопперы
  {
    id: 9,
    name: "Экосумка-шоппер",
    price: 499,
    description: "Плотная хлопковая сумка с длинными ручками",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    category: "шопперы",
  },
];

export const categories = [
  "все",
  "футболки",
  "кепки",
  "стикеры",
  "кружки",
  "значки",
  "блокноты",
  "шопперы",
];
