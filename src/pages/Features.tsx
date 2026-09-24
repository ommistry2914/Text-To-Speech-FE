import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";
import FeaturesSection from "@/components/landingPage/FeaturesSection";
import { Layers, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 container mx-auto px-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Powerful Capabilities <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        Unified Workflow
                    </span>
                </h1>
                <p className="text-zinc-400 max-w-2xl mx-auto text-lg mb-12">
                    Discover the tools that make JanshoAI the preferred choice for professionals.
                </p>
            </section>

            {/* Core Features Overview (Reused) */}
            <FeaturesSection />

            {/* Additional Technical Features Grid */}
            <section className="py-24 bg-zinc-900/30 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Built for Scale & Performance</h2>
                        <p className="text-zinc-400">Enterprise-ready features straight out of the box.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-black border border-white/10 hover:border-blue-500/30 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-blue-900/20 flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Lightning Fast Processing</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Our optimized inference engine processes documents and generates speech in milliseconds, not seconds.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-black border border-white/10 hover:border-purple-500/30 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-purple-900/20 flex items-center justify-center mb-6">
                                <Layers className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Seamless Integration</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Connect with your favorite tools via our robust API and pre-built connectors for Slack, Notion, and Drive.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-black border border-white/10 hover:border-pink-500/30 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-pink-900/20 flex items-center justify-center mb-6">
                                <Smartphone className="w-6 h-6 text-pink-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Mobile Optimized</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Access your dashboard, analyze docs, and listen to generated audio on the go with our responsive design.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Start building with JanshoAI today</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="h-14 px-8 rounded-full bg-white text-black hover:bg-zinc-200">
                            Get Started Free
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-zinc-700 hover:bg-white/5">
                            Check Pricing
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Features;
