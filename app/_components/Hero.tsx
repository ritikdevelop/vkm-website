"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div>
      <div className="relative min-h-screen">
        <Image
          src="/images/karmic.png"
          alt="Mystical garden background"
          className="absolute inset-0 object-cover"
          fill
          priority
        />
      </div>
      <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <figure className="text-center">
          <blockquote className="mb-4">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-amber-500">
              "NOTHING WORKS BEYOND SURRENDERING"
            </p>
          </blockquote>
          <figcaption className="text-lg md:text-xl text-purple-700">
            -MASTER VANI KABIR
          </figcaption>
        </figure>
      </div>
    </div>
      <div className="justify-center flex font-bold text-2xl mt-5">
        <h2>Our Products</h2>
      </div>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Crystal Column */}
          <div className="overflow-hidden rounded-lg bg-white shadow-md">
            <div className="aspect-square relative">
              <Image
                src="/images/first crystal.png"
                alt="Purple crystal cluster"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="py-4 text-center text-xl font-semibold">Crystal</h3>
          </div>

          {/* Reading Column */}
          <div className="overflow-hidden rounded-lg bg-white shadow-md">
            <div className="aspect-square relative">
              <Image
                src="/images/reading 1.png"
                alt="Wooden runes with carved symbols"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="py-4 text-center text-xl font-semibold">Reading</h3>
          </div>

          {/* Healing Column */}
          <div className="overflow-hidden rounded-lg bg-white shadow-md">
            <div className="aspect-square relative">
              <Image
                src="/images/healing 2.png"
                alt="Singing bowls for healing"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="py-4 text-center text-xl font-semibold">Healing</h3>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Hero;
