"use client";
import React from "react";
import Header from "../_components/Header";
import Image from "next/image";
import Footer from "../_components/Footer";
function page() {
  const memories = [
    {
      id: 1,
      src: "/images/mem1.png",
      alt: "Achievement ceremony photo",
      width: 400,
      height: 400,
    },
    {
      id: 2,
      src: "/images/mem2.png",
      alt: "Group photo at an event",
      width: 400,
      height: 400,
    },
    {
      id: 3,
      src: "/images/mem3.png",
      alt: "Graduation ceremony photo",
      width: 400,
      height: 400,
    },
    {
      id: 4,
      src: "/images/mem4.jpg",
      alt: "Award ceremony photo",
      width: 400,
      height: 400,
    },
    {
      id: 5,
      src: "/images/mem5.jpeg",
      alt: "Professional event photo",
      width: 400,
      height: 400,
    },
    {
      id: 6,
      src: "/images/mem6.png",
      alt: "Casual photo",
      width: 400,
      height: 400,
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has text.",
      author: "ABC",
    },
    {
      id: 2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has text.",
      author: "ABC",
    },
    {
      id: 3,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has text.",
      author: "ABC",
    },
    // {
    //   id: 4,
    //   text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has text.",
    //   author: "ABC",
    // },
    // {
    //   id: 5,
    //   text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has text.",
    //   author: "ABC",
    // },
    // {
    //   id: 6,
    //   text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has text.",
    //   author: "ABC",
    // },
  ];

  return (
    <div>
      <Header />
      <div className="py-8 md:py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-wide text-[#C5B783]">
            MEET OUR MASTER
          </h2>
        </div>
      </div>
      <div className="py-10 md:py-18 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6 mx-auto container px-4">
              <p className="text-medium leading-relaxed">
                Master Vani Kabir is a global award winning Spiritualist,
                Healer, Author and a Cause Driven Entrepreneur, who with her
                access to the ancient and intergalactic wisdom strives to make
                spirituality simple for the world through her Readings and
                Healings. With numerous accolades gracing her name including an
                Honorary Doctorate Degree from the United Nations Organization,
                Geneva, Master Dr. Vani Kabir aims to provide solace and help to
                all those who seek it.
              </p>

              <p className="text-medium leading-relaxed">
                Her transformation and the spiritual awakening journey from the
                Divorce Monk, to the Modern Sufi to Master Vani Kabir now
                continues to be a beacon of inspiration for many.
              </p>

              <p className="text-medium leading-relaxed">
                Born and raised in Delhi, Master Vani Kabir got married at a
                tender age of 19. The union exacerbated with the passage of
                time. After 4 years into the turbulent marriage at the age of
                23, she had her firstborn Kabir. Few years down the lane, the
                situation heightened to an extent of a divorce. At 28, Master
                Vani Kabir embraced single parenthood and little did she know
                that her journey had just begun.
              </p>

              <p className="text-medium leading-relaxed italic">
                In her own words, ' we were on a vacation and it was our last
                straw before making the decision. I remember I was walking with
                Kabir in one of the castles of Scotland and afar I noticed a
                woman sitting down with a few stones in front of her. Intrigued
                I approached her and asked what was she doing, she replied she
                was a rune reader and those stones her were runes. She told how
                these were powerful ancient symbols of knowledge and began
                talking about them. At last she mentioned that I should start
                reading them.
              </p>

              <p className="text-medium leading-relaxed italic">
                I listened to her in silence, captivated by her voice and
                knowledge, yet I thought I should leave since I had no resonance
                with her. As I bid her adieu and left, I thought of asking one
                where to find these runes, when I turned all I saw was grass and
                not a sight of anybody'.
              </p>
            </div>

            {/* Image */}
            <div className="relative aspect-[3/4] md:sticky md:top-8">
              <Image
                src="/images/img1.png"
                alt="Master Vani Kabir in a white dress reaching towards palm leaves"
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/*//! Gallery Section */}

      <div className="w-full py-12 bg-[#e6f7f7]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#d4af37]">
            MASTER MEMORIES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {memories.map((memory) => (
              <div
                key={memory.id}
                className="relative aspect-square overflow-hidden rounded-lg transition-transform hover:scale-105"
              >
                <Image
                  src={memory.src}
                  alt={memory.alt}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*//! Testimonial section */}
      <div className="w-full py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-[#d4af37]">
              TESTIMONIALS
            </h2>
            <p className="text-xl text-[#d4af37]">What our Soul Stars say!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col items-center p-6 bg-[#e6f7f7] rounded-lg space-y-4"
              >
                <div className="relative w-24 h-24">
                  <Image
                    src="/placeholder.svg"
                    alt="Avatar"
                    className="rounded-full bg-[#d4af37]"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <blockquote className="text-center text-gray-600">
                  {testimonial.text}
                </blockquote>
                <cite className="text-[#d4af37] font-medium">
                  "{testimonial.author}"
                </cite>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*//! Footer Section */}
      <Footer />
    </div>
  );
}

export default page;
