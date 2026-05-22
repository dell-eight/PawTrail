"use client";

import Link from "next/link";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/data/products";
import { trackAddToCart } from "@/lib/analytics";

type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  isCartOpen: boolean;
  itemCount: number;
  subtotal: number;
  addItem: (product: Product) => void;
  decreaseItem: (productId: string) => void;
  increaseItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const CART_STORAGE_KEY = "petstore-cart";

function parsePesoPrice(price: string) {
  return Number(price.replace(/[^\d]/g, ""));
}

function formatPeso(amount: number) {
  return `₱${amount.toLocaleString("en-PH")}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [hasLoadedCart, setHasLoadedCart] = useState(false);

  useEffect(() => {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);

    if (storedCart) {
      try {
        setItems(JSON.parse(storedCart) as CartItem[]);
      } catch {
        setItems([]);
      }
    }

    setHasLoadedCart(true);
  }, []);

  useEffect(() => {
    if (hasLoadedCart) {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }
  }, [hasLoadedCart, items]);

  const subtotal = useMemo(
    () =>
      items.reduce(
        (total, item) => total + parsePesoPrice(item.product.price) * item.quantity,
        0,
      ),
    [items],
  );

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );

  function addItem(product: Product) {
    trackAddToCart(product);

    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentItems, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }

  function increaseItem(productId: string) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  }

  function decreaseItem(productId: string) {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeItem(productId: string) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.product.id !== productId),
    );
  }

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      isCartOpen,
      itemCount,
      subtotal,
      addItem,
      decreaseItem,
      increaseItem,
      removeItem,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }),
    [isCartOpen, itemCount, items, subtotal],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
}

export function useCart() {
  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("useCart must be used within CartProvider");
  }

  return cart;
}

function CartDrawer() {
  const drawerRef = useRef<HTMLElement>(null);
  const {
    closeCart,
    decreaseItem,
    increaseItem,
    isCartOpen,
    items,
    removeItem,
    subtotal,
  } = useCart();

  useEffect(() => {
    if (!isCartOpen) {
      return;
    }

    drawerRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeCart();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeCart, isCartOpen]);

  return (
    <div
      aria-hidden={!isCartOpen}
      className={`cart-drawer-layer ${isCartOpen ? "cart-drawer-open" : ""}`}
    >
      <button
        className="cart-backdrop"
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
      />
      <aside
        aria-label="Shopping cart"
        aria-modal="true"
        className="cart-drawer"
        ref={drawerRef}
        role="dialog"
        tabIndex={-1}
      >
        <div className="cart-drawer-header">
          <div>
            <p className="eyebrow">Your cart</p>
            <h2>Pet walk kit</h2>
          </div>
          <button
            className="cart-icon-button"
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
          >
            ×
          </button>
        </div>

        {items.length > 0 ? (
          <div className="cart-item-list">
            {items.map((item) => (
              <article className="cart-item" key={item.product.id}>
                <div>
                  <h3>{item.product.name}</h3>
                  <p>{item.product.price}</p>
                </div>

                <div className="cart-item-actions">
                  <div className="quantity-control" aria-label="Quantity controls">
                    <button
                      type="button"
                      aria-label={`Decrease ${item.product.name} quantity`}
                      onClick={() => decreaseItem(item.product.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      aria-label={`Increase ${item.product.name} quantity`}
                      onClick={() => increaseItem(item.product.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="cart-remove-button"
                    type="button"
                    onClick={() => removeItem(item.product.id)}
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="cart-empty-state">
            <h3>Your cart is empty.</h3>
            <p>Add a pet walk essential to start building your kit.</p>
            <Link className="button button-secondary" href="/shop" onClick={closeCart}>
              Shop Products
            </Link>
          </div>
        )}

        <div className="cart-summary">
          <p>
            Shipping timeline and delivery cost details should be confirmed
            before accepting live orders.
          </p>
          <div className="cart-subtotal-row">
            <span>Subtotal</span>
            <strong>{formatPeso(subtotal)}</strong>
          </div>
          <Link
            className={`button button-primary button-full ${
              items.length === 0 ? "button-disabled" : ""
            }`}
            href="/checkout"
            aria-disabled={items.length === 0}
            onClick={items.length === 0 ? undefined : closeCart}
          >
            Proceed to Checkout
          </Link>
          <p className="cart-checkout-note">
            Checkout is prepared. Payment provider integration is not connected
            yet.
          </p>
        </div>
      </aside>
    </div>
  );
}
