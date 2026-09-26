<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting published git history.
<!-- LOVABLE:END -->

- Keep `src/lib/products.ts` as the sole product identity and display source so every commerce view shares one option, image, and price.
- Keep cart and wishlist state in `StoreProvider` with guarded browser-storage parsing so malformed saved data cannot crash the storefront.
