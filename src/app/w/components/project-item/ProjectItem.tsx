import { BsThreeDotsVertical } from "react-icons/bs";
import { MembersComponent } from "../members/Members";
import { ProgressBar } from "./progress-bar";
import { FaCalendarAlt } from "react-icons/fa";

type Props = {};
export const ProjectItem = ({}: Props) => {
  const sections = [
    { label: "Completed", percentage: 30, color: "#34D399" },
    { label: "In Progress", percentage: 50, color: "#60A5FA" },
    { label: "Pending", percentage: 20, color: "#FBBF24" },
  ];
  const totalPercentage = 70;
  return (
    <div className="bg-blue-600 rounded p-4 flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <span className="font-bold text-xl">Crypto Design</span>
        <BsThreeDotsVertical className="cursor-pointer" size={20} />
      </div>
      <section className="flex flex-col gap-3">
        <ProgressBar totalPercentage={totalPercentage} sections={sections} />
      </section>
      <section className="flex flex-row gap-3 justify-between">
        <MembersComponent></MembersComponent>
        <div className="flex items-center gap-2">
          <FaCalendarAlt/>
          <span className="font-semibold">Dec 25</span>
        </div>
      </section>
    </div>
  );
};
