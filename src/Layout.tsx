import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { routes } from "./data/sidebarData";
import { NavUser } from "./components/NavUser";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Layout() {
  const location = useLocation();
  const currentRoute = routes.find((r) => r.url === location.pathname);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col h-screen bg-background">
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-border px-4 sticky top-0 bg-background/95 backdrop-blur-md z-10">
          {/* Left side: Trigger + Breadcrumb */}
          <div className="flex items-center gap-3">
            <SidebarTrigger className="-ml-1 text-muted-foreground hover:text-foreground transition-colors" />
            <Separator
              orientation="vertical"
              className="h-5 bg-border data-[orientation=vertical]:h-5"
            />
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground hidden sm:block">
                JanshoAI
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                /
              </span>
              <h1 className="text-sm font-semibold text-foreground">
                {currentRoute ? currentRoute.title : "Dashboard"}
              </h1>
            </div>
          </div>

          {/* Right side: Theme Toggle + NavUser */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <NavUser />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
