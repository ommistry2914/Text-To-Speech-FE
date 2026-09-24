import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
            <Navbar />

            <section className="pt-32 pb-24 container mx-auto px-6">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in touch</h1>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        We're here to help. Chat to our friendly team 24/7.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-zinc-900/20 border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

                    {/* Info Side */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <p className="text-zinc-400 mb-8">
                                Fill out the form and our team will get back to you within 24 hours.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-zinc-300">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <span>support@janshoai.com</span>
                                </div>
                                <div className="flex items-center gap-4 text-zinc-300">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-4 text-zinc-300">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <span>123 AI Boulevard, Tech City</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {/* Socials placeholder */}
                            <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-white/5 flex items-center justify-center">
                                <span className="sr-only">Twitter</span>
                                <svg className="w-5 h-5 fill-current text-zinc-400" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-white/5 flex items-center justify-center">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="w-5 h-5 fill-current text-zinc-400" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:col-span-7 bg-black/50 p-6 md:p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-300">First Name</label>
                                    <Input className="bg-zinc-900/50 border-white/10 focus:border-purple-500 h-12" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-300">Last Name</label>
                                    <Input className="bg-zinc-900/50 border-white/10 focus:border-purple-500 h-12" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-300">Email</label>
                                <Input className="bg-zinc-900/50 border-white/10 focus:border-purple-500 h-12" type="email" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-300">Message</label>
                                <textarea className="w-full min-h-[150px] rounded-lg border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm ring-offset-background placeholder:text-zinc-600 focus-visible:outline-none focus:border-purple-500 disabled:cursor-not-allowed disabled:opacity-50 resize-y" placeholder="Tell us how we can help..." />
                            </div>
                            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white h-12 rounded-lg font-medium transition-transform active:scale-[0.98]">Send Message</Button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactUs;
