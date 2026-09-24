import { FileText, Mic, Bot, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: FileText,
    color: "blue",
    label: "01",
    title: "Document Analyzer",
    description:
      "Upload your complex documents — PDFs, DOCX, or TXT — and let our AI break them down. Ask specific questions and get answers cited directly from the source text.",
    points: [
      "Instant AI-powered summarization",
      "Deep contextual Q&A with citations",
      "Multi-format support (PDF, DOCX, TXT)",
    ],
    cta: "Try Analyzer",
    iconBg: "bg-blue-500/10",
    iconBorder: "border-blue-500/20",
    iconColor: "text-blue-400",
    ctaClass:
      "border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300",
    gradientFrom: "from-blue-900/20",
    gradientTo: "to-black",
    cardBorder: "border-blue-500/10",
    accentColor: "text-blue-500",
    path: "/features",
  },
  {
    icon: Mic,
    color: "purple",
    label: "02",
    title: "Voice Generator",
    description:
      "Transform any written text into natural-sounding, expressive speech. Choose from 50+ voices, fine-tune pitch, speed, and emotion — then export in one click.",
    points: [
      "50+ voices across multiple accents",
      "Customizable pitch, speed & emotion",
      "One-click WAV/MP3 export",
    ],
    cta: "Start Speaking",
    iconBg: "bg-purple-500/10",
    iconBorder: "border-purple-500/20",
    iconColor: "text-purple-400",
    ctaClass:
      "border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300",
    gradientFrom: "from-purple-900/20",
    gradientTo: "to-black",
    cardBorder: "border-purple-500/10",
    accentColor: "text-purple-500",
    path: "/userDashboard",
    reverse: true,
  },
  {
    icon: Bot,
    color: "pink",
    label: "03",
    title: "Intelligent Assistant",
    description:
      "Your personal AI companion for brainstorming, drafting, and problem-solving. Context-aware and capable of handling complex queries across any domain.",
    points: [
      "Context-aware multi-turn conversations",
      "Code & content generation",
      "Industry-specific persona customization",
    ],
    cta: "Chat Now",
    iconBg: "bg-pink-500/10",
    iconBorder: "border-pink-500/20",
    iconColor: "text-pink-400",
    ctaClass:
      "border-pink-500/50 text-pink-400 hover:bg-pink-500/10 hover:text-pink-300",
    gradientFrom: "from-pink-900/20",
    gradientTo: "to-black",
    cardBorder: "border-pink-500/10",
    accentColor: "text-pink-500",
    path: "/features",
  },
];

const FeaturesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 bg-black relative" id="features">
      {/* Subtle section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-28">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
            Core Capabilities
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Everything you need,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              nothing you don't
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Three production-grade AI tools working in harmony to eliminate the
            clutter of switching between apps.
          </p>
        </div>

        <div className="space-y-40">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isReverse = feature.reverse;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center`}
              >
                {/* Text Content */}
                <div className={isReverse ? "order-2" : "order-2 md:order-1"}>
                  <div className="text-sm font-mono text-zinc-600 mb-4 tracking-widest uppercase">
                    {feature.label}
                  </div>
                  <div
                    className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-6 border ${feature.iconBorder}`}
                  >
                    <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-5">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  <ul className="space-y-3 mb-10">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-center text-zinc-300">
                        <CheckCircle2
                          className={`w-5 h-5 ${feature.accentColor} mr-3 flex-shrink-0`}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className={`rounded-full group ${feature.ctaClass}`}
                    onClick={() => navigate(feature.path)}
                  >
                    {feature.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Visual Card */}
                <div
                  className={
                    isReverse ? "order-1 relative" : "order-1 md:order-2 relative"
                  }
                >
                  <div
                    className={`aspect-square rounded-2xl bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} border ${feature.cardBorder} relative overflow-hidden group cursor-default`}
                  >
                    <div className="absolute inset-0 opacity-30">
                      <div
                        className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl ${
                          feature.color === "blue"
                            ? "bg-blue-600/30"
                            : feature.color === "purple"
                            ? "bg-purple-600/30"
                            : "bg-pink-600/30"
                        }`}
                      />
                    </div>

                    {/* Feature-specific visual */}
                    {feature.color === "blue" && (
                      <div className="absolute inset-6 bg-black/40 backdrop-blur-sm rounded-xl border border-white/5 p-5 flex flex-col gap-4">
                        <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            <FileText className="w-4 h-4 text-blue-400" />
                          </div>
                          <div>
                            <div className="h-2 w-24 bg-white/20 rounded-full" />
                            <div className="h-1.5 w-16 bg-white/10 rounded-full mt-1.5" />
                          </div>
                        </div>
                        <div className="h-24 w-full bg-white/5 rounded-lg p-3 space-y-2">
                          <div className="h-2 w-full bg-white/10 rounded-full" />
                          <div className="h-2 w-5/6 bg-white/10 rounded-full" />
                          <div className="h-2 w-4/6 bg-white/10 rounded-full" />
                        </div>
                        <div className="mt-auto space-y-2">
                          <div className="flex gap-2 justify-end">
                            <div className="bg-blue-500/20 border border-blue-500/30 rounded-2xl rounded-tr-none p-3 max-w-[80%]">
                              <div className="h-2 w-36 bg-blue-400/30 rounded-full mb-1.5" />
                              <div className="h-2 w-24 bg-blue-400/30 rounded-full" />
                            </div>
                            <div className="w-7 h-7 rounded-full bg-blue-500/20 flex-shrink-0 mt-1" />
                          </div>
                        </div>
                      </div>
                    )}

                    {feature.color === "purple" && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
                        <div className="relative">
                          <div className="w-28 h-28 rounded-full border-2 border-purple-500/30 flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full border-2 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                            <Mic className="w-10 h-10 text-purple-400" />
                          </div>
                          <div className="absolute -inset-3 rounded-full border border-purple-500/10 animate-ping opacity-30" />
                        </div>
                        <div className="flex items-center gap-1 w-full max-w-[180px]">
                          {[...Array(24)].map((_, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-purple-500/50 rounded-full"
                              style={{
                                height: `${Math.sin(i * 0.6) * 20 + 24}px`,
                              }}
                            />
                          ))}
                        </div>
                        <div className="text-sm text-purple-300 font-medium tracking-wide">
                          Generating speech...
                        </div>
                      </div>
                    )}

                    {feature.color === "pink" && (
                      <div className="absolute inset-6 flex flex-col gap-4 pt-4">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-pink-500/20 flex-shrink-0" />
                          <div className="bg-white/5 rounded-2xl rounded-tl-none p-3 max-w-[75%]">
                            <div className="h-2 w-32 bg-white/20 rounded-full mb-1.5" />
                            <div className="h-2 w-20 bg-white/20 rounded-full" />
                          </div>
                        </div>
                        <div className="flex gap-3 justify-end">
                          <div className="bg-pink-500/20 border border-pink-500/30 rounded-2xl rounded-tr-none p-3 max-w-[75%]">
                            <div className="h-2 w-40 bg-pink-400/30 rounded-full mb-1.5" />
                            <div className="h-2 w-28 bg-pink-400/30 rounded-full" />
                          </div>
                          <div className="w-8 h-8 rounded-full bg-pink-500/20 flex-shrink-0" />
                        </div>
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-pink-500/20 flex-shrink-0" />
                          <div className="bg-white/5 rounded-2xl rounded-tl-none p-3 max-w-[75%]">
                            <div className="h-2 w-24 bg-white/20 rounded-full mb-1.5" />
                            <div className="h-2 w-36 bg-white/20 rounded-full mb-1.5" />
                            <div className="h-2 w-16 bg-white/20 rounded-full" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
