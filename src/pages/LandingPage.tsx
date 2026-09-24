import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  FileText,
  Mic,
  Bot,
  CheckCircle2,
  Check,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Send,
  Star,
  Zap,
  Shield,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import LogoImage from "@/assets/images/janshoai-logo-2-bg-dark.png";
import Navbar from "@/components/landingPage/Navbar";
import { cn } from "@/lib/utils";
import { useState } from "react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const features = [
  {
    icon: FileText,
    color: "blue",
    title: "Document Analyzer",
    description:
      "Upload any PDF, DOCX, or TXT and instantly chat with your document. Get cited answers, summaries, and key insights in seconds.",
    points: ["Instant AI summarization", "Cited Q&A from source text", "PDF · DOCX · TXT support"],
    iconBg: "bg-blue-500/10 border-blue-500/20",
    iconColor: "text-blue-400",
    checkColor: "text-blue-400",
    glow: "bg-blue-600/20",
  },
  {
    icon: Mic,
    color: "purple",
    title: "Voice Generator",
    description:
      "Transform text into natural, expressive speech. 50+ voices, multiple languages, customizable pitch and speed — export in one click.",
    points: ["50+ voices & accents", "Hindi + English support", "WAV/MP3 one-click export"],
    iconBg: "bg-purple-500/10 border-purple-500/20",
    iconColor: "text-purple-400",
    checkColor: "text-purple-400",
    glow: "bg-purple-600/20",
  },
  {
    icon: Bot,
    color: "pink",
    title: "AI Assistant",
    description:
      "Your always-on AI companion for brainstorming, drafting content, debugging code, and solving complex problems in any domain.",
    points: ["Context-aware multi-turn chat", "Code & content generation", "Customizable AI persona"],
    iconBg: "bg-pink-500/10 border-pink-500/20",
    iconColor: "text-pink-400",
    checkColor: "text-pink-400",
    glow: "bg-pink-600/20",
  },
];

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    desc: "For individuals exploring AI tools.",
    features: ["5 document uploads/month", "10 min voice generation/month", "50 AI messages/day"],
    cta: "Get Started Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹499",
    period: "/mo",
    desc: "For creators and professionals.",
    badge: "Most Popular",
    features: ["Unlimited document uploads", "5 hrs voice generation/month", "Unlimited AI messages", "Priority processing", "API access"],
    cta: "Start Pro Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For teams and organizations.",
    features: ["Everything in Pro", "Custom voice cloning", "SSO & team management", "Dedicated support", "99.99% SLA"],
    cta: "Contact Sales",
    highlight: false,
  },
];

const faqs = [
  {
    q: "What file formats does the Document Analyzer support?",
    a: "JanshoAI supports PDF, DOCX, and TXT files. You can upload documents up to 50MB and get instant AI-powered analysis with cited answers.",
  },
  {
    q: "How realistic are the generated voices?",
    a: "Our voice engine uses state-of-the-art neural TTS models producing speech nearly indistinguishable from a human. Choose from 50+ voices across multiple accents including Indian English and Hindi.",
  },
  {
    q: "Is my data private and secure?",
    a: "Yes. All documents and data are encrypted at rest (AES-256) and in transit (TLS 1.3). Your content is never used to train our models without explicit permission.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Absolutely. No lock-in contracts. Cancel your Pro subscription at any time and you'll retain access until the end of your billing cycle.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes! The Starter plan is permanently free with generous limits — no credit card required to sign up.",
  },
];

/* ─────────────────────────────────────────
   FAQ ITEM
───────────────────────────────────────── */
const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("border rounded-xl transition-all duration-300 overflow-hidden", open ? "bg-zinc-900/50 border-purple-500/30" : "bg-zinc-900/20 border-white/5 hover:border-white/10")}>
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full px-6 py-5 text-left gap-4">
        <span className={cn("font-medium transition-colors text-base", open ? "text-white" : "text-zinc-300")}>{q}</span>
        <ChevronDown className={cn("w-5 h-5 text-zinc-500 flex-shrink-0 transition-transform duration-300", open && "rotate-180 text-purple-400")} />
      </button>
      <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", open ? "max-h-48 opacity-100" : "max-h-0 opacity-0")}>
        <p className="px-6 pb-5 text-zinc-400 leading-relaxed text-sm">{a}</p>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050508] text-white font-sans overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-100">
      <Navbar />

      {/* ── HERO ────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-sm text-zinc-300">Trusted by <span className="text-purple-300 font-semibold">500+</span> professionals</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-6">
              One Platform.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-blue-400">
                Three AI Superpowers.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Analyze documents, generate realistic speech, and chat with AI — all in one seamless workspace. No juggling between apps.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white h-13 px-8 text-base font-semibold shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 active:scale-95 group"
                onClick={() => navigate("/register")}
              >
                <Sparkles className="mr-2 w-4 h-4" />
                Start for Free
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-zinc-700 bg-transparent text-white hover:bg-white/5 h-13 px-8 text-base transition-all hover:border-zinc-500"
                onClick={() => { const el = document.getElementById("features"); el?.scrollIntoView({ behavior: "smooth" }); }}
              >
                See How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[["1K+", "Active Users"], ["1M+", "Words Processed"], ["99.9%", "Uptime"], ["20+", "AI Voices"]].map(([val, label]) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold text-white">{val}</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="mt-20 relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-purple-600/10 rounded-3xl blur-2xl scale-95 -z-10" />
            <div className="rounded-2xl border border-white/10 bg-[#0A0A10] overflow-hidden shadow-2xl">
              {/* Window bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/5 bg-white/[0.02]">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <div className="flex-1 mx-4">
                  <div className="h-5 bg-white/5 rounded-md max-w-xs mx-auto flex items-center justify-center">
                    <span className="text-xs text-zinc-600">app.janshoai.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <img src={LogoImage} alt="JanshoAI" className="h-5 md:h-6 w-auto object-contain" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 md:p-8">
                {features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.title} className={cn("rounded-xl border p-5 group hover:scale-[1.02] transition-all duration-300", f.iconBg)}>
                      <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-3", f.iconBg)}>
                        <Icon className={cn("w-5 h-5", f.iconColor)} />
                      </div>
                      <h4 className="text-white font-semibold mb-1.5 text-sm">{f.title}</h4>
                      <div className="space-y-1.5">
                        <div className="h-1.5 bg-white/10 rounded-full w-full" />
                        <div className="h-1.5 bg-white/5 rounded-full w-3/4" />
                        <div className="h-1.5 bg-white/5 rounded-full w-1/2" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────── */}
      <section id="features" className="py-28 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-5">
              Features
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Everything you need, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">nothing you don't</span>
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Three production-grade AI tools working in harmony, so you stay in flow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className={cn("relative rounded-2xl border p-7 group hover:-translate-y-1 transition-all duration-300", f.iconBg)}>
                  <div className={cn("absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none", f.glow)} />
                  <div className={cn("w-12 h-12 rounded-xl border flex items-center justify-center mb-5", f.iconBg)}>
                    <Icon className={cn("w-6 h-6", f.iconColor)} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-5">{f.description}</p>
                  <ul className="space-y-2.5">
                    {f.points.map((p, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-zinc-300">
                        <CheckCircle2 className={cn("w-4 h-4 flex-shrink-0", f.checkColor)} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* How it works strip */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { n: "01", t: "Upload or Type", d: "Drop your document or type your text directly into the workspace." },
              { n: "02", t: "Choose Your Tool", d: "Select Doc Analyzer, Voice Generator, or AI Assistant based on your need." },
              { n: "03", t: "Get Results Instantly", d: "Receive cited answers, downloadable audio, or AI-crafted content in seconds." },
            ].map((s) => (
              <div key={s.n} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 mb-3">{s.n}</div>
                <h4 className="text-white font-semibold mb-2">{s.t}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────── */}
      <section id="pricing" className="py-28 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-5">
              Pricing
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Start free, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">scale as you grow</span>
            </h2>
            <p className="text-zinc-400">No hidden fees. No credit card required.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div key={i} className={cn("relative rounded-2xl border p-7 flex flex-col transition-all duration-300 hover:-translate-y-1", plan.highlight ? "bg-gradient-to-b from-purple-900/30 to-zinc-950 border-purple-500/40 shadow-2xl shadow-purple-500/20" : "bg-zinc-900/20 border-white/10 hover:border-white/20")}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-bold rounded-full">{plan.badge}</span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-1">{plan.name}</h3>
                  <p className="text-zinc-500 text-xs mb-4">{plan.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    {plan.period && <span className="text-zinc-500 text-sm">{plan.period}</span>}
                  </div>
                </div>
                <ul className="space-y-2.5 mb-7 flex-1">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-zinc-400">
                      <div className={cn("w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0", plan.highlight ? "bg-purple-500/20 text-purple-400" : "bg-white/5 text-zinc-500")}>
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button
                  className={cn("w-full rounded-full h-10 font-medium text-sm", plan.highlight ? "bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white shadow-lg shadow-purple-500/20" : "border border-zinc-700 bg-transparent text-zinc-300 hover:bg-white/5 hover:text-white")}
                  onClick={() => navigate(plan.highlight ? "/register" : "/contactUs")}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-zinc-600 text-sm">
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-yellow-500" /> Instant setup</span>
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-green-500" /> Bank-grade encryption</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────── */}
      <section id="faq" className="py-28 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-5">
              FAQ
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">questions</span>
            </h2>
            <p className="text-zinc-400">Everything you need to know about JanshoAI.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────── */}
      <section id="contact" className="py-28 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-5">
              Contact
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">get in touch</span>
            </h2>
            <p className="text-zinc-400">We're here to help. Message us and we'll reply within 24 hours.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Info */}
            <div className="lg:col-span-2 space-y-5">
              {[
                { icon: Mail, label: "Email", value: "ommistry1376@gmail.com", href: "mailto:ommistry1376@gmail.com", color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
                { icon: MapPin, label: "Location", value: "Vadodara, Gujarat, India", href: "#", color: "text-pink-400", bg: "bg-pink-500/10 border-pink-500/20" },
              ].map((info) => {
                const Icon = info.icon;
                return (
                  <a key={info.label} href={info.href} className={cn("flex items-center gap-4 p-4 rounded-xl border transition-opacity hover:opacity-80", info.bg)}>
                    <div className="w-10 h-10 rounded-lg bg-black/30 flex items-center justify-center flex-shrink-0">
                      <Icon className={cn("w-5 h-5", info.color)} />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 uppercase tracking-wider">{info.label}</div>
                      <div className="text-white text-sm font-medium">{info.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-zinc-900/30 border border-white/10 rounded-2xl p-7">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-400">First Name</label>
                    <input className="w-full h-11 bg-black/40 border border-white/10 text-white placeholder:text-zinc-600 rounded-xl px-4 text-sm focus:outline-none focus:border-purple-500 transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-400">Last Name</label>
                    <input className="w-full h-11 bg-black/40 border border-white/10 text-white placeholder:text-zinc-600 rounded-xl px-4 text-sm focus:outline-none focus:border-purple-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-400">Email</label>
                  <input type="email" className="w-full h-11 bg-black/40 border border-white/10 text-white placeholder:text-zinc-600 rounded-xl px-4 text-sm focus:outline-none focus:border-purple-500 transition-colors" placeholder="you@example.com" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-400">Message</label>
                  <textarea className="w-full min-h-[110px] bg-black/40 border border-white/10 text-white placeholder:text-zinc-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors resize-y" placeholder="How can we help?" />
                </div>
                <Button className="w-full h-11 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all group">
                  <Send className="mr-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto bg-zinc-900/40 border border-white/10 rounded-3xl p-10 md:p-16 backdrop-blur-xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              Ready to supercharge
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">your workflow?</span>
            </h2>
            <p className="text-zinc-400 mb-10 max-w-lg mx-auto">Join 10,000+ professionals using JanshoAI to work smarter, faster, every day.</p>
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white h-14 px-10 text-base font-semibold shadow-2xl shadow-purple-500/30 hover:scale-105 transition-all group"
              onClick={() => navigate("/register")}
            >
              <Sparkles className="mr-2 w-4 h-4" />
              Get Started Free
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="mt-5 text-xs text-zinc-600">No credit card required · Cancel anytime · Free forever plan</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────── */}
      <footer className="border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="flex items-center mb-5">
                <img
                  src={LogoImage}
                  alt="JanshoAI"
                  className="h-10 md:h-11 w-auto object-contain"
                />
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mb-6">
                Unified AI tools for document analysis, voice generation, and intelligent chat — built for the modern professional.
              </p>
              <div className="flex gap-3">
                {[{ icon: Twitter, label: "Twitter" }, { icon: Github, label: "GitHub" }, { icon: Linkedin, label: "LinkedIn" }].map(({ icon: Icon, label }) => (
                  <a key={label} href="#" aria-label={label} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Icon className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="md:col-span-2">
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Product</h4>
              <ul className="space-y-2.5 text-sm text-zinc-500">
                {["#features", "#pricing", "#faq", "#contact"].map((href) => (
                  <li key={href}>
                    <button onClick={() => { const el = document.getElementById(href.replace("#", "")); el?.scrollIntoView({ behavior: "smooth" }); }} className="hover:text-white transition-colors capitalize">
                      {href.replace("#", "")}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-2.5 text-sm text-zinc-500">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
                  <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="mailto:ommistry1376@gmail.com" className="hover:text-white transition-colors break-all">ommistry1376@gmail.com</a></li>
                <li>Vadodara, Gujarat, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-7 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-zinc-600">
            <span>&copy; {new Date().getFullYear()} JanshoAI. All rights reserved. Made with ❤️ in India.</span>
            <div className="flex gap-5">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
