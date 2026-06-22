"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function ComparePage() {
  const [colleges, setColleges] = useState<any[]>([]);
  const [college1, setCollege1] = useState("");
  const [college2, setCollege2] = useState("");

  useEffect(() => {
    async function fetchColleges() {
      const res = await fetch("/api/colleges");
      const data = await res.json();
      setColleges(data);
    }

    fetchColleges();
  }, []);

  const c1 = colleges.find((c) => c.id === college1);
  const c2 = colleges.find((c) => c.id === college2);

  return (
    <>
      <Navbar />

      <main className="p-10 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-8">
          Compare Colleges
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <select
            className="p-3 border rounded"
            value={college1}
            onChange={(e) => setCollege1(e.target.value)}
          >
            <option value="">Select College 1</option>

            {colleges.map((college) => (
              <option
                key={college.id}
                value={college.id}
              >
                {college.name}
              </option>
            ))}
          </select>

          <select
            className="p-3 border rounded"
            value={college2}
            onChange={(e) => setCollege2(e.target.value)}
          >
            <option value="">Select College 2</option>

            {colleges.map((college) => (
              <option
                key={college.id}
                value={college.id}
              >
                {college.name}
              </option>
            ))}
          </select>
        </div>

        {c1 && c2 && (
          <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
            <table className="w-full border">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-3 border">
                    Feature
                  </th>

                  <th className="p-3 border">
                    {c1.name}
                  </th>

                  <th className="p-3 border">
                    {c2.name}
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">
                    Location
                  </td>
                  <td className="border p-3">
                    {c1.location}
                  </td>
                  <td className="border p-3">
                    {c2.location}
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">
                    Fees
                  </td>
                  <td className="border p-3">
                    {c1.fees}
                  </td>
                  <td className="border p-3">
                    {c2.fees}
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">
                    Rating
                  </td>
                  <td className="border p-3">
                    ⭐ {c1.rating}
                  </td>
                  <td className="border p-3">
                    ⭐ {c2.rating}
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">
                    Placement
                  </td>
                  <td className="border p-3">
                    {c1.placement}
                  </td>
                  <td className="border p-3">
                    {c2.placement}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </main>
    </>
  );
}