"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function handleLogin() {
    if (
      username === "admin" &&
      password === "admin123"
    ) {
      localStorage.setItem("isAdmin", "true");

      router.push("/admin");
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-[400px]">
        <h1 className="text-3xl font-bold mb-6">
          Admin Login
        </h1>

        <input
          placeholder="Username"
          className="border p-3 w-full mb-4"
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full mb-4"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full py-3 rounded"
        >
          Login
        </button>
      </div>
    </main>
  );
}