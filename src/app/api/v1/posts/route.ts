import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const Allpost = await prisma.post.findMany();
    return new Response(JSON.stringify(Allpost), {
      status: 200,
      headers: {
        "Content-Type": "appliation/json",
      },
    });
  } catch (error) {
    console.error("error fetch", error);
    return new Response("error", {
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { user, post } = body;
    const newPost = await prisma.post.create({
      data: {
        user,
        post,
      },
    });
    return new Response(JSON.stringify(newPost), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("fetch error", error);
    return new Response("Error creating new Post", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
