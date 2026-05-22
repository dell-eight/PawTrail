import Link from "next/link";
import { AddToCartButton } from "@/components/add-to-cart-button";
import type { Product } from "@/data/products";
import { productVisualClasses } from "@/lib/product-visuals";

type ProductCardProps = {
  product: Product;
  bestFor?: string;
};

export function ProductCard({ product, bestFor }: ProductCardProps) {
  const bestForLabel = bestFor ?? product.bestFor;
  const featurePreview = product.features.slice(0, 2);

  return (
    <article className="product-card" id={product.slug}>
      <div
        className={`product-image-placeholder product-visual ${productVisualClasses[product.slug]}`}
        role="img"
        aria-label={product.images.primary.alt}
      >
        <span className="product-visual-shape" aria-hidden="true" />
      </div>

      <div className="product-card-copy">
        <span className="product-label">{bestForLabel}</span>
        <h3>{product.name}</h3>
        <p className="product-card-benefit">{product.mainBenefit}</p>
        <p>{product.shortDescription}</p>
      </div>

      <ul className="product-card-features" aria-label={`${product.name} highlights`}>
        {featurePreview.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <div className="product-card-footer">
        <strong className="product-price">{product.price}</strong>
        <AddToCartButton
          className="button button-primary button-full"
          label="Add to Cart"
          product={product}
        />
        <Link
          className="button button-secondary button-full"
          href={`/products/${product.slug}`}
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
