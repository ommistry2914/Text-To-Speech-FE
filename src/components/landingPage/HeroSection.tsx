import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, FileText, Mic } from "lucide-react";
import SymbolLogo from "@/assets/images/janshoai-symbol.png";

const HeroSection = () => {
    return (
        <section className="relative pt-20 pb-32 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-purple-600/20 rounded-[100%] blur-[120px] -z-10 pointer-events-none opacity-60 mix-blend-screen" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none opacity-40" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default animate-fade-in-up">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                        </span>
                        <span className="text-sm font-medium text-purple-100/80 tracking-wide">
                            Power of Three: Analyze, Generate, Chat
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight animate-fade-in-up delay-100">
                        One Platform, <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-blue-300 animate-gradient-x">
                            Three Powerful Tools
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
                        JanshoAI integrates Document Analysis, Voice Generation, and Intelligent Chat into a single seamless workflow. Analyze intricate docs, turn text to lifelike speech, and brainstorm with our AI assistant.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center animate-fade-in-up delay-300">
                        <Button
                            size="lg"
                            className="rounded-full bg-white text-black hover:bg-zinc-200 text-base h-12 px-8 font-semibold transition-transform active:scale-95 duration-200"
                        >
                            Get Started Free
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full border-zinc-800 bg-transparent text-white hover:bg-zinc-900/50 text-base h-12 px-8 transition-all hover:border-zinc-700"
                        >
                            View Demo
                        </Button>
                    </div>
                </div>

                {/* Hero Visual / Dashboard Preview */}
                <div className="mt-20 relative mx-auto max-w-6xl animate-fade-in-up delay-500">
                    <div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] group">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-50" />

                        {/* Mock Interface */}
                        <div className="relative h-full flex flex-col p-6">
                            {/* Header Mock */}
                            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                    </div>
                                    <div className="h-4 w-32 bg-white/10 rounded-full" />
                                </div>
                                <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                                    <Bot className="w-4 h-4 text-purple-400" />
                                </div>
                            </div>

                            {/* Content Mock: Split into 3 columns for 3 tools */}
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Tool 1: Analyzer */}
                                <div className="bg-white/5 rounded-lg border border-white/5 p-4 flex flex-col items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group/card">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform">
                                        <FileText className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <h4 className="text-white font-medium mb-1">Doc Analyzer</h4>
                                    <p className="text-xs text-zinc-500 text-center">Chat with PDFs & Analyze</p>
                                </div>

                                {/* Tool 2: Voice Gen */}
                                <div className="bg-white/5 rounded-lg border border-white/5 p-4 flex flex-col items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group/card">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform">
                                        <Mic className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <h4 className="text-white font-medium mb-1">VoiceGen</h4>
                                    <p className="text-xs text-zinc-500 text-center">Text to Lifelike Speech</p>
                                </div>

                                {/* Tool 3: Chat Assistant */}
                                <div className="bg-white/5 rounded-lg border border-white/5 p-4 flex flex-col items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group/card">
                                    <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform">
                                        <Bot className="w-6 h-6 text-pink-400" />
                                    </div>
                                    <h4 className="text-white font-medium mb-1">AI Assistant</h4>
                                    <p className="text-xs text-zinc-500 text-center">Intelligent Chat Support</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements behind dashboard */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl -z-10" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -z-10" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
