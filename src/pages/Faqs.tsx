import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";
import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, Settings, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const Faqs = () => {
    const [openItem, setOpenItem] = useState<string | null>("item-1");

    const toggleItem = (value: string) => {
        setOpenItem(openItem === value ? null : value);
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans">
            <Navbar />

            <section className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20">
                        <HelpCircle className="w-6 h-6 text-purple-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
                    <p className="text-zinc-400 text-lg">
                        Everything you need to know about the product and billing.
                    </p>
                </div>

                <div className="grid gap-4">
                    <FaqItem
                        question="What specifically can JanshoAI analyze?"
                        answer="JanshoAI can process a wide range of document formats including PDF, DOCX, and TXT. It analyzes structure, semantic meaning, and extracts key entities to allow for intelligent querying and summarization."
                        isOpen={openItem === "item-1"}
                        onClick={() => toggleItem("item-1")}
                        icon={<Shield className="w-5 h-5 text-blue-400" />}
                    />
                    <FaqItem
                        question="How realistic are the generated voices?"
                        answer="Our VoiceGen engine uses state-of-the-art neural networks to produce speech that represents human intonation and emotion. You can choose from over 50+ distinct voices across multiple accents."
                        isOpen={openItem === "item-2"}
                        onClick={() => toggleItem("item-2")}
                        icon={<MessageCircle className="w-5 h-5 text-purple-400" />}
                    />
                    <FaqItem
                        question="Is my data secure and private?"
                        answer="Absolutely. We employ bank-grade AES-256 encryption for encryption at rest and TLS 1.3 for data in transit. Your documents are never used to train our public models without explicit permission."
                        isOpen={openItem === "item-3"}
                        onClick={() => toggleItem("item-3")}
                        icon={<Shield className="w-5 h-5 text-green-400" />}
                    />
                    <FaqItem
                        question="Can I customize the AI Assistant?"
                        answer="Yes, the Intelligent Assistant can be given system prompts to adopt specific personas or follow strict guidelines relevant to your industry or specific use-case."
                        isOpen={openItem === "item-4"}
                        onClick={() => toggleItem("item-4")}
                        icon={<Settings className="w-5 h-5 text-yellow-400" />}
                    />
                    <FaqItem
                        question="What is the difference between Free and Pro?"
                        answer="The Free plan allows for up to 5 document uploads per month and 10 minutes of voice generation. Pro unlocks unlimited uploads, priority processing, and 5 hours of voice generation per month."
                        isOpen={openItem === "item-5"}
                        onClick={() => toggleItem("item-5")}
                        icon={<HelpCircle className="w-5 h-5 text-pink-400" />}
                    />
                </div>

                {/* Support CTA */}
                <div className="mt-20 p-8 rounded-2xl bg-zinc-900 border border-white/10 text-center">
                    <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
                    <p className="text-zinc-400 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    <a href="/contactUs" className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-white text-black font-medium hover:bg-zinc-200 transition-colors">
                        Get in touch
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

const FaqItem = ({ question, answer, isOpen, onClick, icon }: { question: string, answer: string, isOpen: boolean, onClick: () => void, icon?: React.ReactNode }) => {
    return (
        <div className={cn(
            "border rounded-xl transition-all duration-300 overflow-hidden",
            isOpen
                ? "bg-zinc-900/50 border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                : "bg-zinc-900/20 border-white/5 hover:border-white/10"
        )}>
            <button
                onClick={onClick}
                className="flex items-center justify-between w-full p-6 text-left"
            >
                <div className="flex items-center gap-4">
                    {icon && <div className={cn("p-2 rounded-lg bg-white/5 transition-opacity", isOpen ? "opacity-100" : "opacity-60")}>{icon}</div>}
                    <span className={cn("font-medium text-lg transition-colors", isOpen ? "text-white" : "text-zinc-300")}>
                        {question}
                    </span>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-zinc-500 transition-transform duration-300", isOpen && "transform rotate-180 text-purple-400")} />
            </button>
            <div
                className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="px-6 pb-6 pl-[4.5rem] text-zinc-400 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default Faqs;
