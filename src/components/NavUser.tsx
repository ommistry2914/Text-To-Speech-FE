import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useAppDispatch, useAppSelector } from "@/slice/hook";
import { logout } from "@/slice/auth.slice";

// it's use when show in the boottom of the sidebar
// export function NavUser() {
//   const { isMobile } = useSidebar();
//   const dispatch = useAppDispatch();

//   const user = useAppSelector((state) => state.auth.user);

//   const firstName = user?.firstName || "";
//   const lastName = user?.lastName || "";
//   const fullName = `${firstName} ${lastName}`.trim();
//   const initials = (firstName?.[0] || "") + (lastName?.[0] || "");

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   return (
//     <SidebarMenu>
//       <SidebarMenuItem>
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <SidebarMenuButton
//               size="lg"
//               className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
//             >
//               <Avatar className="h-8 w-8 rounded-lg">
//                 {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
//                 <AvatarFallback className="rounded-lg">
//                   {initials}
//                 </AvatarFallback>
//               </Avatar>
//               {/* <div className="grid flex-1 text-left text-sm leading-tight">
//                 <span className="truncate font-medium">{fullName}</span>
//                 <span className="truncate text-xs">{user?.email}</span>
//               </div> */}
//               {/* <ChevronsUpDown className="ml-auto size-4" /> */}
//             </SidebarMenuButton>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent
//             className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
//             side={isMobile ? "bottom" : "right"}
//             align="end"
//             sideOffset={4}
//           >
//             <DropdownMenuLabel className="p-0 font-normal">
//               <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
//                 <Avatar className="h-8 w-8 rounded-lg">
//                   <AvatarImage src={user?.avatar} alt={user?.name} />
//                   <AvatarFallback className="rounded-lg"></AvatarFallback>
//                 </Avatar>
//                 <div className="grid flex-1 text-left text-sm leading-tight">
//                   <span className="truncate font-medium">{fullName}</span>
//                   <span className="truncate text-xs">{user?.email}</span>
//                 </div>
//               </div>
//             </DropdownMenuLabel>
//             {/* <DropdownMenuSeparator />          */}
//             <DropdownMenuItem onClick={handleLogout}>
//               <LogOut />
//               Log out
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </SidebarMenuItem>
//     </SidebarMenu>
//   );
// }

// it's use when show in right side of the the header nav bar
export function NavUser() {
  const { isMobile } = useSidebar();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const firstName = user?.firstName || "";
  const lastName = user?.lastName || "";
  const fullName = `${firstName} ${lastName}`.trim();
  const initials = (firstName?.[0] || "") + (lastName?.[0] || "");

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-3 px-3 py-2 rounded-lg 
                           hover:bg-gray-100 transition"
        >
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarFallback className="rounded-lg">{initials}</AvatarFallback>
          </Avatar>
          {/* <div className="text-left leading-tight hidden sm:block">
            <p className="text-sm font-medium">{fullName}</p>
            <p className="text-xs text-gray-600">{user?.email}</p>
          </div>
          <ChevronsUpDown className="ml-auto size-4" /> */}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="min-w-56 rounded-lg"
        side="bottom"
        align="end"
        sideOffset={6}
      >
        <DropdownMenuLabel className="p-2 font-normal">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarFallback className="rounded-lg">{initials}</AvatarFallback>
            </Avatar>
            <div className="text-sm leading-tight">
              <p className="font-medium">{fullName}</p>
              <p className="text-xs">{user?.email}</p>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
