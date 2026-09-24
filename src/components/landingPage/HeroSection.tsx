import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, FileText, Mic, Sparkles, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "50M+", label: "Words Processed" },
  { value: "99.9%", label: "Uptime" },
  { value: "50+", label: "AI Voices" },
];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-24 pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[600px] bg-purple-600/20 rounded-[100%] blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none opacity-50" />
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[80px] -z-10 pointer-events-none opacity-40" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default animate-fade-in-up">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-zinc-300">
              Trusted by{" "}
              <span className="text-purple-300 font-semibold">10,000+</span>{" "}
              professionals
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.05] tracking-tight animate-fade-in-up delay-100">
            One Platform,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-blue-400 animate-gradient-x">
              Three Powerful Tools
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
            JanshoAI unifies{" "}
            <span className="text-white font-medium">Document Analysis</span>,{" "}
            <span className="text-white font-medium">Voice Generation</span>,
            and{" "}
            <span className="text-white font-medium">Intelligent Chat</span> in
            one seamless workflow — supercharging your productivity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center animate-fade-in-up delay-300 mb-16">
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white h-14 px-8 text-base font-semibold shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
              onClick={() => navigate("/register")}
            >
              <Sparkles className="mr-2 w-4 h-4" />
              Get Started Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-zinc-700 bg-transparent text-white hover:bg-white/5 h-14 px-8 text-base transition-all hover:border-zinc-500 group"
              onClick={() => navigate("/features")}
            >
              Explore Features
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl animate-fade-in-up delay-400 mb-20">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Visual / Dashboard Preview */}
        <div className="relative mx-auto max-w-6xl animate-fade-in-up delay-500">
          {/* Glow behind dashboard */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-3xl blur-2xl scale-95 -z-10" />

          <div className="relative rounded-2xl border border-white/10 bg-[#07070A] shadow-2xl overflow-hidden">
            {/* Window Chrome */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5 bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-red-500/60 border border-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60 border border-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/60 border border-green-500/40" />
              <div className="flex-1 mx-4">
                <div className="h-6 bg-white/5 rounded-lg max-w-xs mx-auto flex items-center justify-center">
                  <span className="text-xs text-zinc-600">
                    app.janshoai.com
                  </span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-purple-400" />
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Tool 1: Doc Analyzer */}
                <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/10 rounded-xl border border-blue-500/20 p-6 group hover:border-blue-500/40 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-lg">
                    Doc Analyzer
                  </h4>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    Chat with PDFs, extract insights, and get cited answers
                    instantly.
                  </p>
                  <div className="space-y-2">
                    <div className="h-2 bg-white/5 rounded-full" />
                    <div className="h-2 bg-blue-500/20 rounded-full w-3/4" />
                    <div className="h-2 bg-white/5 rounded-full w-1/2" />
                  </div>
                </div>

                {/* Tool 2: Voice Gen */}
                <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/10 rounded-xl border border-purple-500/20 p-6 group hover:border-purple-500/40 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-purple-500/10 animate-pulse-glow">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mic className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-lg">
                    Voice Generator
                  </h4>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    Convert text to lifelike speech with 50+ voices & accents.
                  </p>
                  {/* Wave animation mock */}
                  <div className="flex items-center gap-0.5 h-8">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-purple-500/40 rounded-full animate-wave"
                        style={{
                          height: `${Math.random() * 60 + 20}%`,
                          animationDelay: `${i * 50}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Tool 3: AI Chat */}
                <div className="bg-gradient-to-br from-pink-900/30 to-pink-950/10 rounded-xl border border-pink-500/20 p-6 group hover:border-pink-500/40 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-500/10">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/20 border border-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Bot className="w-6 h-6 text-pink-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-lg">
                    AI Assistant
                  </h4>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    Brainstorm, draft content, and solve problems with AI.
                  </p>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <div className="w-5 h-5 rounded-full bg-pink-500/30 flex-shrink-0 mt-0.5" />
                      <div className="h-2 bg-pink-500/20 rounded-full flex-1 mt-1.5" />
                    </div>
                    <div className="flex gap-2 justify-end">
                      <div className="h-2 bg-white/10 rounded-full w-3/4 mt-1.5" />
                      <div className="w-5 h-5 rounded-full bg-white/10 flex-shrink-0 mt-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative floating elements */}
          <div className="absolute -top-5 -right-5 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl -z-10" />
          <div className="absolute -bottom-5 -left-5 w-28 h-28 bg-purple-500/20 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
