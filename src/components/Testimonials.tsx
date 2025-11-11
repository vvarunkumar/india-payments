import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Our conversion rates jumped from 18% to 62% after implementing local payment methods. The compliance guidance alone saved us from what could have been a $50K mistake.",
    author: "Sarah Mitchell",
    title: "VP of Operations",
    company: "TechFlow Solutions",
    result: "244% conversion increase",
  },
  {
    quote: "We went from months of confusion to accepting our first Indian payment in just 3 weeks. The 24/7 support was invaluable during our launch.",
    author: "Raj Patel",
    title: "CEO",
    company: "GlobalCommerce Inc",
    result: "3 weeks to launch",
  },
  {
    quote: "The $10,000 investment paid for itself in the first month. No hidden costs, no surprises – just expert guidance and real results. Our India revenue is now 35% of total sales.",
    author: "Michael Chen",
    title: "Finance Director",
    company: "MarketPlace Pro",
    result: "ROI in 30 days",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-section-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from businesses that expanded successfully into India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <blockquote className="text-foreground mb-4 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t pt-4 mt-auto">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.title}, {testimonial.company}
                </div>
                <div className="mt-2 text-sm font-medium text-primary">
                  {testimonial.result}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
