"use client";

import type { Product } from "@/data/products";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    ttq?: {
      page?: () => void;
      track?: (eventName: string, properties?: Record<string, unknown>) => void;
    };
  }
}

const currency = "PHP";

type AnalyticsCartItem = {
  product: Product;
  quantity: number;
};

function getPriceValue(price: string) {
  return Number(price.replace(/[^\d]/g, ""));
}

function getCartItems(items: AnalyticsCartItem[]) {
  return items.map((item) => ({
    item_id: item.product.id,
    item_name: item.product.name,
    price: getPriceValue(item.product.price),
    quantity: item.quantity,
  }));
}

export function trackPageView(path: string) {
  window.gtag?.("event", "page_view", {
    page_path: path,
  });
  window.fbq?.("track", "PageView");
  window.ttq?.page?.();
}

export function trackProductView(product: Product) {
  const value = getPriceValue(product.price);

  window.gtag?.("event", "view_item", {
    currency,
    value,
    items: getCartItems([{ product, quantity: 1 }]),
  });
  window.fbq?.("track", "ViewContent", {
    content_ids: [product.id],
    content_name: product.name,
    content_type: "product",
    currency,
    value,
  });
  window.ttq?.track?.("ViewContent", {
    content_id: product.id,
    content_name: product.name,
    content_type: "product",
    currency,
    value,
  });
}

export function trackAddToCart(product: Product) {
  const value = getPriceValue(product.price);

  window.gtag?.("event", "add_to_cart", {
    currency,
    value,
    items: getCartItems([{ product, quantity: 1 }]),
  });
  window.fbq?.("track", "AddToCart", {
    content_ids: [product.id],
    content_name: product.name,
    content_type: "product",
    currency,
    value,
  });
  window.ttq?.track?.("AddToCart", {
    content_id: product.id,
    content_name: product.name,
    content_type: "product",
    currency,
    value,
  });
}

export function trackBeginCheckout(
  items: AnalyticsCartItem[],
  subtotal: number,
) {
  if (items.length === 0) {
    return;
  }

  const itemIds = items.map((item) => item.product.id);
  const itemNames = items.map((item) => item.product.name);

  window.gtag?.("event", "begin_checkout", {
    currency,
    value: subtotal,
    items: getCartItems(items),
  });
  window.fbq?.("track", "InitiateCheckout", {
    content_ids: itemIds,
    content_name: itemNames.join(", "),
    content_type: "product",
    currency,
    num_items: items.reduce((total, item) => total + item.quantity, 0),
    value: subtotal,
  });
  window.ttq?.track?.("InitiateCheckout", {
    content_id: itemIds.join(","),
    content_name: itemNames.join(", "),
    content_type: "product",
    currency,
    quantity: items.reduce((total, item) => total + item.quantity, 0),
    value: subtotal,
  });
}
