import { Outlet, Link } from "react-router-dom";
import { FileText, Mic, Bot } from "lucide-react";
import LogoImage from "@/assets/images/janshoai-logo-2.png";

const toolCards = [
  {
    icon: FileText,
    iconColor: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    title: "Document Analyzer",
    desc: "Chat with PDFs, extract insights instantly",
  },
  {
    icon: Mic,
    iconColor: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    title: "Voice Generator",
    desc: "Turn text into natural-sounding speech",
  },
  {
    icon: Bot,
    iconColor: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/20",
    title: "AI Assistant",
    desc: "Brainstorm, draft, and solve with AI",
  },
];

function AuthPage() {
  return (
    <div className="flex min-h-screen bg-[#050508] text-white">
      {/* ── Left Brand Panel ── */}
      <div className="hidden xl:flex flex-1 flex-col relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 flex flex-col h-full px-14 py-12 justify-between">
          {/* Logo — Single clean image */}
          <Link to="/" className="flex items-center w-fit">
            <img
              src={LogoImage}
              alt="JanshoAI"
              className="h-9 w-auto object-contain filter contrast-125 brightness-95 dark:contrast-100 dark:brightness-100"
            />
          </Link>

          {/* Main content */}
          <div className="max-w-md my-auto py-8">
            {/* Headline */}
            <h1 className="text-4xl xl:text-5xl font-bold text-white leading-[1.15] mb-5">
              Three AI tools,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-blue-400">
                one workspace.
              </span>
            </h1>

            <p className="text-zinc-400 text-base leading-relaxed mb-8">
              Analyze documents, generate lifelike speech, and get AI
              assistance — all without switching between apps.
            </p>

            {/* Feature cards */}
            <div className="space-y-3">
              {toolCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-colors"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg ${card.bg} border flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className={`w-5 h-5 ${card.iconColor}`} />
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">
                        {card.title}
                      </div>
                      <div className="text-zinc-500 text-xs mt-0.5">
                        {card.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom spacing / placeholder to balance layout */}
          <div className="text-xs text-zinc-600">
            Secure, encrypted authentication
          </div>
        </div>
      </div>

      {/* ── Right Form Panel ── */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-[#08080F] xl:bg-[#050508] relative">
        {/* Mobile glow */}
        <div className="xl:hidden absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[250px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-[400px] relative z-10">
          {/* Mobile Logo — Single clean image */}
          <div className="xl:hidden mb-10 flex items-center justify-center">
            <Link to="/">
              <img
                src={LogoImage}
                alt="JanshoAI"
                className="h-8 w-auto object-contain filter contrast-125 brightness-95 dark:contrast-100 dark:brightness-100"
              />
            </Link>
          </div>

          <Outlet />

          <p className="mt-8 text-center text-xs text-zinc-600">
            By continuing, you agree to our{" "}
            <Link to="#" className="text-zinc-500 hover:text-white underline underline-offset-2 transition-colors">
              Terms
            </Link>{" "}
            and{" "}
            <Link to="#" className="text-zinc-500 hover:text-white underline underline-offset-2 transition-colors">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
