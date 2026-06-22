"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(
      localStorage.getItem("isAdmin") === "true"
    );
  }, []);

  function logout() {
    localStorage.removeItem("isAdmin");
    window.location.href = "/";
  }

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 text-white px-8 py-4 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-extrabold"
        >
          🎓 College Discovery
        </Link>

        <div className="flex items-center gap-8">
          <Link href="/">Home</Link>

          <Link href="/colleges">
            Colleges
          </Link>

          <Link href="/compare">
            Compare
          </Link>

          {!isAdmin ? (
            <Link href="/login">
              Admin
            </Link>
          ) : (
            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}