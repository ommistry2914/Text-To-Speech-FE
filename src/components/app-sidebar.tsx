import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { routes } from "@/data/sidebarData";
import fullLogo from "../assets/images/janshoai-logo-2-bg-dark.png";
import { Separator } from "./ui/separator";
import { useAppSelector } from "@/slice/hook";
import { cn } from "@/lib/utils";
import {
  Home,
  Settings,
  ShieldCheck,
  User,
  FileText,
  Mic,
  Bot,
  Mail,
  X,
  Sparkles,
} from "lucide-react";
import { Button } from "./ui/button";

const iconMap: Record<string, React.ElementType> = {
  Home,
  Setting: Settings,
  "Super Admin Setting": ShieldCheck,
  "User Setting": User,
  "Contact Us": Mail,
};

interface PreviewModalData {
  title: string;
  icon: React.ElementType;
  color: string;
  bg: string;
  description: string;
}

export function AppSidebar({ ...props }) {
  const user = useAppSelector((state) => state.auth.user);
  const location = useLocation();
  const navigate = useNavigate();
  const [previewModal, setPreviewModal] = useState<PreviewModalData | null>(null);

  if (!user) return null;

  const filteredRoutes = routes.filter((route) =>
    route.allowedRoles.includes(user.role)
  );

  const dashboardUrl = user.role === "superAdmin" ? "/superDashboard" : "/userDashboard";
  const isVoiceActive = location.pathname === "/userDashboard" || location.pathname === "/superDashboard";

  return (
    <>
      <Sidebar
        {...props}
        className="border-r border-sidebar-border bg-sidebar"
      >
        <div className="h-full flex flex-col bg-sidebar text-sidebar-foreground">
          {/* Logo — Single clean image with proper size and light/dark contrast */}
          <SidebarHeader className="px-4 py-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild className="hover:bg-sidebar-accent h-12">
                  <Link to={dashboardUrl} className="flex items-center">
                    <img
                      src={fullLogo}
                      alt="JanshoAI"
                      className="h-9 md:h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>

          <Separator className="bg-sidebar-border" />

          {/* AI Tools Vertical Section */}
          <div className="px-3 pt-4 pb-2">
            <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-2">
              AI Tools
            </p>
            <div className="flex flex-col gap-1.5">
              {/* Voice Generator - Active Tool */}
              <Link
                to={dashboardUrl}
                className={cn(
                  "flex items-center gap-3 p-2.5 rounded-xl border transition-all text-left group",
                  isVoiceActive
                    ? "bg-purple-500/10 border-purple-500/30 text-purple-600 dark:text-purple-300 shadow-sm"
                    : "bg-card/50 border-border hover:bg-accent/70 text-foreground"
                )}
              >
                <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/25 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mic className="w-4 h-4 text-purple-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-semibold truncate">Voice Generator</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-medium">
                      Live
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground truncate">Text-to-speech studio</p>
                </div>
              </Link>

              {/* Document Analyzer - Docs (Upcoming / Preview) */}
              <button
                type="button"
                onClick={() =>
                  setPreviewModal({
                    title: "Document Analyzer",
                    icon: FileText,
                    color: "text-blue-500",
                    bg: "bg-blue-500/15 border-blue-500/25",
                    description:
                      "Upload PDFs, research papers, and documents to chat with them in real-time. Request early beta access by contacting us.",
                  })
                }
                className="flex items-center gap-3 p-2.5 rounded-xl border border-border bg-card/50 hover:bg-accent/70 transition-all text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/25 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <FileText className="w-4 h-4 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-semibold truncate">Doc Analyzer</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 font-medium">
                      Preview
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground truncate">Chat with PDFs & docs</p>
                </div>
              </button>

              {/* AI Assistant - Chat (Upcoming / Preview) */}
              <button
                type="button"
                onClick={() =>
                  setPreviewModal({
                    title: "AI Chat Assistant",
                    icon: Bot,
                    color: "text-pink-500",
                    bg: "bg-pink-500/15 border-pink-500/25",
                    description:
                      "Smart conversational AI for research, copywriting, brainstorming, and code assistance. Request early beta access by contacting us.",
                  })
                }
                className="flex items-center gap-3 p-2.5 rounded-xl border border-border bg-card/50 hover:bg-accent/70 transition-all text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-pink-500/15 border border-pink-500/25 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Bot className="w-4 h-4 text-pink-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-semibold truncate">AI Chat Assistant</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-pink-500/15 text-pink-600 dark:text-pink-400 font-medium">
                      Preview
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground truncate">Smart conversations</p>
                </div>
              </button>

              {/* Contact Us - Support link right in vertical tools */}
              <Link
                to="/contactUs"
                className={cn(
                  "flex items-center gap-3 p-2.5 rounded-xl border transition-all text-left group",
                  location.pathname === "/contactUs"
                    ? "bg-primary/10 border-primary/30 text-primary shadow-sm"
                    : "bg-card/50 border-border hover:bg-accent/70 text-foreground"
                )}
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-semibold truncate">Contact Us</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-medium">
                      Support
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground truncate">Get help & early access</p>
                </div>
              </Link>
            </div>
          </div>

          <Separator className="bg-sidebar-border mx-3 my-2" style={{ width: "calc(100% - 1.5rem)" }} />

          {/* Navigation Section */}
          <SidebarContent className="flex-1 px-3">
            <SidebarGroup>
              <SidebarGroupLabel className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-1">
                Navigation
              </SidebarGroupLabel>
              <SidebarMenu className="gap-1">
                {filteredRoutes.map((item) => {
                  const Icon = iconMap[item.title] || Home;
                  const isActive = location.pathname === item.url;
                  return (
                    <SidebarMenuItem key={item.url}>
                      <SidebarMenuButton asChild className="px-3 py-2 h-10 rounded-lg">
                        <Link
                          to={item.url}
                          className={cn(
                            "flex items-center gap-3 font-medium text-sm transition-all",
                            isActive
                              ? "bg-primary/10 text-primary font-semibold"
                              : "text-muted-foreground hover:text-foreground hover:bg-accent"
                          )}
                        >
                          <Icon
                            className={cn(
                              "w-4 h-4 flex-shrink-0",
                              isActive ? "text-primary" : "text-muted-foreground"
                            )}
                          />
                          {item.title}
                          {isActive && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>

          {/* Note: Profile/dropdown was removed from bottom of sidebar per request, as it is already present in the top navbar */}

          <SidebarRail />
        </div>
      </Sidebar>

      {/* Early Access / Preview Modal for Docs & Chat */}
      {previewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm rounded-2xl bg-card border border-border p-6 shadow-2xl space-y-4">
            <button
              onClick={() => setPreviewModal(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground rounded-lg p-1 hover:bg-accent transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "w-11 h-11 rounded-xl flex items-center justify-center border",
                  previewModal.bg
                )}
              >
                <previewModal.icon className={cn("w-6 h-6", previewModal.color)} />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">
                  {previewModal.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-medium">
                  <Sparkles className="w-2.5 h-2.5" />
                  Coming Soon
                </span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {previewModal.description}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <Button
                size="sm"
                className="flex-1 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white rounded-xl text-xs gap-1.5"
                onClick={() => {
                  setPreviewModal(null);
                  navigate("/contactUs");
                }}
              >
                <Mail className="w-3.5 h-3.5" />
                Contact for Access
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="rounded-xl text-xs"
                onClick={() => setPreviewModal(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
