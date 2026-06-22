"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const admin = localStorage.getItem("isAdmin");

    if (!admin) {
      router.push("/login");
    }
  }, [router]);

  const [form, setForm] = useState({
    name: "",
    location: "",
    fees: "",
    rating: "",
    placement: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/colleges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        rating: Number(form.rating),
      }),
    });

    alert("College Added Successfully");

    setForm({
      name: "",
      location: "",
      fees: "",
      rating: "",
      placement: "",
    });

    window.location.reload();
  }

  return (
    <main className="p-10 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">
        Add College
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          placeholder="College Name"
          className="border p-3 rounded"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder="Location"
          className="border p-3 rounded"
          value={form.location}
          onChange={(e) =>
            setForm({
              ...form,
              location: e.target.value,
            })
          }
        />

        <input
          placeholder="Fees"
          className="border p-3 rounded"
          value={form.fees}
          onChange={(e) =>
            setForm({
              ...form,
              fees: e.target.value,
            })
          }
        />

        <input
          placeholder="Rating"
          className="border p-3 rounded"
          value={form.rating}
          onChange={(e) =>
            setForm({
              ...form,
              rating: e.target.value,
            })
          }
        />

        <input
          placeholder="Placement"
          className="border p-3 rounded"
          value={form.placement}
          onChange={(e) =>
            setForm({
              ...form,
              placement: e.target.value,
            })
          }
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
        >
          Add College
        </button>
      </form>
    </main>
  );
}