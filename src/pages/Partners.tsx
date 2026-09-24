import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";

const Partners = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans">
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-6">
                <h1 className="text-4xl font-bold mb-8 text-center">Our Partners</h1>
                <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-16">
                    We collaborate with leading technology companies to bring you the best AI experience.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Partner logos placeholders */}
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="aspect-video bg-zinc-900/50 rounded-xl flex items-center justify-center border border-white/5 hover:border-purple-500/30 transition-colors">
                            <span className="text-zinc-500 font-bold">Partner {i}</span>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Partners;
