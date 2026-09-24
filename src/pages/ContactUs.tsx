import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone, Send, Twitter, Linkedin, Github } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email us",
    value: "ommistry1376@gmail.com",
    href: "mailto:ommistry1376@gmail.com",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "Vadodara, Gujarat, India",
    href: "#",
    color: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/20",
  },
];

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      <Navbar />

      <section className="pt-36 pb-24 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
            Contact Us
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            We'd love to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              hear from you
            </span>
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Our team is available 24/7. Drop us a message and we'll get back to
            you within 24 hours.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <a
                key={i}
                href={info.href}
                className={`flex flex-col items-center text-center p-6 rounded-2xl ${info.bg} border hover:opacity-80 transition-opacity`}
              >
                <div className="w-12 h-12 rounded-xl bg-black/30 flex items-center justify-center mb-4">
                  <Icon className={`w-6 h-6 ${info.color}`} />
                </div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                  {info.label}
                </div>
                <div className="text-white font-medium">{info.value}</div>
              </a>
            );
          })}
        </div>

        {/* Main Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-zinc-900/20 border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden relative">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[100px] -z-10 pointer-events-none" />

          {/* Left Info Side */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Send a message
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>
            </div>

            {/* FAQ link */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
              <h3 className="text-white font-semibold mb-2">Quick answers?</h3>
              <p className="text-zinc-500 text-sm mb-3">
                Check our FAQ for the most common questions about JanshoAI.
              </p>
              <a
                href="/faqs"
                className="text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors"
              >
                View FAQ →
              </a>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-wider mb-3">
                Follow us
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Twitter, label: "Twitter" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Github, label: "GitHub" },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-zinc-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form Side */}
          <div className="lg:col-span-7">
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">
                    First Name
                  </label>
                  <Input
                    className="bg-zinc-900/50 border-white/10 text-white placeholder:text-zinc-600 h-12 rounded-xl focus:border-purple-500"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">
                    Last Name
                  </label>
                  <Input
                    className="bg-zinc-900/50 border-white/10 text-white placeholder:text-zinc-600 h-12 rounded-xl focus:border-purple-500"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">
                  Email
                </label>
                <Input
                  className="bg-zinc-900/50 border-white/10 text-white placeholder:text-zinc-600 h-12 rounded-xl focus:border-purple-500"
                  type="email"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">
                  Subject
                </label>
                <Input
                  className="bg-zinc-900/50 border-white/10 text-white placeholder:text-zinc-600 h-12 rounded-xl focus:border-purple-500"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">
                  Message
                </label>
                <textarea
                  className="w-full min-h-[140px] rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus-visible:outline-none focus:border-purple-500 transition-colors resize-y"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <Button className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/20 transition-all hover:shadow-purple-500/40 hover:scale-[1.01] active:scale-[0.99] group">
                <Send className="mr-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
