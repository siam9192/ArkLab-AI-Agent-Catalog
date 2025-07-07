"use client";
import React from "react";
import { LogOut, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";

function HeaderProfileDropdown() {
  const { data } = useSession();
  const { name, email, image } = data!.user!;
  return (
    <div className="flex items-center gap-2 ">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className=" size-10 md:size-12 outline-2 outline-primary outline-offset-1">
            <AvatarImage src={image || ""} />
            <AvatarFallback>{name ? name[0] : "N"}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="text-lg">My Account</DropdownMenuLabel>
          <DropdownMenuLabel className="py-0 text-sm">{name}</DropdownMenuLabel>
          <DropdownMenuLabel className="py-0 text-xs">{email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="size-5 text-text-primary mr-2" /> Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="size-5 text-text-primary mr-2" /> Settings
          </DropdownMenuItem>
          <DropdownMenuItem variant="destructive" onClick={() => signOut()}>
            <LogOut className="size-5 text-text-primary mr-2" /> Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default HeaderProfileDropdown;
