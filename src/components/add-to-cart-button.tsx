"use client";

import type { Product } from "@/data/products";
import { useCart } from "@/components/cart-provider";

type AddToCartButtonProps = {
  product: Product;
  className?: string;
  label?: string;
};

export function AddToCartButton({
  className = "button button-primary",
  label,
  product,
}: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <button className={className} type="button" onClick={() => addItem(product)}>
      {label ?? product.ctaText}
    </button>
  );
}
