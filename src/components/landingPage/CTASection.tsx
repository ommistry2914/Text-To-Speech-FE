import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 via-black to-black pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-zinc-900/40 border border-white/10 rounded-3xl p-10 md:p-20 text-center backdrop-blur-xl shadow-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Start for free today
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to supercharge
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              your workflow?
            </span>
          </h2>
          <p className="text-lg text-zinc-400 mb-12 max-w-xl mx-auto leading-relaxed">
            Join over 10,000 professionals using JanshoAI to analyze documents,
            generate speech, and chat with AI — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white h-14 px-10 text-base font-semibold shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all hover:scale-105 group"
              onClick={() => navigate("/register")}
            >
              <Sparkles className="mr-2 w-4 h-4" />
              Get Started Free
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full h-14 px-10 text-base border-zinc-700 hover:bg-white/5 text-white hover:border-zinc-500 transition-all"
              onClick={() => navigate("/contactUs")}
            >
              Contact Sales
            </Button>
          </div>
          <p className="mt-8 text-sm text-zinc-600">
            No credit card required · Cancel anytime · Free forever plan
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
