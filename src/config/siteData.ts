import { Search, ListChecks, CheckCircle2, Zap, Clock, Star, ShieldCheck } from 'lucide-react';

export const SITE_DATA = {
  hero: {
    tag: "Ride Comparison App Pakistan",
    title: "Compare ride fares in one app.",
    subtitle: "Farely helps you quickly check estimated fares from Yango and Bykea so you can ride smarter in Pakistan.",
  },
  providers: ["Yango", "Bykea"],
  howItWorks: [
    {
      title: "Enter pickup and dropoff",
      desc: "Simply put where you are and where you're going. We'll handle the rest.",
      icon: Search,
    },
    {
      title: "Compare fares",
      desc: "See real-time fare estimates from all major providers in a single list.",
      icon: ListChecks,
    },
    {
      title: "Book with confidence",
      desc: "Select your ride and we'll open the provider's app instantly for checkout.",
      icon: CheckCircle2,
    },
  ],
  whyFarely: [
    { title: "Save Money", desc: "Never overpay for a ride again by seeing every option.", icon: Zap },
    { title: "Faster Decisions", desc: "No more flipping between different apps.", icon: Clock },
    { title: "Transparent Estimates", desc: "Clear price breakdowns before you tap.", icon: Star },
    { title: "No Switching", icon: ShieldCheck, desc: "Compare everything in one place effortlessly." },
  ],
  faqs: [
    {
      q: "Is Farely a ride-sharing service?",
      a: "No, Farely is a comparison tool. We provide fare estimates from various providers, but the actual ride is booked and fulfilled by the respective provider app."
    },
    {
      q: "Which providers are supported in Pakistan?",
      a: "Currently, we support Yango and Bykea. We are constantly working to add more local providers to our platform."
    },
    {
      q: "Is the fare estimate guaranteed?",
      a: "The estimates we show are provided by the ride services themselves. Final fares may vary based on traffic, routing, or specific provider surcharges."
    },
    {
      q: "Do I need to have the provider apps installed?",
      a: "Yes. Once you select a ride in Farely, we open that provider's app so you can complete the booking using your existing account and payment methods."
    }
  ]
};
