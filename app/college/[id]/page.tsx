import Navbar from "@/components/Navbar";
import { prisma } from "@/src/lib/prisma";

export default async function CollegeDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const college = await prisma.college.findUnique({
    where: {
      id,
    },
  });

  if (!college) {
    return (
      <>
        <Navbar />

        <main className="p-10">
          <h1 className="text-3xl font-bold">
            College Not Found
          </h1>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100 p-10">
        <h1 className="text-5xl font-bold mb-6">
          {college.name}
        </h1>

        <div className="bg-white p-6 rounded-xl shadow max-w-2xl">
          <p className="mb-3 text-lg">
            📍 <strong>Location:</strong>{" "}
            {college.location}
          </p>

          <p className="mb-3 text-lg">
            💰 <strong>Fees:</strong>{" "}
            {college.fees}
          </p>

          <p className="mb-3 text-lg">
            ⭐ <strong>Rating:</strong>{" "}
            {college.rating}
          </p>

          <p className="mb-3 text-lg">
            🎓 <strong>Placement:</strong>{" "}
            {college.placement}
          </p>
        </div>
      </main>
    </>
  );
}