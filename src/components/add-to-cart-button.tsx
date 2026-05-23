"use client";

import { useEffect, useState } from "react";
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
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (!isAdded) {
      return;
    }

    const timeoutId = window.setTimeout(() => setIsAdded(false), 1400);

    return () => window.clearTimeout(timeoutId);
  }, [isAdded]);

  function handleAddToCart() {
    addItem(product);
    setIsAdded(true);
  }

  return (
    <button
      aria-live="polite"
      className={className}
      data-added={isAdded}
      type="button"
      onClick={handleAddToCart}
    >
      {isAdded ? "Added to Cart" : label ?? product.ctaText}
    </button>
  );
}
