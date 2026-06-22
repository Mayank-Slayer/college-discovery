const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.college.createMany({
    data: [
      {
        name: "Amity University",
        location: "Noida",
        fees: "₹2.5 Lakh",
        rating: 4.2,
        placement: "8 LPA",
      },
      {
        name: "MAIT",
        location: "Delhi",
        fees: "₹1.8 Lakh",
        rating: 4.4,
        placement: "10 LPA",
      },
      {
        name: "DTU",
        location: "Delhi",
        fees: "₹2.1 Lakh",
        rating: 4.8,
        placement: "18 LPA",
      },
    ],
  });

  console.log("Seeded Successfully");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });