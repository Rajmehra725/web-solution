import type { Metadata } from "next";
import GoogleAdsClient from "./GoogleAdsClient";

export const metadata: Metadata = {
  title: "Google Ads Services | High Converting PPC Campaigns",
  description:
    "Professional Google Ads management services to generate high-quality leads, increase conversions and maximize ROI with PPC campaigns.",
};

export default function Page() {
  return <GoogleAdsClient />;
}