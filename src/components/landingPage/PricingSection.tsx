import { Check, Zap, Shield, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for individuals exploring JanshoAI's capabilities.",
    features: [
      "5 document uploads/month",
      "10 mins voice generation/month",
      "50 AI chat messages/day",
      "Standard voice quality",
      "Basic analytics",
    ],
    cta: "Get Started Free",
    ctaVariant: "outline" as const,
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹499",
    period: "/month",
    description:
      "For professionals and creators who need the full power of AI.",
    badge: "Most Popular",
    features: [
      "Unlimited document uploads",
      "5 hrs voice generation/month",
      "Unlimited AI chat messages",
      "Premium HD voice quality",
      "Priority processing",
      "Advanced analytics dashboard",
      "API access",
    ],
    cta: "Start Pro Trial",
    ctaVariant: "default" as const,
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description:
      "Tailored solutions for teams and organizations at scale.",
    features: [
      "Everything in Pro",
      "Custom voice cloning",
      "Dedicated infrastructure",
      "SSO & team management",
      "SLA guarantee (99.99%)",
      "Dedicated support manager",
    ],
    cta: "Contact Sales",
    ctaVariant: "outline" as const,
    highlight: false,
  },
];

const PricingSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 bg-black relative" id="pricing">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
            Simple Pricing
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Start free,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              scale as you grow
            </span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            No hidden fees. No credit card required. Cancel anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative rounded-2xl border p-8 flex flex-col transition-all duration-300 hover:-translate-y-1",
                plan.highlight
                  ? "bg-gradient-to-b from-purple-900/30 to-zinc-950 border-purple-500/40 shadow-2xl shadow-purple-500/20"
                  : "bg-zinc-900/20 border-white/10 hover:border-white/20"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-bold rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-zinc-500 mb-5">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span
                    className={cn(
                      "text-4xl font-bold",
                      plan.highlight ? "text-white" : "text-zinc-200"
                    )}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-zinc-500 text-sm">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                        plan.highlight
                          ? "bg-purple-500/20 text-purple-400"
                          : "bg-white/5 text-zinc-400"
                      )}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-zinc-400">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.ctaVariant}
                className={cn(
                  "w-full rounded-full h-11 font-medium",
                  plan.highlight
                    ? "bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white border-0 shadow-lg shadow-purple-500/20"
                    : "border-zinc-700 text-zinc-300 hover:bg-white/5 hover:text-white"
                )}
                onClick={() => navigate(plan.highlight ? "/register" : "/contactUs")}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-zinc-500 text-sm">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-500" />
            Instant setup
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-500" />
            Bank-grade encryption
          </div>
          <div className="flex items-center gap-2">
            <Headphones className="w-4 h-4 text-blue-500" />
            24/7 support
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
