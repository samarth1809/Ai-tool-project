import { Heart } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { formatPrice, type Product } from "@/lib/products";
import { useStore } from "@/lib/store-context";
export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const { toggleWishlist, isWishlisted } = useStore();
  const wished = isWishlisted(product.id);
  return <article className="group min-w-0">
    <div className="relative overflow-hidden bg-muted">
      <Link to="/product/$productId" params={{ productId: product.id }} aria-label={`View ${product.name}`}>
        <img src={product.image} alt={product.name} width={512} height={512} loading={priority ? "eager" : "lazy"} className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
      </Link>
      <Button type="button" size="icon" variant="soft" onClick={() => toggleWishlist(product.id)} aria-label={wished ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`} className="absolute right-3 top-3">
        <Heart className={wished ? "fill-current" : ""} />
      </Button>
    </div>
    <div className="pt-4">
      <div className="flex items-start justify-between gap-3">
        <Link to="/product/$productId" params={{ productId: product.id }} className="font-display text-lg leading-tight hover:text-primary">{product.name}</Link>
        <p className="shrink-0 text-sm font-medium">{formatPrice(product.price)}</p>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">{product.option}</p>
    </div>
  </article>;
}
