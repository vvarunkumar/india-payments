import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Understanding UPI: The Payment Revolution Transforming India",
    excerpt: "Learn how Unified Payments Interface (UPI) has become the backbone of digital payments in India, processing over 10 billion transactions monthly.",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Payment Methods",
  },
  {
    title: "RBI Compliance Guide for International Businesses",
    excerpt: "A comprehensive breakdown of Reserve Bank of India regulations every foreign business must understand before accepting payments in India.",
    date: "2024-03-10",
    readTime: "8 min read",
    category: "Compliance",
  },
  {
    title: "5 Costly Mistakes to Avoid When Expanding to India",
    excerpt: "Real examples of businesses that lost thousands in fines and missed opportunities – and how you can avoid the same pitfalls.",
    date: "2024-03-05",
    readTime: "6 min read",
    category: "Strategy",
  },
  {
    title: "Digital Wallets vs Net Banking: What Your Customers Prefer",
    excerpt: "Data-driven insights into Indian consumer payment preferences across different demographics and transaction types.",
    date: "2024-02-28",
    readTime: "7 min read",
    category: "Market Research",
  },
  {
    title: "Case Study: How TechFlow Increased Conversions by 244%",
    excerpt: "Deep dive into a successful India expansion story, including the exact strategies and payment methods that drove massive growth.",
    date: "2024-02-20",
    readTime: "10 min read",
    category: "Case Study",
  },
  {
    title: "The Complete KYC Checklist for Indian Payment Processing",
    excerpt: "Everything you need to prepare for Know Your Customer requirements, from documentation to verification timelines.",
    date: "2024-02-15",
    readTime: "6 min read",
    category: "Compliance",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              India Payments Insights
            </h1>
            <p className="text-xl text-white/90">
              Expert guidance, market insights, and practical tips for expanding your business into India's digital payment landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="p-6 flex flex-col hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3 self-start">
                  {post.category}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                
                <Button variant="ghost" className="group w-fit p-0">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your India Expansion?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Get expert guidance for just $10,000 – no hidden costs, no long-term commitments.
          </p>
          <Link to="/">
            <Button variant="cta" size="lg">
              Schedule Your Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
