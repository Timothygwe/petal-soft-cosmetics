import { Link } from "react-router-dom";
import { Search, ShoppingBag, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { NavLink } from "@/components/NavLink";

const Header = () => {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex flex-1 items-center gap-6">
          <button aria-label="Поиск" className="text-foreground/70 transition-colors hover:text-primary">
            <Search className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>

        <Link to="/" className="flex flex-col items-center text-center">
          <span className="font-serif text-2xl tracking-wide text-primary">MAISON</span>
          <span className="font-sans text-[10px] uppercase tracking-wider-2 text-muted-foreground">
            Cosmétique · Paris
          </span>
        </Link>

        <div className="flex flex-1 items-center justify-end gap-5">
          <button aria-label="Аккаунт" className="hidden text-foreground/70 transition-colors hover:text-primary sm:block">
            <User className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <Link to="/cart" aria-label="Корзина" className="relative text-foreground/70 transition-colors hover:text-primary">
            <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>

      <nav className="border-t border-border/60">
        <ul className="container flex items-center justify-center gap-8 py-3 text-[11px] uppercase tracking-wider-2">
          {[
            { to: "/", label: "Главная" },
            { to: "/shop", label: "Каталог" },
            { to: "/shop?cat=Сыворотки", label: "Сыворотки" },
            { to: "/shop?cat=Кремы", label: "Кремы" },
            { to: "/shop?cat=Тоники", label: "Тоники" },
            { to: "/shop?cat=Очищение", label: "Очищение" },
          ].map((l) => (
            <li key={l.label}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className="text-foreground/60 transition-colors hover:text-primary"
                activeClassName="text-primary"
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
