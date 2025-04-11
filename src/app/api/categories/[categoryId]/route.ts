import prismadb from "@/lib/prisma";

// GET: Get single category
export async function GET(
  _request: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    const category = await prismadb.category.findUnique({
      where: { id: params.categoryId },
    });

    if (!category) {
      return new Response("Category not found", { status: 404 });
    }

    return Response.json(category);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// PATCH: Update category
export async function PATCH(
  request: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    const body = await request.json();
    const { name } = body;

    if (!name) {
      return new Response("Name is required", { status: 400 });
    }

    const updatedCategory = await prismadb.category.update({
      where: { id: params.categoryId },
      data: { name },
    });

    return Response.json(updatedCategory);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// DELETE: Delete category
export async function DELETE(
  _request: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    await prismadb.category.delete({
      where: { id: params.categoryId },
    });

    return new Response("dun", { status: 204 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
