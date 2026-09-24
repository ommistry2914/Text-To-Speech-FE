import { FileText, Mic, Bot, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
    return (
        <section className="py-24 bg-black relative" id="features">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Core Capabilities
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Discover the three pillars of JanshoAI designed to enhance your productivity and creativity.
                    </p>
                </div>

                <div className="space-y-32">
                    {/* Feature 1: Document Analyzer */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                                <FileText className="w-8 h-8 text-blue-400" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Document Analyzer</h3>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                Upload your complex documents and let our AI break them down for you.
                                Ask specific questions and get answers cited directly from the text.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-zinc-300">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3" />
                                    Instant Summarization
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3" />
                                    Deep Contextual Search
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3" />
                                    Multi-format Support (PDF, DOCX, TXT)
                                </li>
                            </ul>
                            <Button variant="outline" className="rounded-full border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300">
                                Try Analyzer <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                        <div className="order-1 md:order-2 relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-900/20 to-black border border-white/10 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
                                {/* Abstract UI representation */}
                                <div className="absolute inset-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/5 p-6 flex flex-col gap-4">
                                    <div className="h-4 w-1/3 bg-white/10 rounded-full" />
                                    <div className="h-32 w-full bg-white/5 rounded-lg" />
                                    <div className="flex-1" />
                                    <div className="flex gap-2 justify-end">
                                        <div className="h-8 w-8 rounded-full bg-blue-500/20" />
                                        <div className="h-auto w-2/3 bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                                            <div className="h-2 w-full bg-blue-500/20 rounded-full mb-2" />
                                            <div className="h-2 w-2/3 bg-blue-500/20 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2: Voice Generator */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-1 relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-purple-900/20 to-black border border-white/10 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-purple-500/5 group-hover:bg-purple-500/10 transition-colors" />
                                {/* Abstract UI representation */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 rounded-full border-4 border-purple-500/30 flex items-center justify-center relative">
                                        <div className="absolute inset-0 rounded-full border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                                        <Mic className="w-12 h-12 text-purple-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-2">
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20">
                                <Mic className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Voice Generator</h3>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                Transform written text into natural-sounding speech.
                                Select from a variety of voices, adjust pitch, and fine-tune emotion.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-zinc-300">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3" />
                                    Customizable Pitch & Tone
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3" />
                                    Multiple Languages & Accents
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3" />
                                    One-click Audio Export
                                </li>
                            </ul>
                            <Button variant="outline" className="rounded-full border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300">
                                Start Speaking <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Feature 3: Intelligent Assistant */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-6 border border-pink-500/20">
                                <Bot className="w-8 h-8 text-pink-400" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Intelligent Assistant</h3>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                Your personal AI companion for brainstorming, drafting, and problem-solving.
                                Capable of understanding complex queries and providing insightful responses.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-zinc-300">
                                    <CheckCircle2 className="w-5 h-5 text-pink-500 mr-3" />
                                    Context-Aware Conversations
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <CheckCircle2 className="w-5 h-5 text-pink-500 mr-3" />
                                    Code & Content Generation
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <CheckCircle2 className="w-5 h-5 text-pink-500 mr-3" />
                                    24/7 Availability
                                </li>
                            </ul>
                            <Button variant="outline" className="rounded-full border-pink-500/50 text-pink-400 hover:bg-pink-500/10 hover:text-pink-300">
                                Chat Now <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                        <div className="order-1 md:order-2 relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-bl from-pink-900/20 to-black border border-white/10 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-pink-500/5 group-hover:bg-pink-500/10 transition-colors" />
                                {/* Abstract UI representation */}
                                <div className="absolute inset-0 flex flex-col p-8">
                                    <div className="flex gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0" />
                                        <div className="bg-white/10 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                                            <div className="h-2 w-32 bg-white/20 rounded-full mb-2" />
                                            <div className="h-2 w-24 bg-white/20 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="flex gap-4 justify-end mb-4">
                                        <div className="bg-pink-500/20 border border-pink-500/30 rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                                            <div className="h-2 w-40 bg-pink-500/30 rounded-full mb-2" />
                                            <div className="h-2 w-32 bg-pink-500/30 rounded-full" />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-pink-500/20 flex-shrink-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
