import { DashboardSummary } from "./components/dashboard-summary/DashboardSummary";
import { BacklogItem } from "../components/backlog-item/BacklogItem";
import { DashboardAssigned } from "./components/dashboard-assigned/DashboardAssigned";
import { DashboardProjects } from "./components/dashboard-projects/DashboardProjects";

export default function Page() {
  return (
    <div id="page-dashboard" className="bg-zinc-950 h-full flex flex-col p-4">
      <DashboardSummary />
      <div className="flex flex-row h-full mt-2 gap-2">
        <DashboardAssigned />
        <DashboardProjects />
      </div>
    </div>
  );
}
