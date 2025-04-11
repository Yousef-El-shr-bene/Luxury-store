import prismadb from "@/lib/prisma";

// GET: Get all categories
export async function GET() {
  try {
    const categories = await prismadb.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return Response.json(categories);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// POST: Create new category
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name } = body;

    if (!name) {
      return new Response("Name is required", { status: 400 });
    }

    const category = await prismadb.category.create({
      data: { name },
    });

    return Response.json(category);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
