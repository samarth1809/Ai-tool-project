import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "@/lib/products";

export type CartItem = { productId: string; quantity: number };
type StoreContextValue = {
  cart: CartItem[]; wishlist: string[]; cartCount: number;
  addToCart: (id: string, quantity?: number) => void; removeFromCart: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void; toggleWishlist: (id: string) => void;
  isWishlisted: (id: string) => boolean; clearCart: () => void;
};
const StoreContext = createContext<StoreContextValue | undefined>(undefined);
const safeRead = <T,>(key: string, fallback: T): T => {
  if (typeof window === "undefined") return fallback;
  try { const parsed: unknown = JSON.parse(window.localStorage.getItem(key) ?? "null"); return parsed === null ? fallback : parsed as T; } catch { return fallback; }
};
export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  useEffect(() => { setCart(safeRead<CartItem[]>("rosen-cart", [])); setWishlist(safeRead<string[]>("rosen-wishlist", [])); setReady(true); }, []);
  useEffect(() => { if (ready) window.localStorage.setItem("rosen-cart", JSON.stringify(cart)); }, [cart, ready]);
  useEffect(() => { if (ready) window.localStorage.setItem("rosen-wishlist", JSON.stringify(wishlist)); }, [wishlist, ready]);
  const value = useMemo<StoreContextValue>(() => ({
    cart, wishlist, cartCount: cart.reduce((total, item) => total + item.quantity, 0),
    addToCart: (id, quantity = 1) => setCart((current) => current.some((item) => item.productId === id) ? current.map((item) => item.productId === id ? { ...item, quantity: item.quantity + quantity } : item) : [...current, { productId: id, quantity }]),
    removeFromCart: (id) => setCart((current) => current.filter((item) => item.productId !== id)),
    setQuantity: (id, quantity) => setCart((current) => quantity < 1 ? current.filter((item) => item.productId !== id) : current.map((item) => item.productId === id ? { ...item, quantity } : item)),
    toggleWishlist: (id) => setWishlist((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]),
    isWishlisted: (id) => wishlist.includes(id), clearCart: () => setCart([]),
  }), [cart, wishlist]);
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
export function useStore() { const value = useContext(StoreContext); if (!value) throw new Error("useStore must be used within StoreProvider"); return value; }
export type OrderItem = { product: Product; quantity: number };
