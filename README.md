# Rōsen Catalogue Refresh

RŌSEN — MASTER PRODUCT CATALOGUE UPDATE

You are updating the existing RŌSEN e-commerce website.

Do NOT rebuild the website from scratch.

Keep the existing:

- RŌSEN branding

- “Quietly beautiful things.” tagline

- Premium editorial design

- Header

- Footer

- Homepage

- Shop page

- Product detail pages

- Search

- Category filters

- Sorting

- Wishlist

- Cart

- Checkout

- Cash on Delivery

- Credit/Debit Card UI

- LocalStorage

- Responsive design

This update is specifically for the product catalogue, pricing, product options, and product images.

---

1. NEW PRICE RANGE — STRICT

Every product on the website must now have a price between:

₹4,000 minimum

and

₹24,000 maximum

No product can be below ₹4,000.

No product can be above ₹24,000.

This applies to ALL products, including existing and newly added products.

Remove all previous prices that are outside this range.

Use Indian Rupees throughout the website.

Never display:

- $

- USD

- EUR

- GBP

---

2. UPDATED EXISTING PRODUCTS

Keep these product names EXACTLY as written.

Do not rename them.

Update their prices to:

Product| Price

Isla Linen Lounge Chair| ₹23,500

Cove Oak Side Table| ₹16,500

Maren Textured Throw| ₹7,500

Solana Ceramic Lamp| ₹11,500

Haven Rattan Pendant| ₹17,500

Wren Linen Cushion| ₹4,950

Clara Bouclé Ottoman| ₹19,500

Sienna Dining Chair| ₹14,500

Arlo Handwoven Rug| ₹21,500

June Travertine Table| ₹23,900

Elara Ceramic Vase| ₹6,500

Noa Linen Bedding Set| ₹18,900

---

3. ADD MORE PRODUCTS

Expand the catalogue to approximately 36 products total.

Maintain a balanced selection across:

- Furniture

- Lighting

- Textiles

- Décor

- Outdoor

Add these products:

FURNITURE

13. Mira Cane Accent Chair — ₹22,500

14. Owen Walnut Stool — ₹9,500

15. Luna Oak Console Table — ₹23,500

16. Avery Bouclé Bench — ₹18,500

17. Nora Teak Side Stool — ₹8,500

18. Ember Oak Coffee Table — ₹21,500

LIGHTING

19. Lumi Linen Table Lamp — ₹9,500

20. Elio Ceramic Table Lamp — ₹12,500

21. Sora Woven Pendant — ₹15,500

22. Mae Brass Wall Light — ₹13,500

23. Aster Rattan Table Lamp — ₹8,500

TEXTILES

24. Ivy Cotton Throw — ₹6,500

25. Mila Linen Cushion — ₹4,500

26. Aria Handloom Cushion — ₹5,500

27. Naya Textured Bedspread — ₹16,500

28. Elsie Linen Table Runner — ₹4,000

29. Sage Cotton Rug — ₹19,500

DÉCOR

30. Mira Stoneware Vase — ₹6,500

31. Theo Travertine Tray — ₹8,500

32. Cleo Sculptural Bowl — ₹7,500

33. Olive Ceramic Candle Holder — ₹4,500

34. Nia Handcrafted Mirror — ₹14,500

OUTDOOR

35. Tara Woven Outdoor Chair — ₹20,500

36. Rhea Teak Garden Stool — ₹11,500

---

4. CRITICAL PRODUCT RULE

Every product must have:

EXACTLY ONE OPTION

and

EXACTLY ONE IMAGE

This is a strict requirement.

The product structure must be:

1 PRODUCT → 1 OPTION → 1 IMAGE → 1 PRICE

---

5. ONE OPTION ONLY

Every product must have exactly one available option.

Examples:

Isla Linen Lounge Chair

Option: Natural Linen

Cove Oak Side Table

Option: Natural Oak

Solana Ceramic Lamp

Option: Ivory

Arlo Handwoven Rug

Option: Natural

Do NOT create:

- Multiple colours

- Multiple finishes

- Multiple sizes

- Multiple materials

- Multiple variants

- Variant dropdowns

- Colour swatches

- Variant buttons

The customer should not have to choose between multiple versions.

The single option can simply be displayed as information.

For example:

Option

Natural Linen

There is no need for complicated variant-selection functionality.

---

6. ONE IMAGE ONLY

Every product must have exactly ONE image.

Do NOT create:

- Image galleries

- Multiple thumbnails

- Additional images

- Image carousels

- Alternate product images

- Hover images

- Variant images

Each product must have only:

product.image

Do NOT use:

additionalImages

Do NOT use:

variants[].image

Do NOT create arrays of images for products.

---

7. IMAGE MUST MATCH THE PRODUCT

The ONE image assigned to a product must accurately represent that exact product.

Examples:

Mira Cane Accent Chair

→ Image must show a cane accent chair.

Theo Travertine Tray

→ Image must show a travertine tray.

Nia Handcrafted Mirror

→ Image must show a handcrafted mirror.

Lumi Linen Table Lamp

→ Image must show a linen table lamp.

Do NOT randomly assign images.

Do NOT use an unrelated product image.

Do NOT use:

- Chair image for a table

- Table image for a lamp

- Lamp image for a vase

- Vase image for a cushion

- Rug image for bedding

- Bedding image for furniture

Image accuracy is more important than filling every product slot.

If an appropriate image is unavailable, use a suitable product-specific placeholder rather than an unrelated product image.

---

8. NO DUPLICATE PRODUCT IMAGES

Each product should have its own appropriate image.

Do not reuse the same image across unrelated products.

If two products are visually similar, their images should still clearly represent the correct product.

Do not simply copy one image and assign it to multiple products.

---

9. SIMPLE PRODUCT DATA STRUCTURE

Use a simple product object.

Example:

{

  id: "isla-linen-lounge-chair",

  name: "Isla Linen Lounge Chair",

  category: "Furniture",

  price: 23500,

  option: "Natural Linen",

  image: "/images/isla-linen-lounge-chair.jpg",

  description: "...",

  materials: "...",

  dimensions: "...",

  care: "..."

}

Every product must contain:

- Unique ID

- Name

- Category

- Price

- One option

- One image

- Description

- Materials

- Dimensions

- Care information

Do NOT use a complex variant system.

---

10. UNIQUE PRODUCT IDs

Every product must have a unique ID.

Examples:

isla-linen-lounge-chair

cove-oak-side-table

maren-textured-throw

mira-cane-accent-chair

owen-walnut-stool

luna-oak-console-table

Use the product ID for routing and identification.

Example:

/product/isla-linen-lounge-chair

Never use array indexes as product identity.

---

11. PRODUCT CARD

Each product card should display:

- One correct product image

- Product name

- Price

- Single option

- Wishlist button

Do NOT show:

- Colour swatches

- Variant selectors

- Multiple thumbnails

- Multiple images

- Image carousels

Keep the card clean and premium.

---

12. PRODUCT DETAIL PAGE

The product detail page should display:

- One large product image

- Product name

- Price

- Single option

- Description

- Materials

- Dimensions

- Care information

- Quantity selector

- Add to Cart button

- Wishlist button

- Shipping information

Do NOT display:

- Image gallery

- Thumbnails

- Colour selectors

- Variant selectors

- Multiple product images

The single image should be large and visually prominent.

---

13. CART IMAGE CONSISTENCY

When a product is added to the cart, the cart must use:

product.image

The exact same image shown on the product page must appear in the cart.

Do not select another image.

Do not generate another image.

---

14. WISHLIST IMAGE CONSISTENCY

Wishlist must use the exact same:

- Product ID

- Product name

- Option

- Price

- Image

as the product catalogue.

---

15. CHECKOUT IMAGE CONSISTENCY

Checkout must display the exact same:

- Product

- Option

- Image

- Quantity

- Price

The product image must never change during checkout.

---

16. ORDER CONFIRMATION

Order confirmation should display:

Product name

Option

Quantity

Price

Product image

Example:

Isla Linen Lounge Chair

Option: Natural Linen

Quantity: 1

₹23,500

---

17. REMOVE OLD VARIANT LOGIC

Because every product now has only one option:

Remove any previous implementation of:

- Colour variants

- Multiple variants

- Colour swatches

- Variant image switching

- Multiple product galleries

- Additional images

- Variant-specific images

- CSS colour filters

- Variant selection logic

Simplify the application.

---

18. SHOP FILTERS

Update the Shop page so the expanded catalogue works correctly.

Categories:

- All

- Furniture

- Lighting

- Textiles

- Décor

- Outdoor

Price ranges:

- ₹4,000–₹8,000

- ₹8,000–₹12,000

- ₹12,000–₹16,000

- ₹16,000–₹20,000

- ₹20,000–₹24,000

Sorting:

- Featured

- Newest

- Price: Low to High

- Price: High to Low

---

19. SEARCH

Search must include ALL 36 products.

Search should work against:

- Product name

- Category

- Relevant product information

Examples:

Search “chair” → show chair products.

Search “lamp” → show lamps.

Search “linen” → show linen products.

Search “outdoor” → show outdoor products.

---

20. HOMEPAGE

Update homepage product sections so they include a mixture of existing and newly added products.

Do not show only the original products.

Keep the editorial and premium appearance.

Do not overcrowd the homepage.

---

21. CART FUNCTIONALITY

Do not break existing cart functionality.

Continue supporting:

- Add to cart

- Remove

- Increase quantity

- Decrease quantity

- Subtotal

- Shipping

- Total

- Checkout

Because each product has only one option, cart logic should remain simple.

---

22. WISHLIST

Continue supporting:

- Add to wishlist

- Remove from wishlist

- View wishlist

- Move to cart

Wishlist must persist using LocalStorage.

---

23. LOCAL STORAGE

Continue storing:

- Cart

- Wishlist

in LocalStorage.

Refreshing the website must not unexpectedly remove the cart or wishlist.

Use safe parsing and fallback handling so corrupted LocalStorage does not crash the application.

---

24. CHECKOUT

Keep the existing Indian checkout.

Fields:

- Full Name

- Mobile Number

- Email

- Address

- Apartment / Landmark

- City

- State

- PIN Code

Payment methods:

Cash on Delivery

Credit/Debit Card

For COD:

Pay in cash when your order is delivered.

For Card:

Show:

- Card Number

- Name on Card

- Expiry Date

- CVV

This remains a frontend demo only.

Do not store real card details.

---

25. CURRENCY

Every price must use:

₹

All product prices must be between:

₹4,000 and ₹24,000

Before finishing, search the project for:

- $

- USD

- EUR

- GBP

and remove any unintended foreign currency.

---

26. RESPONSIVE DESIGN

The catalogue must work perfectly on:

- Desktop

- Laptop

- Tablet

- Mobile

Do not allow:

- Horizontal scrolling

- Broken product cards

- Oversized images

- Broken grids

- Overflowing product names

Maintain the premium design on every screen size.

---

27. FINAL PRODUCT DATA AUDIT

Before declaring the update complete, inspect ALL 36 products.

For EVERY product verify:

1. Correct product name.

2. Unique product ID.

3. Correct category.

4. Price is ₹4,000–₹24,000.

5. Exactly ONE option.

6. Exactly ONE image.

7. Image accurately represents the product.

8. No unrelated image.

9. Product card uses correct image.

10. Product page uses correct image.

11. Cart uses correct image.

12. Wishlist uses correct image.

13. Checkout uses correct image.

14. Order confirmation uses correct image.

15. No broken image path.

---

28. FINAL PRODUCT STRUCTURE AUDIT

There must be NO product containing:

variants[]

NO:

additionalImages[]

NO:

colorSwatches[]

NO:

gallery[]

NO:

variantImages[]

Every product should follow:

id

name

category

price

option

image

description

materials

dimensions

care

---

29. FINAL PRICE AUDIT

Verify programmatically or manually:

MINIMUM PRICE >= ₹4,000

MAXIMUM PRICE <= ₹24,000

If any product violates this rule, fix it before finishing.

---

30. FINAL FUNCTIONAL QA

After making the changes, test:

Product

- Open every product

- Correct name

- Correct price

- Correct option

- Correct single image

Search

- Search product names

- Search categories

- Search keywords

Filters

- Category filtering

- Price filtering

- Sorting

Cart

- Add product

- Change quantity

- Remove product

- Verify image

- Verify price

- Refresh page

Wishlist

- Add

- Remove

- Move to cart

- Refresh page

Checkout

Test:

Cash on Delivery

and

Credit/Debit Card

Verify that the order summary is correct.

Responsive

Test:

- Desktop

- Tablet

- Mobile

---

31. FINAL VISUAL QA

The new products must look like they belong to the existing RŌSEN brand.

Maintain:

- Warm neutral colours

- Premium typography

- Editorial layouts

- Generous whitespace

- Natural materials

- Refined product cards

- Subtle interactions

- Sophisticated spacing

Do not turn the expanded catalogue into a generic marketplace.

---

32. ABSOLUTE FINAL RULE

The following rule has priority over everything else in this product update:

1 PRODUCT → 1 OPTION → 1 IMAGE → 1 PRICE

Do not create additional options.

Do not create multiple images.

Do not create image galleries.

Do not create colour swatches.

Do not create variant selectors.

Do not randomly assign images.

Do not reuse unrelated images.

Do not use array indexes as product IDs.

Do not break existing cart, wishlist, checkout, or LocalStorage functionality.

---

FINAL INSTRUCTION TO ANTIGRAVITY

Update the existing RŌSEN website with the expanded 36-product catalogue.

Keep all existing website functionality and design.

Update all prices to the ₹4,000–₹24,000 range.

Add all 24 new products listed above.

Keep the original 12 product names exactly unchanged.

Every product must have exactly ONE option and exactly ONE image.

Every image must accurately represent its product.

Remove all previous multi-variant and multi-image logic.

After implementation, run a complete QA pass and fix every error before declaring the update complete.

The final result should feel like a polished, professional premium home décor store.

RŌSEN

Quietly beautiful things.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a88afcae-f973-5d54-8b46-e59b1da6cccd).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
