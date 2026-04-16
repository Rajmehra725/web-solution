import type { Metadata } from "next";
import SEOClient from "./SEOClient";

export const metadata: Metadata = {
  title: "SEO Services | Rank #1 on Google with Organic SEO",
  description:
    "Professional SEO services to improve Google rankings, increase organic traffic and generate high-quality leads.",
};

export default function Page() {
  return <SEOClient />;
}