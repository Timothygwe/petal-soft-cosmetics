import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { Minus, Plus, X } from "lucide-react";

const Cart = () => {
  const { items, setQty, remove, total, clear } = useCart();

  return (
    <Layout>
      <section className="container py-16">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-wider-2 text-muted-foreground">Корзина</p>
          <h1 className="mt-2 font-serif text-5xl text-foreground">Ваш заказ</h1>
        </div>

        {items.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">Корзина пуста.</p>
            <Link
              to="/shop"
              className="mt-6 inline-block border border-primary px-10 py-3 text-[11px] uppercase tracking-wider-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              К каталогу
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_360px]">
            <div className="divide-y divide-border border-y border-border">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-6 py-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-32 w-24 object-cover"
                    loading="lazy"
                  />
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider-2 text-muted-foreground">
                        {product.category}
                      </p>
                      <h3 className="font-serif text-xl">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.volume}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() => setQty(product.id, quantity - 1)}
                          className="px-3 py-2 hover:text-primary"
                          aria-label="Уменьшить"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-4 text-sm">{quantity}</span>
                        <button
                          onClick={() => setQty(product.id, quantity + 1)}
                          className="px-3 py-2 hover:text-primary"
                          aria-label="Увеличить"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="text-primary">{formatPrice(product.price * quantity)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => remove(product.id)}
                    className="self-start text-muted-foreground hover:text-primary"
                    aria-label="Удалить"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            <aside className="h-fit border border-border bg-card p-8">
              <h2 className="font-serif text-2xl">Итого</h2>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Подытог</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Доставка</span>
                  <span>{total >= 10000 ? "Бесплатно" : formatPrice(500)}</span>
                </div>
              </div>
              <div className="mt-6 flex justify-between border-t border-border pt-6 text-lg">
                <span>К оплате</span>
                <span className="text-primary">{formatPrice(total + (total >= 10000 ? 0 : 500))}</span>
              </div>
              <button
                onClick={() => {
                  clear();
                  alert("Спасибо за заказ! Это демо-магазин.");
                }}
                className="mt-8 w-full bg-primary py-4 text-[11px] uppercase tracking-wider-2 text-primary-foreground transition-opacity hover:opacity-90"
              >
                Оформить заказ
              </button>
            </aside>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Cart;
