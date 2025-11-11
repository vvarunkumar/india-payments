const stats = [
  {
    number: "10+",
    label: "Years Experience",
  },
  {
    number: "100%",
    label: "Compliance Rate",
  },
  {
    number: "10x",
    label: "Growth Potential",
  },
  {
    number: "1.4B",
    label: "Market Size",
  },
];

const Stats = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
