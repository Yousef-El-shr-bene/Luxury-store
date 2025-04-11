import prismadb from "@/lib/prisma";

// Get single order
export async function GET(
  _request: Request,
  { params }: { params: { orderId: string } }
) {
  try {
    const order = await prismadb.order.findUnique({
      where: { id: params.orderId },
    });

    if (!order) {
      return new Response("Order not found", { status: 404 });
    }

    return Response.json(order);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// Update order
export async function PATCH(
  request: Request,
  { params }: { params: { orderId: string } }
) {
  try {
    const body = await request.json();
    const { status } = body;

    const updatedOrder = await prismadb.order.update({
      where: { id: params.orderId },
      data: { status },
    });

    return Response.json(updatedOrder);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// Delete order
export async function DELETE(
  _request: Request,
  { params }: { params: { orderId: string } }
) {
  try {
    await prismadb.order.delete({
      where: { id: params.orderId },
    });

    return new Response("Order deleted successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
