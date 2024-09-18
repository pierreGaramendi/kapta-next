import { useStoreProjects } from "@/app/store/project.store";
import { FaProjectDiagram } from "react-icons/fa";
import { FaPercent } from "react-icons/fa";

export const DashboardSummary = () => {
  const { projects } = useStoreProjects((state: any) => state);
  return (
    <div className="rounded-lg flex flex-row mt-2">

      <div className="m-1 rounded-lg flex flex-col w-full justify-center p-4 bg-zinc-900">
        <span className="text-sm font-bold">Total Projects</span>
        <div className="flex items-center mt-2">
          <div className="bg-zinc-700 rounded-full flex justify-center items-center w-[25px] h-[25px]">
            <FaProjectDiagram size={15} />
          </div>
          <span className="ml-2 font-bold text-2xl">{projects.length}</span>
        </div>
      </div>

      <div className="m-1 rounded-lg flex flex-col w-full justify-center p-4 bg-zinc-900">
        <span className="text-sm font-bold">Porcentaje completado</span>
        <div className="flex items-center mt-2">
          <div className="bg-zinc-700 rounded-full flex justify-center items-center w-[25px] h-[25px]">
            <FaPercent size={13} />
          </div>
          <span className="ml-2 font-bold text-2xl">12.23%</span>
        </div>
      </div>

      <div className="m-1 rounded-lg flex flex-col w-full p-4 bg-zinc-900">
        <span>Assigens Tasks</span>
        <span className="font-bold text-2xl">45.45</span>
      </div>

      <div className="m-1 rounded-lg flex flex-col w-full p-4 bg-zinc-900">
        <span>Completed Taskts</span>
        <span className="font-bold text-2xl">0</span>
      </div>


    </div>
  );
};
