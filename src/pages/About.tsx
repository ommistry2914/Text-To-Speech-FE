import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";
import { Users, Globe, Award, Zap } from "lucide-react";

const About = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Revolutionizing <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                            Content Interaction
                        </span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        JanshoAI is on a mission to democratize advanced AI tools, empowering individuals and businesses to analyze, create, and communicate faster than ever.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 border-y border-white/5 bg-white/[0.02]">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">10k+</div>
                        <div className="text-zinc-500 uppercase text-sm tracking-wider">Users Active</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">50M+</div>
                        <div className="text-zinc-500 uppercase text-sm tracking-wider">Words Processed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                        <div className="text-zinc-500 uppercase text-sm tracking-wider">Uptime</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">24/7</div>
                        <div className="text-zinc-500 uppercase text-sm tracking-wider">AI Support</div>
                    </div>
                </div>
            </section>

            {/* Our Story / Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Built for the Future of Work</h2>
                            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                                <p>
                                    Founded in 2024, our team realized that while AI models were getting smarter, the tools to use them remained clunky and disconnected.
                                </p>
                                <p>
                                    We set out to build a unified platform where document analysis, voice synthesis, and intelligent conversation happen seamlessly in one place.
                                </p>
                                <p>
                                    Today, we serve thousands of creators, researchers, and professionals who rely on JanshoAI to streamline their daily workflows.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center">
                                <Users className="w-8 h-8 text-purple-400 mb-4" />
                                <h3 className="text-white font-semibold mb-2">User Focused</h3>
                                <p className="text-sm text-zinc-500">Designed with empathy for real user needs.</p>
                            </div>
                            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center translate-y-8">
                                <Globe className="w-8 h-8 text-blue-400 mb-4" />
                                <h3 className="text-white font-semibold mb-2">Global Reach</h3>
                                <p className="text-sm text-zinc-500">Supporting multiple languages and regions.</p>
                            </div>
                            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center -translate-y-8">
                                <Award className="w-8 h-8 text-yellow-400 mb-4" />
                                <h3 className="text-white font-semibold mb-2">Excellence</h3>
                                <p className="text-sm text-zinc-500">Committed to the highest quality outputs.</p>
                            </div>
                            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center">
                                <Zap className="w-8 h-8 text-green-400 mb-4" />
                                <h3 className="text-white font-semibold mb-2">Innovation</h3>
                                <p className="text-sm text-zinc-500">Always pushing the boundaries of AI.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
