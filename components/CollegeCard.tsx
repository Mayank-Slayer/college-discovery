"use client";

import Link from "next/link";

type Props = {
  id: string;
  name: string;
  location: string;
  fees: string;
  rating: number;
};

export default function CollegeCard({
  id,
  name,
  location,
  fees,
  rating,
}: Props) {
  async function deleteCollege() {
    if (
      !confirm(`Delete ${name}?`)
    )
      return;

    await fetch("/api/colleges", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    window.location.reload();
  }

  return (
    <div className="card-hover bg-white rounded-2xl p-6 shadow-lg border">
      <h2 className="text-2xl font-bold mb-4">
        {name}
      </h2>

      <div className="space-y-2 text-gray-700">
        <p>📍 {location}</p>
        <p>💰 {fees}</p>
        <p>⭐ {rating}</p>
      </div>

      <div className="flex gap-3 mt-6">
        <Link
          href={`/college/${id}`}
          className="glow-btn bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg"
        >
          Details
        </Link>

        <button
          onClick={deleteCollege}
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}