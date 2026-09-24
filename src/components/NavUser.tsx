import {
  LogOut,
  Settings,
  User,
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

import { Avatar, AvatarFallback } from "./ui/avatar";
import { useAppDispatch, useAppSelector } from "@/slice/hook";
import { logout } from "@/slice/auth.slice";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export function NavUser() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
          className={cn(
            "flex items-center gap-3 w-full px-3 py-2.5 rounded-xl",
            "hover:bg-accent transition-all duration-200 text-left group"
          )}
        >
          <Avatar className="h-9 w-9 rounded-xl border border-border flex-shrink-0">
            <AvatarFallback className="rounded-xl bg-gradient-to-br from-purple-600 to-violet-600 text-white text-sm font-semibold">
              {initials || "U"}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0 hidden md:block">
            <p className="text-sm font-semibold text-foreground truncate leading-tight">
              {fullName || "User"}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {user?.email || ""}
            </p>
          </div>
          <Settings className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 hidden md:block" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-60 rounded-xl shadow-lg border-border"
        side="top"
        align="start"
        sideOffset={8}
      >
        <DropdownMenuLabel className="p-3 font-normal">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 rounded-xl border border-border">
              <AvatarFallback className="rounded-xl bg-gradient-to-br from-purple-600 to-violet-600 text-white text-sm font-semibold">
                {initials || "U"}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">
                {fullName || "User"}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {user?.email || ""}
              </p>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* Profile Settings and Preferences temporarily disabled per requirement
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="gap-2 cursor-pointer"
            onClick={() => navigate("/userSetting")}
          >
            <User className="w-4 h-4 text-muted-foreground" />
            Profile Settings
          </DropdownMenuItem>
          <DropdownMenuItem
            className="gap-2 cursor-pointer"
            onClick={() => navigate("/setting")}
          >
            <Settings className="w-4 h-4 text-muted-foreground" />
            Preferences
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        */}

        <DropdownMenuItem
          className="gap-2 cursor-pointer text-red-500 focus:text-red-500 focus:bg-red-500/10"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
