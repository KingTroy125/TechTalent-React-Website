const Stats = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-4xl font-bold text-mint">95%</p>
            <p className="text-white/80">Placement Rate</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-mint">48hrs</p>
            <p className="text-white/80">Average Response Time</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-mint">10k+</p>
            <p className="text-white/80">Companies Trust Us</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;