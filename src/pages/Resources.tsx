import React from "react";
import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";
import { Search, BookOpen, Video, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";

const Resources = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-12 container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Resource Center</h1>
                    <p className="text-lg text-zinc-400 mb-8">
                        Guides, tutorials, and documentation to help you get the most out of JanshoAI.
                    </p>
                    <div className="relative max-w-xl mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                        <Input
                            className="pl-12 h-14 bg-zinc-900/50 border-white/10 rounded-full text-base focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-zinc-600"
                            placeholder="Search resources, guides, and articles..."
                        />
                    </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-4 mb-20">
                    {["All Resources", "Guides", "Tutorials", "API Docs", "Case Studies"].map((cat, i) => (
                        <button
                            key={cat}
                            className={`px-6 py-2 rounded-full border text-sm font-medium transition-all ${i === 0
                                ? "bg-white text-black border-white"
                                : "bg-transparent text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    <ResourceCard
                        category="Guide"
                        title="Getting Started with Document Analysis"
                        description="Learn how to upload, parse, and query your first PDF document in under 5 minutes."
                        icon={<BookOpen className="w-5 h-5 text-blue-400" />}
                        color="blue"
                    />
                    <ResourceCard
                        category="Tutorial"
                        title="Voice Generation Best Practices"
                        description="Tips and tricks for selecting the right voice emotion and pitch for your content."
                        icon={<Video className="w-5 h-5 text-purple-400" />}
                        color="purple"
                    />
                    <ResourceCard
                        category="Documentation"
                        title="API Integration Guide"
                        description="Complete reference for integrating JanshoAI's capabilities into your own applications."
                        icon={<FileText className="w-5 h-5 text-green-400" />}
                        color="green"
                    />
                    <ResourceCard
                        category="Case Study"
                        title="How TechCorp Saved 20h/Week"
                        description="See how a leading tech firm automated their report summaries using JanshoAI."
                        icon={<BookOpen className="w-5 h-5 text-yellow-400" />}
                        color="yellow"
                    />
                    <ResourceCard
                        category="Guide"
                        title="Advanced Prompt Engineering"
                        description="Master the art of asking the right questions to get better answers from the AI Assistant."
                        icon={<FileText className="w-5 h-5 text-pink-400" />}
                        color="pink"
                    />
                    <ResourceCard
                        category="Tutorial"
                        title="Exporting Audio Formats"
                        description="A quick guide on supported audio formats and how to optimize for quality vs size."
                        icon={<Video className="w-5 h-5 text-cyan-400" />}
                        color="cyan"
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
};

const ResourceCard = ({ category, title, description, icon, color }: { category: string, title: string, description: string, icon: React.ReactNode, color: string }) => {
    return (
        <a href="#" className="group block h-full">
            <div className="h-full bg-zinc-900/30 border border-white/10 p-8 rounded-2xl hover:bg-zinc-900/50 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-${color}-500/10 text-${color}-400 border border-${color}-500/20`}>
                        {category}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        {icon}
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">{title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                    {description}
                </p>
            </div>
        </a>
    )
}

export default Resources;
