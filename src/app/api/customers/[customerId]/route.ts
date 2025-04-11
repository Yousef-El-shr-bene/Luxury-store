import prismadb from "@/lib/prisma";

// Get single customer
export async function GET(
  _request: Request,
  { params }: { params: { customerId: string } }
) {

  try {
    const customer = await prismadb.customer.findUnique({
      where: { id: params.customerId },
    });

    if (!customer) {
      return new Response("Customer not found", { status: 404 });
    }

    return Response.json(customer);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// Update customer
export async function PATCH(
  request: Request,
  { params }: { params: { customerId: string } }
) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    const updatedCustomer = await prismadb.customer.update({
      where: { id: params.customerId },
      data: { name, email, phone },
    });

    return Response.json(updatedCustomer);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// Delete customer
export async function DELETE(
  _request: Request,
  { params }: { params: { customerId: string } }
) {
  try {
    await prismadb.customer.delete({
      where: { id: params.customerId },
    });

    return new Response("Customer deleted successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
