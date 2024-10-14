import { BsThreeDotsVertical } from "react-icons/bs";
import { MembersComponent } from "../members/Members";
import { ProgressBar } from "./progress-bar";
import { FaCalendarAlt } from "react-icons/fa";
import { IProject } from "@/app/store/project.store";
import { useDateFormatter } from "@/app/utils/date-formaters";
interface ProjectItemProps {
  project: IProject;
}
export const ProjectItem = ({ project }: ProjectItemProps) => {
  const formatDate = useDateFormatter();
  const sections = [
    { label: "Completed", percentage: 30, color: "#34D399" },
    { label: "In Progress", percentage: 50, color: "#60A5FA" },
    { label: "Pending", percentage: 20, color: "#FBBF24" },
  ];
  const totalPercentage = 70;
  return (
    <div className="bg-blue-600 rounded p-4 flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <span className="font-bold text-xl">{project.name}</span>
        <BsThreeDotsVertical className="cursor-pointer" size={20} />
      </div>
      <section className="flex flex-col gap-3">
        <ProgressBar totalPercentage={totalPercentage} sections={sections} />
      </section>
      <section className="flex flex-row gap-3 justify-between">
        <MembersComponent></MembersComponent>
        <div className="flex items-center gap-2">
          <FaCalendarAlt />
          <span className="font-semibold">{formatDate(project.end_date, 'MMM yyyy')}</span>
        </div>
      </section>
    </div>
  );
};
