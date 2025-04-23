// app/(dashboard)/dashboard/customers/columns.ts
import { ColumnDef } from "@tanstack/react-table"

export type Customer = {
  id: string
  name: string
  email: string
  phone?: string
  createdAt: string
}

export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "name",
    header: "الاسم",
  },
  {
    accessorKey: "email",
    header: "البريد الإلكتروني",
  },
  {
    accessorKey: "phone",
    header: "رقم الهاتف",
    cell: ({ row }) => row.original.phone || "—",
  },
  {
    accessorKey: "createdAt",
    header: "تاريخ التسجيل",
    cell: ({ row }) =>
      new Date(row.original.createdAt).toLocaleDateString("ar-EG"),
  },
]
