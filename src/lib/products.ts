import isla from "@/assets/products/isla-linen-lounge-chair.jpg";
import cove from "@/assets/products/cove-oak-side-table.jpg";
import maren from "@/assets/products/maren-textured-throw.jpg";
import solana from "@/assets/products/solana-ceramic-lamp.jpg";
import haven from "@/assets/products/haven-rattan-pendant.jpg";
import wren from "@/assets/products/wren-linen-cushion.jpg";
import clara from "@/assets/products/clara-boucle-ottoman.jpg";
import sienna from "@/assets/products/sienna-dining-chair.jpg";
import arlo from "@/assets/products/arlo-handwoven-rug.jpg";
import june from "@/assets/products/june-travertine-table.jpg";
import elara from "@/assets/products/elara-ceramic-vase.jpg";
import noa from "@/assets/products/noa-linen-bedding-set.jpg";
import miraChair from "@/assets/products/mira-cane-accent-chair.jpg";
import owen from "@/assets/products/owen-walnut-stool.jpg";
import luna from "@/assets/products/luna-oak-console-table.jpg";
import avery from "@/assets/products/avery-boucle-bench.jpg";
import nora from "@/assets/products/nora-teak-side-stool.jpg";
import ember from "@/assets/products/ember-oak-coffee-table.jpg";
import lumi from "@/assets/products/lumi-linen-table-lamp.jpg";
import elio from "@/assets/products/elio-ceramic-table-lamp.jpg";
import sora from "@/assets/products/sora-woven-pendant.jpg";
import mae from "@/assets/products/mae-brass-wall-light.jpg";
import aster from "@/assets/products/aster-rattan-table-lamp.jpg";
import ivy from "@/assets/products/ivy-cotton-throw.jpg";
import mila from "@/assets/products/mila-linen-cushion.jpg";
import aria from "@/assets/products/aria-handloom-cushion.jpg";
import naya from "@/assets/products/naya-textured-bedspread.jpg";
import elsie from "@/assets/products/elsie-linen-table-runner.jpg";
import sage from "@/assets/products/sage-cotton-rug.jpg";
import miraVase from "@/assets/products/mira-stoneware-vase.jpg";
import theo from "@/assets/products/theo-travertine-tray.jpg";
import cleo from "@/assets/products/cleo-sculptural-bowl.jpg";
import olive from "@/assets/products/olive-ceramic-candle-holder.jpg";
import nia from "@/assets/products/nia-handcrafted-mirror.jpg";
import tara from "@/assets/products/tara-woven-outdoor-chair.jpg";
import rhea from "@/assets/products/rhea-teak-garden-stool.jpg";

export type Category = "Furniture" | "Lighting" | "Textiles" | "Décor" | "Outdoor";
export type Product = {
  id: string; name: string; category: Category; price: number; option: string; image: string;
  description: string; materials: string; dimensions: string; care: string;
};

const make = (id: string, name: string, category: Category, price: number, option: string, image: string, description: string, materials: string, dimensions: string, care: string): Product => ({ id, name, category, price, option, image, description, materials, dimensions, care });

export const products: Product[] = [
  make("isla-linen-lounge-chair", "Isla Linen Lounge Chair", "Furniture", 23500, "Natural Linen", isla, "A low, generous lounge chair shaped for unhurried afternoons.", "Solid oak, linen upholstery, high-resilience foam", "76 W × 82 D × 72 H cm", "Vacuum gently; blot spills immediately."),
  make("cove-oak-side-table", "Cove Oak Side Table", "Furniture", 16500, "Natural Oak", cove, "A compact round table with softly turned legs and quiet presence.", "FSC-certified solid oak", "48 Ø × 50 H cm", "Wipe with a soft, barely damp cloth."),
  make("maren-textured-throw", "Maren Textured Throw", "Textiles", 7500, "Oatmeal", maren, "A weighty, tactile throw woven for warmth and subtle texture.", "Cotton and wool blend", "130 × 180 cm", "Gentle cold wash; dry flat."),
  make("solana-ceramic-lamp", "Solana Ceramic Lamp", "Lighting", 11500, "Ivory", solana, "A softly sculpted ceramic lamp that casts a warm pool of light.", "Hand-finished ceramic, linen shade", "36 Ø × 54 H cm", "Dust with a dry cloth; use LED bulb only."),
  make("haven-rattan-pendant", "Haven Rattan Pendant", "Lighting", 17500, "Natural Rattan", haven, "An airy woven pendant bringing gentle pattern to dining spaces.", "Handwoven rattan, powder-coated frame", "52 Ø × 38 H cm", "Dust with a soft brush; keep dry."),
  make("wren-linen-cushion", "Wren Linen Cushion", "Textiles", 4950, "Natural Linen", wren, "A relaxed linen cushion finished with an understated knife edge.", "European flax linen, feather blend insert", "50 × 50 cm", "Remove cover and cold hand wash."),
  make("clara-boucle-ottoman", "Clara Bouclé Ottoman", "Furniture", 19500, "Soft Ivory", clara, "A rounded ottoman with inviting texture and a compact footprint.", "Bouclé upholstery, kiln-dried wood frame", "62 Ø × 42 H cm", "Spot clean with upholstery-safe solution."),
  make("sienna-dining-chair", "Sienna Dining Chair", "Furniture", 14500, "Natural Oak", sienna, "A sculpted dining chair balancing curved timber and woven craft.", "Solid oak, handwoven paper cord", "55 W × 52 D × 78 H cm", "Wipe timber dry; vacuum woven seat."),
  make("arlo-handwoven-rug", "Arlo Handwoven Rug", "Textiles", 21500, "Natural", arlo, "A grounding flatweave rug with a richly nubby, handwoven surface.", "New Zealand wool and cotton", "160 × 230 cm", "Vacuum without beater bar; rotate regularly."),
  make("june-travertine-table", "June Travertine Table", "Furniture", 23900, "Classic Travertine", june, "A monolithic occasional table cut from naturally varied stone.", "Honed travertine", "45 Ø × 48 H cm", "Use coasters; wipe spills promptly."),
  make("elara-ceramic-vase", "Elara Ceramic Vase", "Décor", 6500, "Chalk", elara, "A curving statement vessel, equally composed with or without stems.", "Hand-thrown stoneware", "24 Ø × 36 H cm", "Hand wash only; avoid abrasive cleaners."),
  make("noa-linen-bedding-set", "Noa Linen Bedding Set", "Textiles", 18900, "Washed Flax", noa, "Breathable washed linen bedding with a naturally relaxed finish.", "European flax linen", "Queen: duvet cover and two pillowcases", "Machine wash cold; line dry."),
  make("mira-cane-accent-chair", "Mira Cane Accent Chair", "Furniture", 22500, "Honey Cane", miraChair, "A refined cane chair with a low profile and graceful timber frame.", "Teak frame, handwoven cane", "65 W × 72 D × 74 H cm", "Dust cane gently; avoid direct moisture."),
  make("owen-walnut-stool", "Owen Walnut Stool", "Furniture", 9500, "Smoked Walnut", owen, "A sturdy three-legged stool with softly rounded edges.", "Solid walnut", "38 Ø × 46 H cm", "Wipe dry and oil occasionally."),
  make("luna-oak-console-table", "Luna Oak Console Table", "Furniture", 23500, "Natural Oak", luna, "A slender console defined by calm proportions and rounded corners.", "FSC-certified solid oak", "130 W × 36 D × 78 H cm", "Wipe with a soft damp cloth."),
  make("avery-boucle-bench", "Avery Bouclé Bench", "Furniture", 18500, "Warm Ivory", avery, "A sculptural upholstered bench for the foot of a bed or hallway.", "Bouclé, hardwood frame, foam", "118 W × 42 D × 44 H cm", "Vacuum regularly; spot clean only."),
  make("nora-teak-side-stool", "Nora Teak Side Stool", "Furniture", 8500, "Natural Teak", nora, "A solid teak stool shaped with an organic, hourglass silhouette.", "Plantation teak", "34 Ø × 44 H cm", "Wipe clean; allow natural patina."),
  make("ember-oak-coffee-table", "Ember Oak Coffee Table", "Furniture", 21500, "Honey Oak", ember, "A low oval coffee table with substantial cylindrical legs.", "Solid oak and oak veneer", "110 W × 62 D × 36 H cm", "Use coasters; wipe with a dry cloth."),
  make("lumi-linen-table-lamp", "Lumi Linen Table Lamp", "Lighting", 9500, "Natural Linen", lumi, "A slender timber lamp crowned by a softly diffusing linen shade.", "Ash wood, linen shade", "30 Ø × 55 H cm", "Dust shade and base with a dry cloth."),
  make("elio-ceramic-table-lamp", "Elio Ceramic Table Lamp", "Lighting", 12500, "Warm White", elio, "A rounded ceramic base paired with a balanced tapered shade.", "Ceramic, cotton-linen shade", "40 Ø × 52 H cm", "Dust gently; unplug before cleaning."),
  make("sora-woven-pendant", "Sora Woven Pendant", "Lighting", 15500, "Natural Weave", sora, "A basket-woven pendant that filters light into a soft pattern.", "Natural rattan, metal frame", "48 Ø × 32 H cm", "Dust with a soft brush."),
  make("mae-brass-wall-light", "Mae Brass Wall Light", "Lighting", 13500, "Aged Brass", mae, "A minimal wall light with a warm aged finish and focused glow.", "Aged brass, opal diffuser", "14 W × 10 D × 28 H cm", "Wipe with a dry non-abrasive cloth."),
  make("aster-rattan-table-lamp", "Aster Rattan Table Lamp", "Lighting", 8500, "Natural Rattan", aster, "A petite handwoven lamp bringing warmth to bedside spaces.", "Rattan, metal frame", "28 Ø × 42 H cm", "Dust gently; keep away from moisture."),
  make("ivy-cotton-throw", "Ivy Cotton Throw", "Textiles", 6500, "Soft Sage", ivy, "A lightweight cotton throw edged with relaxed hand-twisted fringe.", "100% cotton", "130 × 180 cm", "Machine wash cold on gentle cycle."),
  make("mila-linen-cushion", "Mila Linen Cushion", "Textiles", 4500, "Pale Flax", mila, "An everyday linen cushion with a softly washed hand feel.", "Linen cover, recycled fibre insert", "45 × 45 cm", "Cold hand wash cover; dry flat."),
  make("aria-handloom-cushion", "Aria Handloom Cushion", "Textiles", 5500, "Natural Geo", aria, "A handloom cushion with a subtle geometric woven face.", "Handspun cotton, feather blend insert", "50 × 50 cm", "Spot clean or dry clean cover."),
  make("naya-textured-bedspread", "Naya Textured Bedspread", "Textiles", 16500, "Warm Natural", naya, "A generous linen-rich bedspread with a soft, rumpled texture.", "Linen and cotton blend", "240 × 260 cm", "Machine wash cold; tumble low."),
  make("elsie-linen-table-runner", "Elsie Linen Table Runner", "Textiles", 4000, "Natural Flax", elsie, "A long washed-linen runner for relaxed, layered tables.", "100% European flax linen", "45 × 250 cm", "Machine wash cold; line dry."),
  make("sage-cotton-rug", "Sage Cotton Rug", "Textiles", 19500, "Muted Sage", sage, "A low-profile cotton rug in a softened botanical green.", "Handwoven cotton", "160 × 230 cm", "Vacuum gently; professional clean."),
  make("mira-stoneware-vase", "Mira Stoneware Vase", "Décor", 6500, "Speckled Ivory", miraVase, "A tactile stoneware vase with a full, softly irregular silhouette.", "Hand-finished stoneware", "23 Ø × 31 H cm", "Hand wash and dry thoroughly."),
  make("theo-travertine-tray", "Theo Travertine Tray", "Décor", 8500, "Natural Travertine", theo, "A substantial stone tray for gathering small daily objects.", "Honed travertine", "38 W × 26 D × 5 H cm", "Wipe dry; acidic liquids may mark stone."),
  make("cleo-sculptural-bowl", "Cleo Sculptural Bowl", "Décor", 7500, "Soft Chalk", cleo, "A fluted sculptural bowl with an expressive, petal-like rim.", "Hand-cast ceramic", "32 Ø × 14 H cm", "Wipe clean; decorative use recommended."),
  make("olive-ceramic-candle-holder", "Olive Ceramic Candle Holder", "Décor", 4500, "Olive", olive, "A compact ceramic holder glazed in a deep, earthy olive tone.", "Glazed stoneware", "11 Ø × 12 H cm", "Allow to cool before wiping clean."),
  make("nia-handcrafted-mirror", "Nia Handcrafted Mirror", "Décor", 14500, "Natural Timber", nia, "An arched mirror framed by hand-shaped timber with visible grain.", "Mango wood, mirror glass", "62 W × 4 D × 96 H cm", "Clean glass with ammonia-free spray."),
  make("tara-woven-outdoor-chair", "Tara Woven Outdoor Chair", "Outdoor", 20500, "Natural Rope", tara, "A relaxed outdoor chair woven for comfort and open-air living.", "Teak, UV-resistant woven rope", "68 W × 74 D × 75 H cm", "Cover in heavy rain; clean with mild soap."),
  make("rhea-teak-garden-stool", "Rhea Teak Garden Stool", "Outdoor", 11500, "Natural Teak", rhea, "A solid garden stool with organic grain and a sculpted waist.", "Plantation teak", "36 Ø × 45 H cm", "Clean gently; teak will silver outdoors."),
];

export const formatPrice = (value: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
export const getProduct = (id: string) => products.find((product) => product.id === id);
export const searchProducts = (term: string) => {
  const query = term.trim().toLocaleLowerCase();
  if (!query) return products;
  return products.filter((product) => Object.values(product).some((value) => String(value).toLocaleLowerCase().includes(query)));
};
