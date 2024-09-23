import React from "react";

interface TaskDetailsProps {
  assignee: string;
  sprint: string;
  team: string;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ assignee, sprint, team }) => {
  return (
    <div className="bg-zinc-800 text-gray-300 p-4 rounded">
      <h2 className="font-semibold text-lg">Detalles</h2>
      <div className="mt-4">
        <div className="flex items-center mb-2">
          <span className="font-semibold mr-2">Persona asignada:</span>
          <span>{assignee}</span>
        </div>
        <div className="flex items-center mb-2">
          <span className="font-semibold mr-2">Sprint:</span>
          <span className="text-blue-400">{sprint}</span>
        </div>
        <div className="flex items-center mb-2">
          <span className="font-semibold mr-2">Team:</span>
          <span>{team}</span>
        </div>
      </div>
    </div>
  );
};

export const TaskComponent: React.FC = () => {
  return (
    <div className="bg-zinc-900 text-white flex flex-col">
      {/* Sidebar */}
      <aside className=" bg-zinc-800 p-4">
        <h1 className="font-bold">PSSCRUM-2</h1>
      </aside>
      <div className="w-full flex flex-row">
        {/* Main Content */}
        <main className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Historia 1</h1>
            <button className="bg-zinc-700 text-sm py-1 px-4 rounded">Adjuntar</button>
          </div>

          {/* Tabs */}
          <div className="flex mb-4">
            <button className="text-sm text-gray-400 px-4 py-2">Todo</button>
            <button className="text-sm px-4 py-2 border-b-2 border-blue-400">Comentarios</button>
            <button className="text-sm text-gray-400 px-4 py-2">Historial</button>
          </div>

          {/* Comment Section */}
          <div className="bg-zinc-800 p-4 rounded">
            <div className="flex items-center mb-2">
              <div className="bg-red-500 h-8 w-8 rounded-full text-center text-white">PM</div>
              <input
                type="text"
                placeholder="Añadir un comentario..."
                className="bg-zinc-700 w-full ml-4 p-2 rounded text-gray-300"
              />
            </div>
            <p className="text-gray-500 text-sm">
              Consejo de expertos: pulsa <span className="font-bold">M</span> para comentar
            </p>
          </div>
        </main>

        {/* Details Pane */}
        <aside className=" bg-zinc-800 p-4">
          <TaskDetails assignee="Pierre Garamendi Marquez" sprint="Tablero Sprint 2" team="Ninguno" />
          <div className="mt-6">
            <button className="bg-blue-500 w-full py-2 rounded mb-2">Crear rama</button>
            <button className="bg-blue-500 w-full py-2 rounded">Crear confirmación</button>
          </div>
        </aside>
      </div>
    </div>
  );
};
