
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-white/80">Trusted by leading tech companies worldwide</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "ByteHire transformed our hiring process. We found amazing developers in record time.",
              author: "Sarah Chen",
              role: "CTO at TechFlow",
              image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
            },
            {
              quote: "The AI-powered matching system is incredibly accurate. It saved us countless hours.",
              author: "Michael Rodriguez",
              role: "Head of Engineering at DevScale",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
            },
            {
              quote: "Outstanding talent pool and excellent support throughout the hiring process.",
              author: "Emily Watson",
              role: "VP Engineering at CloudPeak",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-forest-light p-8 rounded-xl relative">
              <Quote className="text-mint w-8 h-8 mb-4" />
              <p className="text-white/90 mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
