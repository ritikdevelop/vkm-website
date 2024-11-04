"use client";
import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Facebook, Twitter, Youtube } from "lucide-react"
import React from "react"

function Footer() {
  return (
    <footer className="bg-[#d5cdb6]">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* INFO Column */}
          <div>
            <h2 className="font-semibold text-lg mb-4">INFO</h2>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-purple-700">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-purple-700">Contact Us</Link></li>
              <li><Link href="/story" className="hover:text-purple-700">Our Story</Link></li>
            </ul>
          </div>

          {/* TALENT Column */}
          <div>
            <h2 className="font-semibold text-lg mb-4">TALENT</h2>
            <ul className="space-y-2">
              <li><Link href="/join" className="hover:text-purple-700">Join Us</Link></li>
              <li><Link href="/team" className="hover:text-purple-700">Team</Link></li>
            </ul>
          </div>

          {/* BRANDS Column */}
          <div>
            <h2 className="font-semibold text-lg mb-4">BRANDS</h2>
            <ul className="space-y-2">
              <li><Link href="/studio" className="hover:text-purple-700">Vani Kabir Studio</Link></li>
              <li><Link href="/master" className="hover:text-purple-700">Master Vani Kabir</Link></li>
              <li><Link href="/gemstory" className="hover:text-purple-700">Vani Kabir GemStory</Link></li>
              <li><Link href="/foundation" className="hover:text-purple-700">Vani Kabir Foundation</Link></li>
              <li><Link href="/download" className="hover:text-purple-700">Download Vani Kabir Studio</Link></li>
            </ul>
          </div>

          {/* PRESS Column */}
          <div>
            <h2 className="font-semibold text-lg mb-4">PRESS</h2>
            <ul className="space-y-2">
              <li><Link href="/media" className="hover:text-purple-700">Media</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">Copyright © 2024 Vani Kabir Multiverse</p>
            
            <Image
              src="/logo.png"
              alt="Vani Kabir Multiverse"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
            
            <div className="flex items-center gap-4">
              <Link href="https://instagram.com" className="hover:text-purple-700">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="hover:text-purple-700">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://facebook.com" className="hover:text-purple-700">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="hover:text-purple-700">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://youtube.com" className="hover:text-purple-700">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;