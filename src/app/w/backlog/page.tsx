import { DashboardTopbar } from "../dashboard/components/dashboard-topbar/DashboardTopbar";
import { BacklogContent } from "./components/BacklogContent";
import { BacklogFilters } from "./components/BacklogFilters";
import { BacklogTitle } from "./components/BacklogTitle";

export default function Page() {
  return (
    <div className="bg-zinc-950 h-full rounded p-4 flex flex-col">
      <DashboardTopbar />
      <BacklogTitle />
      <BacklogFilters />
      <div className="p-4 h-full overflow-hidden">
        <BacklogContent />
      </div>
    </div>
  );
}
