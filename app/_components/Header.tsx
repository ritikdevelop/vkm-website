"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Image from "next/image";
import path from "path";
import Link from "next/link";
import { Button } from "@nextui-org/button";

function Header() {
  const MenuList = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Our Story",
      path: "/our-story",
    },
    {
      name: "Talent",
      path: "/talent",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Career",
      path: "/career",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={"/logo.png"} alt="Logo" width={180} height={50} />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center" className="hidden sm:flex">
        {MenuList.map((item, index) => (
          <NavbarItem className="text-medium text-g font-medium hover:text-purple-400 mx-2">
            <Link href={item.path}>{item.name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {MenuList.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link href={item.path}>{item.name}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
