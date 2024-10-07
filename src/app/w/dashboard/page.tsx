import { DashboardTopbar } from "./components/dashboard-topbar/DashboardTopbar";
import { DashboardSummary } from "./components/dashboard-summary/DashboardSummary";
import { BacklogItem } from "../components/bl-item/BacklogItem";

export default function Page() {
  const tasks = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div id="page-dashboard" className="bg-zinc-950 h-full flex flex-col p-4">
      <DashboardSummary />
      <div className="flex flex-row h-full mt-2">
        <div className="w-full rounded mt-2">
          <div id="title" className="font-bold sticky w-full py-4">
            Tareas Asignadas
          </div>
          <hr className="border-zinc-700" />
          <div id="content" className="h-full py-4">
            {tasks.map((index: number) => (
              <BacklogItem
                key={index}
                title="Task Title"
                description="This is a brief description of the task."
                labels={["Feature", "Frontend"]}
                priority="medium"
                dueDate="2024-09-18"
                className="mb-4"
              />
            ))}
          </div>
        </div>
        <div className="rounded w-full"></div>
      </div>
    </div>
  );
}
