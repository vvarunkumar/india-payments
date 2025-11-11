import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Grow Your Business 10x in India
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              The Compliant Way – Zero Risk, Maximum Growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                <p className="text-sm text-white/80">Complete India Payment Setup</p>
                <p className="text-3xl font-bold">Only $10,000</p>
              </div>
            </div>
            <Button
              variant="cta"
              size="lg"
              onClick={scrollToContact}
              className="text-lg"
            >
              Schedule Your Consultation
            </Button>
          </div>
          
          <div className="hidden lg:block">
            <img
              src={heroImage}
              alt="India Payments Growth Visualization"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
