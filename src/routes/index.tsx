import { ArrowRight } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/store/product-card";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "RŌSEN — Quietly beautiful things" },
    { name: "description", content: "Considered furniture, lighting, textiles and objects for quieter homes." },
    { property: "og:title", content: "RŌSEN — Quietly beautiful things" },
    { property: "og:description", content: "Considered furniture, lighting, textiles and objects for quieter homes." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  const featured = [products[0], products[12], products[18], products[30]].filter(Boolean);
  const newPieces = [products[15], products[20], products[27], products[34]].filter(Boolean);
  return <>
    <section className="site-container grid min-h-[calc(100svh-4.5rem)] items-center gap-8 py-8 md:grid-cols-[0.72fr_1.28fr] md:py-12">
      <div className="order-2 py-8 md:order-1"><p className="eyebrow">The considered home</p><h1 className="mt-5 max-w-xl font-display text-5xl leading-[1.04] sm:text-6xl lg:text-7xl">Quietly beautiful things.</h1><p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">Furniture and objects chosen for their honest materials, gentle forms and lasting presence.</p><Button asChild variant="editorial" size="wide" className="mt-8"><Link to="/shop">Explore the collection <ArrowRight /></Link></Button></div>
      <Link to="/product/$productId" params={{ productId: "mira-cane-accent-chair" }} className="order-1 block overflow-hidden bg-muted md:order-2"><img src={products[12]?.image} alt="Mira Cane Accent Chair" width={512} height={512} className="aspect-square h-full w-full object-cover" /></Link>
    </section>
    <section className="site-container py-20"><div className="section-heading"><div><p className="eyebrow">RŌSEN favourites</p><h2 className="mt-3 font-display text-4xl">Objects with presence</h2></div><Link to="/shop" className="text-link">Shop all <ArrowRight /></Link></div><div className="product-grid mt-10">{featured.map((product, index) => <ProductCard key={product.id} product={product} priority={index < 2} />)}</div></section>
    <section className="bg-secondary"><div className="site-container grid items-center gap-10 py-16 md:grid-cols-2 md:py-24"><img src={products[30]?.image} alt="Theo Travertine Tray" width={512} height={512} loading="lazy" className="aspect-[4/3] w-full object-cover"/><div className="md:px-10"><p className="eyebrow">Material study</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">Made by hand, marked by nature.</h2><p className="mt-5 max-w-lg leading-7 text-muted-foreground">Grain, weave and mineral variation make every piece quietly individual—imperfection is part of its character.</p><Button asChild variant="outline" size="wide" className="mt-8"><Link to="/shop">View the edit</Link></Button></div></div></section>
    <section className="site-container py-20"><div className="section-heading"><div><p className="eyebrow">Just arrived</p><h2 className="mt-3 font-display text-4xl">New, naturally</h2></div></div><div className="product-grid mt-10">{newPieces.map((product) => <ProductCard key={product.id} product={product} />)}</div></section>
  </>;
}
