"use client";
import React from "react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import Link from "next/link";

function page() {
  const brands = [
    {
      id: 1,
      color: "#d4af37", // Gold color
      href: "#",
    },
    {
      id: 2,
      color: "#ff7f7f", // Coral color
      href: "#",
    },
    {
      id: 3,
      color: "#d4af37", // Gold color
      href: "#",
    },
    {
      id: 4,
      color: "#ff7f7f", // Coral color
      href: "#",
    },
  ];

  return (
    <div>
      <Header />
      <div className="w-full bg-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#d4af37] mb-8">
            Amalvee
          </h1>
          <p className="text-center text-gray-800 leading-relaxed mb-16">
            Introducing Vani Kabir Multiverse, a visionary company founded in
            2020 by Master Vani Kabir. Serving as a mother company, we oversee
            the operations of two distinct brands: Soul Studio by Vani Kabir and
            Master Vani Kabir. At the heart of our mission lies the profound
            ideology of Master Vani Kabir, centered around the notion of "making
            spirituality simple." With a deep-rooted commitment to simplifying
            spiritual practices and principles, we strive to empower individuals
            on their journey towards inner growth and self-discovery. Through
            Soul Studio, we offer a range of holistic services and products
            designed to nurture the mind, body, and soul. Meanwhile, Master Vani
            Kabir embodies our founder's teachings readings, healings and
            wisdom, providing transformative guidance and mentorship to those
            seeking spiritual enlightenment. Join us on this transformative
            journey as we pave the way for a more accessible and enlightened
            approach to spirituality.
          </p>
        </div>

        {/* Marquee container */}
        <div className="relative w-full overflow-hidden bg-white py-4 border-y">
          {/* First marquee for continuous scroll */}
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-4 text-xl font-medium text-gray-800">
              "Work At The Root, Not The Fruit."
            </span>
            <span className="mx-4 text-xl font-medium text-gray-800">
              "Work At The Root, Not The Fruit."
            </span>
            <span className="mx-4 text-xl font-medium text-gray-800">
              "Work At The Root, Not The Fruit."
            </span>
            <span className="mx-4 text-xl font-medium text-gray-800">
              "Work At The Root, Not The Fruit."
            </span>
          </div>
        </div>
      </div>
      <div className="w-full py-12 bg-[#e6f7f7]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#d4af37]">
            Our Brands
          </h2>
          <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto">
            {brands.map((brand) => (
              <Link
                key={brand.id}
                href={brand.href}
                className="flex flex-col items-center space-y-4 group transition-transform hover:scale-105"
              >
                <svg
                  className="w-24 h-24 md:w-32 md:h-32"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"
                    fill={brand.color}
                  />
                  <path
                    d="M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z"
                    fill={brand.color}
                  />
                  <path
                    d="M50 35c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 20c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"
                    fill={brand.color}
                  />
                </svg>
                <span
                  className="text-xl font-bold tracking-wider"
                  style={{ color: brand.color }}
                >
                  EXPLORE
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/*//* Footer Section */}
      <Footer />
    </div>
  );
}

export default page;
