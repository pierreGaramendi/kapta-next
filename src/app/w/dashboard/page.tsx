import { DashboardTopbar } from "./components/dashboard-topbar/DashboardTopbar";
import { DashboardSummary } from "./components/dashboard-summary/DashboardSummary";
import { BacklogItem } from "../components/bl-item/BacklogItem";

export default function Page() {
  const tasks = [1, 2,3,4,5,6,7];
  return (
    <div id="page-dashboard" className="bg-zinc-950 h-full p-4 flex flex-col">
      <DashboardTopbar />
      <DashboardSummary />
      <div className="flex flex-row h-full mt-2">
        <div className="overflow-hidden w-full bg-zinc-900 rounded">
          <div id="title" className="font-bold sticky border-dotted border-b border-zinc-500 w-full p-4">
            Tareas Asignadas
          </div>
          <div id="content" className="overflow-y-auto h-full p-2">
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
