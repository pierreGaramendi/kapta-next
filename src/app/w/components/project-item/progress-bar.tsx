import React from "react";

type Section = {
  label: string;
  percentage: number; // Porcentaje de esta sección
  color: string; // Color de la sección
};

type ProgressBarProps = {
  totalPercentage: number; // Progreso total de la barra
  sections: Section[]; // Secciones de la barra
};

export const ProgressBar: React.FC<ProgressBarProps> = ({ totalPercentage, sections }) => {
  return (
    <div className="w-full">
      {/* Texto de porcentaje */}
      <div className="flex flex-row justify-between">
        <div className="text-center font-semibold mb-2">Progress</div>
        <div className="text-center font-semibold mb-2">{totalPercentage}%</div>
      </div>

      {/* Contenedor de la barra de progreso */}
      <div className="w-full rounded h-3 relative overflow-hidden">
        {/* Barra de progreso */}
        <div
          className="absolute top-0 left-0 h-full rounded transition-all duration-300 ease-out bg-zinc-200"
          style={{ width: `${totalPercentage}%` }} // Fondo semitransparente para la barra completa
        />

        {/* Secciones */}
        <div className="relative flex h-full gap-1">
          {sections.map((section, index) => (
            <div
              key={index}
              className="h-full rounded bg-zinc-400"
              style={{
                width: `${section.percentage}%`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
