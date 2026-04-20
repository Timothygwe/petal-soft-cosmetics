import serum from "@/assets/product-serum.jpg";
import cream from "@/assets/product-cream.jpg";
import toner from "@/assets/product-toner.jpg";
import cleanser from "@/assets/product-cleanser.jpg";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  category: "Сыворотки" | "Кремы" | "Тоники" | "Очищение";
  price: number;
  image: string;
  description: string;
  volume: string;
};

export const products: Product[] = [
  {
    id: "serum-vg",
    name: "Sérum Régénérant",
    tagline: "Восстанавливающая сыворотка",
    category: "Сыворотки",
    price: 14800,
    image: serum,
    description:
      "Концентрированная сыворотка для глубокого восстановления и обновления кожи. Активные пептиды и растительные экстракты возвращают сияние и упругость.",
    volume: "30 мл",
  },
  {
    id: "cream-nutri",
    name: "Crème Nutri-Riche",
    tagline: "Питательный крем",
    category: "Кремы",
    price: 12400,
    image: cream,
    description:
      "Насыщенный крем для интенсивного питания сухой и обезвоженной кожи. Создаёт защитный барьер и восстанавливает мягкость.",
    volume: "50 мл",
  },
  {
    id: "toner-equilibre",
    name: "Lotion P50 Équilibre",
    tagline: "Балансирующий тоник",
    category: "Тоники",
    price: 9800,
    image: toner,
    description:
      "Легендарный тоник для мягкой эксфолиации и восстановления pH-баланса. Подготавливает кожу к последующему уходу.",
    volume: "150 мл",
  },
  {
    id: "cleanser-doux",
    name: "Lait U Doux",
    tagline: "Деликатное молочко",
    category: "Очищение",
    price: 7600,
    image: cleanser,
    description:
      "Мягкое очищающее молочко, бережно удаляющее макияж и загрязнения, не нарушая гидролипидную мантию кожи.",
    volume: "200 мл",
  },
  {
    id: "serum-eclat",
    name: "Sérum Éclat",
    tagline: "Сыворотка сияния",
    category: "Сыворотки",
    price: 16200,
    image: serum,
    description: "Витаминный комплекс для возвращения здорового сияния тусклой коже.",
    volume: "30 мл",
  },
  {
    id: "cream-jour",
    name: "Crème Jour Légère",
    tagline: "Лёгкий дневной крем",
    category: "Кремы",
    price: 11200,
    image: cream,
    description: "Невесомая текстура для ежедневного увлажнения нормальной и комбинированной кожи.",
    volume: "50 мл",
  },
];

export const formatPrice = (rub: number) =>
  new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 }).format(rub);
