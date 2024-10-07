import { BacklogItem } from "@/app/w/components/backlog-item/BacklogItem";
import { ProjectItem } from "@/app/w/components/project-item/ProjectItem";

type Props = {};
export const DashboardProjects = ({}: Props) => {
  const tasks = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="w-full rounded mt-2">
      <div id="title" className="font-bold sticky w-full py-4">
        Proyectos
      </div>
      <hr className="border-zinc-700" />
      <div id="content" className="h-full py-4 flex flex-col gap-3">
        {tasks.map((index: number) => (
         <ProjectItem></ProjectItem>
        ))}
      </div>
    </div>
  );
};
