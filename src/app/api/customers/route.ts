import prismadb from "@/lib/prisma";

// Get all customers
export async function GET() {
  try {
    const customers = await prismadb.customer.findMany({
      orderBy: {
        createdAt: "desc", 
      },
    });

    return Response.json(customers);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// Create a new customer
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, password } = body;

    const customer = await prismadb.customer.create({
      data: {
        name,
        email,
        phone,
        password,
      },
    });

    return Response.json(customer);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
