import { columns } from "./columns";
// import { DataTable } from "@/components/ui/data-table";
// import { getCustomers } from "../actions/customers";

export default async function CustomersPage() {
  // const customers = await getCustomers();

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">العملاء</h1>
        <p className="text-muted-foreground text-sm">عرض وتحليل بيانات العملاء المسجلين في المتجر</p>
      </div>
      {/* <DataTable columns={columns} data={customers} /> */}
    </div>
  );
}
