import type { Metadata } from "next";
import { CheckoutForm } from "@/components/checkout-form";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Checkout Preview | Wag & Roam Pet Essentials",
  description:
    "Review your Wag & Roam cart and checkout preview safely before live payment integration is connected.",
  path: "/checkout",
});

export default function CheckoutPage() {
  return <CheckoutForm />;
}
