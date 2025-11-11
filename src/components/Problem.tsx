import { Card } from "@/components/ui/card";
import { AlertCircle, ShieldAlert, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Missing Local Payment Methods",
    description: "Your customers expect UPI, wallets, and net banking. Standard gateways don't offer these, leading to lost sales and frustrated customers.",
  },
  {
    icon: ShieldAlert,
    title: "Compliance Nightmares",
    description: "RBI regulations, KYC requirements, tax implications – one mistake can cost you thousands in fines or shut down your operations entirely.",
  },
  {
    icon: TrendingDown,
    title: "High Cart Abandonment",
    description: "Unfamiliar payment options and complex checkout flows cause 60-70% of Indian customers to abandon their carts before completing purchase.",
  },
];

const Problem = () => {
  return (
    <section id="problem" className="py-20 bg-section-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The India Payment Challenge
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expanding to India is exciting, but payment integration can be overwhelming without the right guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problem;
