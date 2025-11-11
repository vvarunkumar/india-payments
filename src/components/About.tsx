import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const expertise = [
  "10+ years in fintech and payments industry",
  "Deep expertise in Indian regulatory environment",
  "Helped dozens of businesses expand successfully",
  "Former senior roles at leading payment processors",
  "Specialized in B2B and B2C payment solutions",
  "Direct relationships with major Indian payment providers",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-dark text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            About Your India Payments Expert
          </h2>
          
          <Card className="bg-white/5 border-white/10 p-8 backdrop-blur-sm">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-white/90 mb-6">
                With over a decade of experience in the fintech and payments industry, I specialize in helping international businesses navigate the complex but rewarding Indian payment landscape. I've worked with leading payment processors, understand the regulatory environment inside-out, and maintain direct relationships with all major Indian payment providers.
              </p>
              
              <p className="text-lg text-white/90 mb-8">
                My mission is simple: to be your single point of contact for everything related to accepting payments in India. From initial strategy to ongoing support, I provide the expertise and guidance you need to grow your business 10x in one of the world's fastest-growing digital markets.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
