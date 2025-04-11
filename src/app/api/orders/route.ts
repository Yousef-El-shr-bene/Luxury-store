import prismadb from "@/lib/prisma";
import { color } from "framer-motion";

// Get all orders
export async function GET() {
  try {
    const orders = await prismadb.order.findMany(({
      orderBy: {
        createdAt: "desc",
      },
    }));

    return Response.json(orders);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// Create new order
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customerId, orderItems, totalPrice, status } = body;

    const order = await prismadb.order.create({
      data: {
        customerId,
        totalPrice,
        status,
        orderItems,
      },
    });

    return Response.json(order);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
