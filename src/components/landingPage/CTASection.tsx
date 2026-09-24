import { Button } from "@/components/ui/button";

const CTASection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-black to-black pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-zinc-900/50 border border-white/10 rounded-3xl p-8 md:p-16 text-center backdrop-blur-xl">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to streamline your work?
                    </h2>
                    <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
                        Join JanshoAI today and experience the future of document interaction and productivity.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="rounded-full bg-white text-black hover:bg-zinc-200 h-14 px-8 text-lg font-semibold">
                            Start for Free
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg border-white/20 hover:bg-white/10 text-white">
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
