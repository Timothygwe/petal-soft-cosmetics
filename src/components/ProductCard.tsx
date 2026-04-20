import { Link } from "react-router-dom";
import { formatPrice, type Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="overflow-hidden bg-card">
        <img
          src={product.image}
          alt={product.name}
          width={800}
          height={1000}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 text-center">
        <p className="text-[10px] uppercase tracking-wider-2 text-muted-foreground">{product.category}</p>
        <h3 className="mt-1 font-serif text-lg text-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.tagline}</p>
        <p className="mt-2 text-sm text-primary">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
