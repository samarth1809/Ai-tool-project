import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { StoreProvider, useStore } from "@/lib/store-context";
function Header() {
  const [open, setOpen] = useState(false); const { cartCount, wishlist } = useStore();
  const links = [{ to: "/shop" as const, label: "Shop" }, { to: "/search" as const, label: "Search" }];
  return <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
    <div className="site-container flex h-18 items-center justify-between">
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</Button>
      <nav className="hidden items-center gap-7 md:flex">{links.map((item) => <Link key={item.to} to={item.to} className="nav-link">{item.label}</Link>)}</nav>
      <Link to="/" className="brand absolute left-1/2 -translate-x-1/2" aria-label="RŌSEN home">RŌSEN</Link>
      <div className="flex items-center gap-1">
        <Button asChild variant="ghost" size="icon"><Link to="/wishlist" aria-label={`Wishlist, ${wishlist.length} items`}><Heart /><span className="counter">{wishlist.length}</span></Link></Button>
        <Button asChild variant="ghost" size="icon"><Link to="/cart" aria-label={`Cart, ${cartCount} items`}><ShoppingBag /><span className="counter">{cartCount}</span></Link></Button>
      </div>
    </div>
    {open && <nav className="site-container grid gap-1 border-t py-4 md:hidden"><Link to="/shop" onClick={() => setOpen(false)} className="mobile-nav">Shop</Link><Link to="/search" onClick={() => setOpen(false)} className="mobile-nav"><Search className="size-4" /> Search</Link></nav>}
  </header>;
}
function Footer() { return <footer className="mt-24 border-t bg-footer text-footer-foreground"><div className="site-container grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]"><div><p className="brand text-2xl">RŌSEN</p><p className="mt-3 max-w-xs font-display text-2xl text-footer-muted">Quietly beautiful things.</p></div><div><p className="footer-heading">Explore</p><div className="mt-4 grid gap-2 text-sm"><Link to="/shop">Shop all</Link><Link to="/search">Search</Link><Link to="/wishlist">Wishlist</Link></div></div><div><p className="footer-heading">Our promise</p><p className="mt-4 max-w-xs text-sm leading-6 text-footer-muted">Considered objects, natural materials, and enduring forms for slower, more thoughtful homes.</p></div></div><div className="border-t border-footer-border py-5 text-center text-xs text-footer-muted">RŌSEN · Thoughtfully selected for India</div></footer>; }
export function SiteShell({ children }: { children: ReactNode }) { return <StoreProvider><Header /><main>{children}</main><Footer /></StoreProvider>; }
