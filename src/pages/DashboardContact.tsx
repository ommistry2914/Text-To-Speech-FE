import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  FileText,
  Bot,
  Sparkles,
} from "lucide-react";
import { useAppSelector } from "@/slice/hook";

export default function DashboardContact() {
  const user = useAppSelector((state) => state.auth.user);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 py-2">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-3 border border-purple-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          Support & Early Access
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Contact Us
        </h1>
        <p className="text-muted-foreground text-sm mt-1 max-w-2xl">
          Have questions, feedback, or need early access to upcoming features? Our team is here to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Contact Info & Early Access notice */}
        <div className="lg:col-span-5 space-y-4">
          {/* Contact Details Card */}
          <div className="p-5 rounded-2xl border border-border bg-card shadow-sm space-y-4">
            <h2 className="text-base font-semibold text-card-foreground">
              Direct Contact
            </h2>

            <div className="space-y-3">
              <a
                href="mailto:ommistry1376@gmail.com"
                className="flex items-start gap-3 p-3 rounded-xl bg-accent/40 hover:bg-accent transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-purple-500/15 border border-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-600 dark:text-purple-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Email us directly</p>
                  <p className="text-xs sm:text-sm font-medium text-foreground truncate group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    ommistry1376@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-accent/40">
                <div className="w-9 h-9 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-xs sm:text-sm font-medium text-foreground">
                    Vadodara, Gujarat, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-accent/40">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-600 dark:text-emerald-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Response time</p>
                  <p className="text-xs sm:text-sm font-medium text-foreground">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Features Early Access Info */}
          <div className="p-5 rounded-2xl border border-purple-500/25 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 shadow-sm space-y-3">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-500" />
              Upcoming AI Tools
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We are actively developing the <strong>Document Analyzer</strong> and <strong>AI Chat Assistant</strong>. Request early preview access by dropping us a message!
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-foreground/80">
                <FileText className="w-3.5 h-3.5 text-blue-500" />
                <span>Document Analyzer — PDF & Doc Q&A</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-foreground/80">
                <Bot className="w-3.5 h-3.5 text-pink-500" />
                <span>AI Chat Assistant — Multipurpose AI workspace</span>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7">
          <div className="p-6 rounded-2xl border border-border bg-card shadow-sm h-full flex flex-col">
            <h2 className="text-base font-semibold text-card-foreground mb-1">
              Send a Message
            </h2>
            <p className="text-xs text-muted-foreground mb-5">
              Fill in the form below and we will get back to you shortly.
            </p>

            {submitted ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs text-muted-foreground max-w-sm">
                  Thank you for reaching out. We have received your inquiry and will respond to{" "}
                  <span className="font-medium text-foreground">{formData.email}</span> within 24 hours.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ ...formData, subject: "", message: "" });
                  }}
                  className="rounded-full mt-2"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">Your Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="h-10"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">Email Address *</label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="h-10"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground">Subject</label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g., Feature inquiry, Early access to Docs Analyzer"
                    className="h-10"
                  />
                </div>

                <div className="space-y-1.5 flex-1 flex flex-col">
                  <label className="text-xs font-medium text-foreground">Message *</label>
                  <Textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                    className="resize-none flex-1 min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white rounded-xl shadow-md gap-2"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
