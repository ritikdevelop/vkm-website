"use client";
import React from "react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

interface Job {
  title: string;
  location: string;
  department: string;
  link: string;
}

function page() {
  const jobs: Job[] = [
    {
      title: "Full Stack Developer - Project Alpha",
      location: "Gurgaon, India",
      department: "Engineering",
      link: "#",
    },
    {
      title: "iOS/Swift Developer - Project Alpha",
      location: "Gurgaon, India",
      department: "Engineering",
      link: "#",
    },
    {
      title: "JavaScript Developer",
      location: "Gurgaon, India",
      department: "Engineering",
      link: "#",
    },
    {
      title: "Ruby on Rails Programmer",
      location: "Remote",
      department: "Engineering",
      link: "#",
    },
    {
      title: "Senior QA Engineer",
      location: "Gurgaon, India",
      department: "Engineering",
      link: "#",
    },
    {
      title: "B2B Marketing Director",
      location: "Gurgaon, India",
      department: "Marketing",
      link: "#",
    },
    {
      title: "Content Marketing Manager - Video",
      location: "Gurgaon, India",
      department: "Marketing",
      link: "#",
    },
    {
      title: "Marketing Intern",
      location: "Gurgaon, India",
      department: "Marketing",
      link: "#",
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex min-h-screen flex-col">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
          <div
            className="h-[400px] w-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/placeholder.svg?height=400&width=1200')",
            }}
          >
            <div className="container relative flex h-full flex-col items-center justify-center text-center text-white">
              <h1 className="mb-4 text-5xl font-bold">Join the Team</h1>
              <p className="text-xl">
                Relaxed Atmosphere, Best Working Environment, Top Notch Projects
              </p>
            </div>
          </div>
        </div>

        <main className="flex-1 py-12">
          <div className="container">
            <div className="mb-8">
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
                Available Jobs
              </h2>
              <div className="flex justify-center">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="sf">Gurgaon, India</SelectItem>
                    <SelectItem value="toronto">Gurgaon, India</SelectItem>
                    <SelectItem value="london">Gurgaon, India</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-12">
              {["Engineering", "Marketing"].map((department) => (
                <section key={department}>
                  <h3 className="mb-6 text-2xl font-bold text-gray-900">
                    {department}
                  </h3>
                  <div className="divide-y divide-gray-200 rounded-lg border border-gray-200">
                    {jobs
                      .filter((job) => job.department === department)
                      .map((job, index) => (
                        <Link
                          key={index}
                          href={job.link}
                          className="flex items-center justify-between p-6 transition-colors hover:bg-gray-50"
                        >
                          <div className="text-lg font-medium text-primary">
                            {job.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {job.location}
                          </div>
                        </Link>
                      ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </main>
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default page;
