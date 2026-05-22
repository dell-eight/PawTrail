"use client";

import { useEffect } from "react";
import type { Product } from "@/data/products";
import { trackProductView } from "@/lib/analytics";

export function ProductViewTracker({ product }: { product: Product }) {
  useEffect(() => {
    trackProductView(product);
  }, [product]);

  return null;
}
