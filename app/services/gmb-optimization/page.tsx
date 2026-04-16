import type { Metadata } from "next";
import GMBClient from "./GMBClient";

export const metadata: Metadata = {
  title: "Google My Business Optimization Services | Local SEO Experts",
  description:
    "Boost your local business visibility on Google Maps with professional GMB optimization services. Rank higher and get more local customers.",
};

export default function Page() {
  return <GMBClient />;
}