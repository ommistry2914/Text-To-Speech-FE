import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Research Scholar, IIT Delhi",
    avatar: "AS",
    text: "JanshoAI completely transformed how I handle research papers. I can query 50-page PDFs in seconds and get cited answers. It's saved me hours every week.",
    color: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/20",
  },
  {
    name: "Rohan Mehta",
    role: "Podcast Creator & Content Strategist",
    avatar: "RM",
    text: "The voice generator is insanely natural. My listeners can't tell the difference between me reading and the AI — and the Hindi support is flawless.",
    color: "from-purple-500/20 to-purple-600/10",
    border: "border-purple-500/20",
  },
  {
    name: "Priya Nair",
    role: "Startup Founder, Bengaluru",
    avatar: "PN",
    text: "We use JanshoAI to analyze legal contracts and generate voice summaries for our team. The speed and accuracy are unmatched. This is the future of work.",
    color: "from-pink-500/20 to-pink-600/10",
    border: "border-pink-500/20",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-black relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Loved by creators
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              across India
            </span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Join thousands of professionals who've made JanshoAI their AI
            platform of choice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`relative rounded-2xl bg-gradient-to-br ${t.color} border ${t.border} p-8 hover:scale-[1.02] transition-transform duration-300 cursor-default`}
            >
              <Quote className="w-8 h-8 text-white/10 mb-4" />
              <p className="text-zinc-300 text-base leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} border ${t.border} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {t.name}
                  </div>
                  <div className="text-zinc-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
