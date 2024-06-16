"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { LucideMenu } from "lucide-react";
import { MenuItem } from "@/types/MenuItem";
import "../../styles/globals.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    submenus: [
      {
        id: 2,
        title: "Home 1",
        link: "/home-1",
      },
      {
        id: 3,
        title: "Home 2",
        link: "/home-2",
      },
      {
        id: 4,
        title: "Home 3",
        link: "/home-3",
      },
    ],
  },
  {
    id: 5,
    title: "Pages",
    submenus: [
      {
        id: 6,
        title: "About",
        link: "/about",
      },
      {
        id: 7,
        title: "Team",
        link: "/team",
      },
      {
        id: 8,
        title: "Quotation",
        link: "/quotation",
      },
    ],
  },
  {
    id: 10,
    title: "Services",
    submenus: [
      {
        id: 11,
        title: "Services",
        link: "/services",
      },
      {
        id: 12,
        title: "Service Details",
        link: "/service-details",
      },
    ],
  },
  {
    id: 13,
    title: "Pricing",
    link: "/pricing",
  },
  {
    id: 14,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 15,
    title: "Contact Us",
    link: "/contact-us",
  },
];

const Navbar = () => {
  return (
    <div className="w-full nav-shadow ">
      <nav className="relative w-8/12 mx-auto flex items-center justify-center  py-5 md:justify-between">
        <Image
          src="/TeaCollection/logo-img.jpg"
          height={20}
          width={150}
          alt="logo"
        />
        <Button
          className="absolute left-10 md:hidden"
          variant={"ghost"}
          size={"icon"}
        >
          <LucideMenu className="h-6 w-6" />
        </Button>
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {menuItems.map((ni) => (
              <NavigationMenuItem key={ni.id}>
                {ni.submenus ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <NavigationMenuTrigger>{ni.title}</NavigationMenuTrigger>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {ni.submenus.map((submenu) => (
                        <DropdownMenuItem key={submenu.id} asChild>
                          <NavigationMenuLink href={submenu.link}>
                            {submenu.title}
                          </NavigationMenuLink>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <NavigationMenuLink
                    href={ni.link}
                    className={navigationMenuTriggerStyle()}
                  >
                    {ni.title}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  );
};

export default Navbar;
