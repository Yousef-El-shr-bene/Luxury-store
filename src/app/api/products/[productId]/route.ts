import prismadb from "@/lib/prisma";

// Get single product
export async function GET(
  _request: Request,
  { params }: { params: { productId: string } }
) {
  try {
    const product = await prismadb.product.findUnique({
      where: { id: params.productId },
      include: {
        category: true,
      },
    });

    if (!product) {
      return new Response("Product not found", { status: 404 });
    }

    return Response.json(product);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// Update product
export async function PATCH(
  request: Request,
  { params }: { params: { productId: string } }
) {
  try {
    const body = await request.json();
    const {
      name,
      description,
      price,
      categoryId,
      type,
      tier,
      discount,
    } = body;

    const updatedProduct = await prismadb.product.update({
      where: { id: params.productId },
      data: {
        name,
        description,
        price,
        categoryId,
        type,
        tier,
        discount,
      },
    });

    return Response.json(updatedProduct);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// Delete product
export async function DELETE(
  _request: Request,
  { params }: { params: { productId: string } }
) {
  try {
    await prismadb.product.delete({
      where: { id: params.productId },
    });

    return new Response("Product deleted successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
