import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Digital Marketing Services | SEO, Ads & Web Development",
  description:
    "We provide SEO services, Google Ads, social media marketing and website development to grow your business online.",
  keywords: [
    "SEO services",
    "digital marketing agency",
    "google ads service",
    "website development",
    "social media marketing",
  ],
};

export default function Page() {
  return <ServicesClient />;
}