import { ProgressBar } from "./progress-bar";

type Props = {};
export const ProjectItem = ({}: Props) => {
  const sections = [
    { label: "Completed", percentage: 30, color: "#34D399" },
    { label: "In Progress", percentage: 50, color: "#60A5FA" },
    { label: "Pending", percentage: 20, color: "#FBBF24" },
  ];
  const totalPercentage = 70;
  return (
    <div className="bg-blue-600 rounded p-4">
      <section className="font-bold">Crypto Design</section>
      <section>
        <ProgressBar totalPercentage={totalPercentage} sections={sections} />
      </section>
    </div>
  );
};
