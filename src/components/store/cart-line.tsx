import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { formatPrice, type Product } from "@/lib/products";
import { useStore } from "@/lib/store-context";
export function CartLine({ product, quantity, compact = false }: { product: Product; quantity: number; compact?: boolean }) {
  const { setQuantity, removeFromCart } = useStore();
  return <div className={`grid min-w-0 gap-4 border-b py-5 ${compact ? "grid-cols-[4.5rem_1fr]" : "grid-cols-[6rem_1fr] sm:grid-cols-[8rem_1fr_auto]"}`}>
    <Link to="/product/$productId" params={{ productId: product.id }}><img src={product.image} alt={product.name} width={512} height={512} loading="lazy" className="aspect-square w-full object-cover" /></Link>
    <div className="min-w-0"><Link to="/product/$productId" params={{ productId: product.id }} className="font-display text-lg leading-tight">{product.name}</Link><p className="mt-1 text-xs text-muted-foreground">Option: {product.option}</p><p className="mt-2 text-sm font-medium">{formatPrice(product.price)}</p>{!compact && <div className="mt-4 flex items-center gap-1"><Button variant="outline" size="icon" onClick={() => setQuantity(product.id, quantity - 1)} aria-label={`Decrease ${product.name} quantity`}><Minus /></Button><span className="grid h-9 w-10 place-items-center text-sm" aria-label={`Quantity ${quantity}`}>{quantity}</span><Button variant="outline" size="icon" onClick={() => setQuantity(product.id, quantity + 1)} aria-label={`Increase ${product.name} quantity`}><Plus /></Button><Button variant="ghost" size="icon" onClick={() => removeFromCart(product.id)} aria-label={`Remove ${product.name}`}><Trash2 /></Button></div>}</div>
    {compact && <p className="col-start-2 text-xs text-muted-foreground">Quantity: {quantity}</p>}
    {!compact && <p className="col-span-2 text-right text-sm font-medium sm:col-span-1">{formatPrice(product.price * quantity)}</p>}
  </div>;
}
