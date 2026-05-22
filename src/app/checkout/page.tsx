import type { Metadata } from "next";
import { CheckoutForm } from "@/components/checkout-form";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Checkout | Pet Walk & Travel Accessories",
  description:
    "Review your pet walk essentials and prepare checkout details safely before payment integration is connected.",
});

export default function CheckoutPage() {
  return <CheckoutForm />;
}
