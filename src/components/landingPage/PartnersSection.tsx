import { Bot, CheckCircle2, Sparkles, Zap } from "lucide-react";

const PartnersSection = () => {
    return (
        <section className="py-10 border-y border-white/5 bg-white/[0.02]">
            <div className="container mx-auto px-6 text-center">
                <p className="text-sm text-zinc-500 uppercase tracking-widest mb-6 font-medium">Powering the next generation of work</p>
                <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholders for logos */}
                    <span className="text-lg font-bold text-white flex items-center gap-2"><Sparkles className="w-5 h-5" /> Acme Corp</span>
                    <span className="text-lg font-bold text-white flex items-center gap-2"><Zap className="w-5 h-5" /> BoltShift</span>
                    <span className="text-lg font-bold text-white flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> GlobalBank</span>
                    <span className="text-lg font-bold text-white flex items-center gap-2"><Bot className="w-5 h-5" /> Future AI</span>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
