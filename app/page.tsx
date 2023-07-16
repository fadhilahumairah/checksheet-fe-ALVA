import { DataTable } from "@/components/Table/datatable";
import { columns } from "@/components/Table/columns";
import { payments } from "@/components/Table/data";

export default function Home() {
  return (
    <>
      <DataTable columns={columns} data={payments} />
    </>
  );
}
