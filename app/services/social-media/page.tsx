import type { Metadata } from "next";
import SocialMediaClient from "./SocialMediaClient";

export const metadata: Metadata = {
  title: "Social Media Marketing Services | Grow Your Brand Online",
  description:
    "Professional social media marketing services to grow your brand on Instagram, Facebook, LinkedIn and more with high engagement and leads.",
};

export default function Page() {
  return <SocialMediaClient />;
}