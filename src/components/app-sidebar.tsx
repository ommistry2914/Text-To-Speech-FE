import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import { routes, temRoute } from "@/data/sidebarData";
// import logo from "../assets/images/akinoLogo.svg";
// import logo from "../assets/images/JanshoAI-text-removebg-preview.png";
import logo from "../assets/images/janshoai-logo-2-bg-dark-2.png";
import { Separator } from "./ui/separator";
import { useAppSelector } from "@/slice/hook";
// import { NavUser } from "./NavUser";
// import { NavUser } from "./NavUser";
// import { useSelector } from "react-redux";
// import type { RootState } from "@/slice/store";

export function AppSidebar({ ...props }) {
   const user = useAppSelector((state) => state.auth.user);

  const location = useLocation();

  if(!user) return null;

  const filteredRoutes = routes.filter((route) =>
    route.allowedRoles.includes(user.role)
  );
  return (
    <Sidebar {...props} className="">
      <div className="h-full bg-primary text-secondary flex flex-col">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link to="/" className="flex justify-center">
                  <img src={logo} alt="logo" className=" " />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <Separator />

        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu className="gap-2">
              {filteredRoutes.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton
                    asChild
                    className="text-md  px-4 rounded-md"
                  >
                    <Link
                      to={item.url}
                      className={`font-medium transition-colors ${
                        location.pathname === item.url
                          ? "bg-gray-300 text-black"
                          : "text-black hover:text-gray"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          {/* <NavUser /> */}
        </SidebarFooter>
        <SidebarRail />
      </div>
    </Sidebar>
  );
}
