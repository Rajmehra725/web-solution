import type { Metadata } from "next";
import WhatsAppClient from "./WhatsAppClient";

export const metadata: Metadata = {
  title: "WhatsApp API Services | Business Automation & Chatbots",
  description:
    "Get WhatsApp API integration for business automation, chatbot, auto-replies, bulk messaging and customer engagement solutions.",
};

export default function Page() {
  return <WhatsAppClient />;
}