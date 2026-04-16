import type { Metadata } from "next";
import ContentClient from "./ContentClient";

export const metadata: Metadata = {
  title: "Content Creation Services | SEO Blogs, Ads & Social Content",
  description:
    "Professional content creation services including blogs, website content, ad copies, and social media content to grow your business online.",
};

export default function Page() {
  return <ContentClient />;
}