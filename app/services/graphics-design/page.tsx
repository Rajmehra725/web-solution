import type { Metadata } from "next";
import GraphicsClient from "./GraphicsClient";

export const metadata: Metadata = {
  title: "Graphics Design Services | Logos, Banners & Branding",
  description:
    "Professional graphic design services including logo design, social media creatives, banners, flyers and complete branding solutions.",
};

export default function Page() {
  return <GraphicsClient />;
}