import { Card } from "@/components/ui/card";
import { Smartphone, Shield, TrendingUp, Map, Settings, Headphones, DollarSign, FileCheck } from "lucide-react";

const benefits = [
  {
    emoji: "🇮🇳",
    title: "Local Payment Integration",
    description: "UPI, digital wallets, net banking, and all major Indian payment methods seamlessly integrated.",
  },
  {
    emoji: "✅",
    title: "Full Compliance Support",
    description: "Navigate all RBI regulations, tax requirements, and KYC processes with expert guidance.",
  },
  {
    emoji: "📈",
    title: "Revenue Optimization",
    description: "Achieve 3-5x conversion rate increases with locally preferred payment options.",
  },
  {
    emoji: "🎯",
    title: "Market Strategy",
    description: "Go-to-market guidance tailored specifically for the Indian payment landscape.",
  },
  {
    emoji: "🚀",
    title: "Complete Implementation",
    description: "End-to-end guided setup process from documentation to live transactions.",
  },
  {
    emoji: "💬",
    title: "Round-the-Clock Support",
    description: "24/7 assistance and troubleshooting whenever you need it.",
  },
  {
    emoji: "🛡️",
    title: "Zero Risk",
    description: "$10,000 flat fee, no hidden costs, no long-term commitments required.",
  },
  {
    emoji: "📋",
    title: "All Requirements Handled",
    description: "Documentation, technical setup, and regulatory compliance – we handle everything.",
  },
];

const Solution = () => {
  return (
    <section id="solution" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your India Market Expansion Partner
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete, compliant payment integration with hands-on guidance every step of the way.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all hover:scale-105">
              <div className="text-4xl mb-3">{benefit.emoji}</div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
