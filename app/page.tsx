import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-6">
        <section className="text-center max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            College Discovery
          </h1>

          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mt-4">
            Platform
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 mt-8">
            Find, Compare and Explore India's Top Colleges
          </p>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover colleges, compare placements, fees,
            ratings and make smarter career decisions with
            our modern college discovery platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <Link href="/colleges">
              <button className="glow-btn bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg">
                🚀 Explore Colleges
              </button>
            </Link>

            <Link href="/compare">
              <button className="bg-white border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition">
                📊 Compare Colleges
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-3xl font-bold text-blue-600">
                100+
              </h3>
              <p className="text-gray-600 mt-2">
                Colleges Listed
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-3xl font-bold text-green-600">
                50K+
              </h3>
              <p className="text-gray-600 mt-2">
                Student Searches
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-3xl font-bold text-purple-600">
                95%
              </h3>
              <p className="text-gray-600 mt-2">
                Satisfaction Rate
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}