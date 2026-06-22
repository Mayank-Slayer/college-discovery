import { prisma } from "@/src/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const colleges = await prisma.college.findMany();

  return NextResponse.json(colleges);
}

export async function POST(req: Request) {
  const body = await req.json();

  const college = await prisma.college.create({
    data: {
      name: body.name,
      location: body.location,
      fees: body.fees,
      rating: parseFloat(body.rating),
      placement: body.placement,
    },
  });

  return NextResponse.json(college);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  await prisma.college.delete({
    where: {
      id,
    },
  });

  return NextResponse.json({
    message: "Deleted Successfully",
  });
}