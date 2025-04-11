// import React from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { DataTable } from "@/components/data-table";
// import { columns } from "./columns";
// import { getCustomers } from "@/lib/data";

export default async function CustomersPage() {
//   const customers = await getCustomers();

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      {/* <Card>
        <CardHeader>
          <CardTitle>العملاء</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={customers} searchKey="email" />
        </CardContent>
      </Card> */}
    </div>
  );
}
