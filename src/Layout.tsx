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

export default function Layout() {
  const location = useLocation();
  const currentRoute = routes.find((r) => r.url === location.pathname);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col h-screen bg-white">
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4 sticky top-0 bg-white z-10">
          {/* Left side: Trigger + Title */}
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />

            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />

            <h1 className="text-lg font-medium">
              {currentRoute ? currentRoute.title : ""}
            </h1>
          </div>

          {/* Right side: NavUser */}
          <div className="flex items-center gap-2">
            <NavUser />
          </div>
        </header>
        <div className="flex-1 flex-col overflow-y-auto p-5">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
