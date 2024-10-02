import { DashboardTopbar } from "../dashboard/components/dashboard-topbar/DashboardTopbar";
import { BacklogContent } from "./components/BacklogContent";
import { BacklogFilters } from "./components/BacklogFilters";
import { BacklogTitle } from "./components/BacklogTitle";

export default function Page() {
  return (
    <>
      <DashboardTopbar />
      <div className="flex flex-col h-full p-6 overflow-y-auto box-border">
        <BacklogTitle />
        <BacklogFilters />
        <BacklogContent />
      </div>
    </>
  );
}
