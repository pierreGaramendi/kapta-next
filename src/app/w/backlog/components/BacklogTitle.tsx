import { ButtonConfig } from "@/app/ui/ButtonConfig";

export const BacklogTitle = () => {
  return (
    <div className="flex flex-row justify-between p-2">
      <h1 className="font-bold text-2xl">Backlog</h1>
      <ButtonConfig></ButtonConfig>
    </div>
  );
};
