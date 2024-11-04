"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Hero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const images = [
    {
      src: "/images/Mission2.png",
      alt: "Person meditating outdoors in white clothing",
      className: "rounded-lg",
      width: 400,
      height: 600,
    },
    {
      src: "/images/stonehands.png",
      alt: "Hands holding healing crystals",
      className: "rounded-lg",
      width: 400,
      height: 500,
    },
    {
      src: "/images/mission1.png",
      alt: "Person in white traditional clothing meditating indoors",
      className: "rounded-lg",
      width: 400,
      height: 600,
    },
  ];

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
      <div className="bg-blue-50 py-16 md:py-24">
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

      <div className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-medium md:text-xl leading-relaxed">
              When a single soul heals, they break the generational trauma
              attached and save generations to come. We aim to bring this change
              along with the awareness surrounding it, starting with 5M people.
            </p>
          </div>
        </div>
      </div>

      <section className="w-full py-10 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] overflow-hidden group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className={`object-cover transition-transform duration-300 group-hover:scale-105 ${image.className}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
        <h2 className="container mx-auto px-4 text-3xl md:text-4xl font-bold text-center mb-15 py-5">
          WHAT WE DO
        </h2>
      </section>

      <div className="py-5 md:py-10">
        <div className="container mx-auto px-4">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            WHAT WE DO
          </h2> */}

          <div className="bg-white grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-amber-500">
                HEALING IS OUR LANGUAGE
              </h3>

              <blockquote className="text-lg md:text-medium">
                "Healing is never for the weak, it's for the brave-hearted. When
                healing occurs, it's not a solo process; you heal the whole
                lineage with you."
                <footer className="mt-2 font-bold">- Master Vani Kabir</footer>
              </blockquote>

              <p className="text-base md:text-lg leading-relaxed">
                During healing, surrender is key. It starts with cellular
                reprogramming, as each cell in our body contains DNA, carrying
                embedded information. As reprogramming unfolds, our body learns
                the language of restoration and renewal. Healing releases past
                traumas, alleviates present distress, and paves the way for a
                happier, more vibrant future.
              </p>
            </div>

            <div className="relative aspect-square">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/hands.png"
                  alt="Hands with rings showing healing gestures"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Input form Section */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-500 text-center mb-8">
              Amalvee SoulStar! Start Spritual With Us!
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-0 md:flex md:gap-4 items-end"
            >
              <div className="grid md:grid-cols-2 gap-4 flex-1">
                <Input
                  type="text"
                  placeholder="First Name"
                  className="border-amber-500 focus:ring-amber-500"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                  required
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  className="border-amber-500 focus:ring-amber-500"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                  required
                />
              </div>
              <Input
                type="email"
                placeholder="Email Address"
                className="border-amber-500 focus:ring-amber-500 flex-1"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                required
              />
              <Button
                type="submit"
                className="w-full md:w-auto bg-amber-500 hover:bg-amber-500 text-white"
              >
                Sign Up
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
