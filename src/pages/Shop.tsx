import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = ["Все", "Сыворотки", "Кремы", "Тоники", "Очищение"] as const;

const Shop = () => {
  const [params, setParams] = useSearchParams();
  const active = params.get("cat") ?? "Все";

  const filtered = useMemo(
    () => (active === "Все" ? products : products.filter((p) => p.category === active)),
    [active],
  );

  return (
    <Layout>
      <section className="container py-16">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-wider-2 text-muted-foreground">Каталог</p>
          <h1 className="mt-2 font-serif text-5xl text-foreground">Все продукты</h1>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => {
            const isActive = c === active;
            return (
              <button
                key={c}
                onClick={() => (c === "Все" ? setParams({}) : setParams({ cat: c }))}
                className={`border px-5 py-2 text-[11px] uppercase tracking-wider-2 transition-colors ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-foreground/70 hover:border-primary hover:text-primary"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
