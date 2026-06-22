"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import LocationFilter from "@/components/LocationFilter";
import CollegeCard from "@/components/CollegeCard";

export default function CollegesPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [colleges, setColleges] = useState<any[]>([]);

  useEffect(() => {
    async function fetchColleges() {
      const res = await fetch("/api/colleges");
      const data = await res.json();
      setColleges(data);
    }

    fetchColleges();
  }, []);

  const filteredColleges = colleges.filter((college) => {
    const matchesSearch = college.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLocation =
      location === "" || college.location === location;

    return matchesSearch && matchesLocation;
  });

  return (
    <>
      <Navbar />

      <main className="p-10 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-6">
          Colleges
        </h1>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <LocationFilter
          location={location}
          setLocation={setLocation}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredColleges.map((college: any, index: number) => (

            <CollegeCard
             key={college.id}
             id={college.id}
             name={college.name}
             location={college.location}
             fees={college.fees}
             rating={college.rating}
            />


          ))}
        </div>
      </main>
    </>
  );
}