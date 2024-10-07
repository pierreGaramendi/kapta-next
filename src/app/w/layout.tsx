import { Sidebar } from "./components/SideBar";
import { DashboardTopbar } from "./dashboard/components/dashboard-topbar/DashboardTopbar";

export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row h-screen bg-zinc-950 ">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardTopbar />
        <div className="flex-1 h-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
