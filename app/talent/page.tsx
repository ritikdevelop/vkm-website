"use client";
import React from 'react'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import Image from "next/image"

function page() {

    const teamMembers = [
        { id: 1, name: "Team Member 1", role: "Role" },
        { id: 2, name: "Team Member 2", role: "Role" },
        { id: 3, name: "Team Member 3", role: "Role" },
        { id: 4, name: "Team Member 4", role: "Role" },
        { id: 5, name: "Team Member 5", role: "Role" },
        { id: 6, name: "Team Member 6", role: "Role" },
        { id: 7, name: "Team Member 7", role: "Role" },
        { id: 8, name: "Team Member 8", role: "Role" },
      ]

  return (
    <div>
      <Header />

      <div className="w-full py-12 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#d4af37]">MEET OUR TEAM</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center space-y-4">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <Image
                  src="/placeholder.svg"
                  alt={member.name}
                  className="rounded-full bg-blue-100"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={member.id <= 4}
                />
              </div>
              <div className="text-center">
                <h3 className="font-medium text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      {/*//* Footer Section */}
      <Footer />
    </div>
  )
}

export default page
