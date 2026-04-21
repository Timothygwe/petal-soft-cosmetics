import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { formatPrice, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { add } = useCart();

  if (!product) {
    return (
      <Layout>
        <div className="container py-32 text-center">
          <h1 className="font-serif text-3xl">Товар не найден</h1>
          <Link to="/shop" className="mt-6 inline-block text-primary">
            Вернуться в каталог
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container grid gap-12 py-16 md:grid-cols-2">
        <div className="bg-card">
          <img
            src={product.image}
            alt={product.name}
            width={800}
            height={1000}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-[11px] uppercase tracking-wider-2 text-muted-foreground">{product.category}</p>
          <h1 className="mt-3 font-serif text-5xl text-foreground">{product.name}</h1>
          <p className="mt-2 font-serif text-xl italic text-muted-foreground">{product.tagline}</p>
          <p className="mt-6 text-2xl text-primary">{formatPrice(product.price)}</p>
          <p className="mt-1 text-sm text-muted-foreground">{product.volume}</p>

          <p className="mt-8 text-base leading-relaxed text-foreground/80">{product.description}</p>

          <button
            onClick={() => {
              add(product);
              toast.success(`${product.name} добавлен в корзину`);
            }}
            className="mt-10 border border-primary bg-primary px-10 py-4 text-[11px] uppercase tracking-wider-2 text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
          >
            Добавить в корзину
          </button>

          <div className="mt-10 space-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
            <p>· Бесплатная доставка от 10 000 ₽</p>
            <p>· Возврат в течение 14 дней</p>
            <p>· Образцы в подарок к каждому заказу</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPage;
