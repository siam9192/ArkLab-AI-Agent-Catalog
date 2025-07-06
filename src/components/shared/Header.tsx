import React from "react";
import Container from "../container";
import Link from "next/link";
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

function Header() {
  return (
    <header className="py-5 border-b ">
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-4xl font-medium ">
              <span className="text-primary   font-semibold">Ai</span>Hub
            </h1>
          </Link>
          <div className="flex items-center gap-2 ">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className=" size-12 outline-2 outline-primary outline-offset-1">
                  <AvatarImage src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="size-5 text-text-primary mr-2" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="size-5 text-text-primary mr-2" /> Logout
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  <LogOut className="size-5 text-text-primary mr-2" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
