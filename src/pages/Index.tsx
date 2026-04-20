import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import hero from "@/assets/hero-cosmetics.jpg";

const Index = () => {
  const featured = products.slice(0, 4);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative">
        <img
          src={hero}
          alt="Коллекция французской косметики"
          width={1600}
          height={1200}
          className="h-[78vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />
        <div className="container absolute inset-0 flex items-center">
          <div className="max-w-lg animate-fade-up">
            <p className="text-[11px] uppercase tracking-wider-2 text-primary">Новая коллекция</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight text-foreground md:text-6xl">
              Ритуал красоты по-французски
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Безупречные формулы, разработанные в Париже. Концентрированный уход для естественного сияния кожи.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-block border border-primary px-10 py-3 text-[11px] uppercase tracking-wider-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Открыть каталог
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-20">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-wider-2 text-muted-foreground">Категории</p>
          <h2 className="mt-2 font-serif text-4xl text-foreground">Найдите свой ритуал</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {["Сыворотки", "Кремы", "Тоники", "Очищение"].map((cat) => (
            <Link
              key={cat}
              to={`/shop?cat=${encodeURIComponent(cat)}`}
              className="group flex h-40 items-center justify-center border border-border bg-card text-center transition-colors hover:border-primary"
            >
              <span className="font-serif text-2xl text-foreground transition-colors group-hover:text-primary">
                {cat}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="container py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-wider-2 text-muted-foreground">Избранное</p>
            <h2 className="mt-2 font-serif text-4xl text-foreground">Бестселлеры сезона</h2>
          </div>
          <Link to="/shop" className="hidden text-[11px] uppercase tracking-wider-2 text-primary md:block">
            Все товары →
          </Link>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-card py-20">
        <div className="container grid gap-10 text-center md:grid-cols-3">
          {[
            { t: "Парижское качество", d: "Формулы, созданные французскими лабораториями" },
            { t: "Чистый состав", d: "Без парабенов, сульфатов и силиконов" },
            { t: "Бесплатная доставка", d: "При заказе от 10 000 ₽ по всей России" },
          ].map((v) => (
            <div key={v.t}>
              <h3 className="font-serif text-2xl text-primary">{v.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
