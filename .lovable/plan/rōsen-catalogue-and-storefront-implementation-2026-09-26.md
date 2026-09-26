# RŌSEN catalogue and storefront implementation

## Current state

The checked-out project is still the blank starter: it has no existing RŌSEN pages, catalogue, cart, wishlist, checkout, or product imagery to update in place. I will therefore create the requested storefront in this project while treating the supplied RŌSEN name, tagline, premium editorial direction, and functional requirements as the source of truth.

## What will be built

- Establish the RŌSEN visual system: warm neutral palette, premium editorial typography, restrained interactions, generous spacing, shared header, and shared footer.
- Add dedicated pages for Home, Shop, Search, Wishlist, Cart, Checkout, Order Confirmation, and one dynamic Product page keyed by each product’s unique slug.
- Create a single authoritative 36-product catalogue using exactly the requested names and prices. Every record will contain only `id`, `name`, `category`, `price`, `option`, `image`, `description`, `materials`, `dimensions`, and `care`.
- Create one distinct, product-accurate image per item. Cards, details, cart, wishlist, checkout, and confirmation will all reference that same catalogue image.
- Build shop category and price filters plus Featured, Newest, Low-to-High, and High-to-Low sorting.
- Build catalogue-wide search across names, categories, options, descriptions, materials, dimensions, and care details.
- Build persistent cart and wishlist flows with safe browser-storage recovery, quantity controls, moving wishlist items to cart, and consistent product snapshots.
- Build the Indian checkout with Cash on Delivery and demo Card forms. Card details will remain transient and will never be saved.
- Keep homepage selections curated and mixed across original and newly added products rather than showing the entire catalogue.

## Technical details

- Use TanStack file routes and typed product slugs; all linked paths will have matching route files and unique page metadata.
- Use one catalogue lookup as the identity and display source across all commerce views, preventing image, option, or price drift.
- Use Indian Rupee formatting only; shipping and totals will use the same formatter.
- Do not introduce variants, image arrays, galleries, thumbnails, swatches, or index-based product identity.
- Product filters will use non-overlapping boundary rules so every valid price falls into exactly one range.
- Add automated catalogue assertions covering count, unique IDs, exact field shape, one image string, one option string, valid category, price limits, image-path existence, banned variant keys, and foreign-currency strings.

## Validation

- Programmatically audit all 36 catalogue records and every local image path.
- Exercise search terms, all categories, all price bands, and every sort mode.
- Open every product URL and compare its visible name, option, price, and image to the catalogue record.
- Test wishlist persistence, cart persistence and quantity changes, checkout summaries, COD submission, Card form submission, and confirmation details.
- Inspect desktop, tablet, and mobile layouts for overflow, broken grids, image sizing, and long-name handling.
- Check the final preview for compilation, runtime, console, and network errors before completion.
