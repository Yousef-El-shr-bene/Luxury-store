import prismadb from "@/lib/prisma";

// Get all products
export async function GET() {
  try {
    const products = await prismadb.product.findMany({
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return Response.json(products);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// Create new product
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      description,
      price,
      categoryId,
      type, // dress or skirt
      tier, // Luxe or Rare
      discount,
      imageUrl,

    } = body;

    if (!name || !price || !categoryId || !type || !tier || imageUrl) {
      return new Response("Missing required fields", { status: 400 });
    }

    const product = await prismadb.product.create({
      data: {
        name,
        description,
        price,
        categoryId,
        type,
        tier,
        discount,
        imageUrl
      },
    });

    return Response.json(product);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
