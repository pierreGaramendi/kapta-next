import React from "react";
import { IoIosUnlock } from "react-icons/io";
import { IoIosLock } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { ButtonConfig } from "@/app/ui/ButtonConfig";

interface TaskDetailsProps {
  assignee: string;
  sprint: string;
  team: string;
  created: string;
  updated: string;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ assignee, sprint, team, created, updated }) => {
  return (
    <div className="bg-zinc-800 text-gray-300 rounded">
      <div className="flex gap-4">
        <select name="pets" id="pet-select" className="text-white py-1 px-4 bg-zinc-600 rounded">
          <option value="">Todo</option>
          <option value="dog">Doing</option>
          <option value="cat">Done</option>
        </select>
        <select name="pets" id="pet-select" className="text-white py-1 px-4 bg-zinc-600 rounded">
          <option value="">Accciones</option>
          <option value="dog">Crear campos</option>
          <option value="cat">Administrar campos</option>
        </select>
      </div>
      <div className="mt-2">
        <h2 className="font-semibold text-lg">Detalles</h2>
        <div className="mt-3">
          <div className="flex items-center mb-2">
            <span className="font-semibold mr-2">Asignado a:</span>
            <span>{assignee}</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="font-semibold mr-2">Sprint:</span>
            <span className="text-indigo-400">{sprint}</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="font-semibold mr-2">Team:</span>
            <span>{team}</span>
          </div>

          <div className="flex items-center mb-2">
            <span className="font-semibold mr-2">Created:</span>
            <span>{created}</span>
          </div>

          <div className="flex items-center mb-2">
            <span className="font-semibold mr-2">Story points:</span>
            <span>6</span>
          </div>

          <div className="flex items-center mb-2">
            <span className="font-semibold mr-2">Updated:</span>
            <span>{updated}</span>
          </div>

          <div className="flex items-center mb-2">
            <span className="font-semibold mr-2">Informador:</span>
            <span>{assignee}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TaskComponent: React.FC = () => {
  return (
    <div className="bg-zinc-900 text-white flex flex-col">
      <header className=" bg-zinc-800 p-4 flex flex-row justify-between items-center">
        <section>
          <h1 className="font-bold">PSSCRUM-2</h1>
        </section>
        <section className="flex gap-4">
          <IoIosUnlock size={25} />
          <IoIosLock size={25} />
          <FaRegEye size={25} />
          <ButtonConfig></ButtonConfig>
        </section>
      </header>
      <div className="w-full flex flex-row">
        {/* Main Content */}
        <main className="p-6 w-9/12">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Historia 1</h1>
            <button className="bg-zinc-700 text-sm py-1 px-4 rounded">Adjuntar</button>
          </div>

          <div className="mb-4 flex flex-row gap-7">
            <span className="font-semibold border cursor-pointer rounded px-2">Adjuntar</span>
            <span className="font-semibold border cursor-pointer rounded px-2">Añadir una incidencia secundaria</span>
            <span className="font-semibold border cursor-pointer rounded px-2">Vincular incidencia</span>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="dark:text-gray-300 cursor-pointer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga facere repudiandae consectetur unde, esse
              fugiat laudantium facilis, vitae modi, ad voluptate. Repellat harum officiis nihil. Eos maxime voluptas suscipit. <a href="">Editar</a>
            </p>
            {/* TODO  on edit event show a rich text editor*/}
          </div>

          {/* Tabs */}
          <div className="flex mb-4">
            <button className="text-sm text-gray-400 px-4 py-2">Todo</button>
            <button className="text-sm px-4 py-2 border-b-2 border-indigo-400">Comentarios</button>
            <button className="text-sm text-gray-400 px-4 py-2">Historial</button>
          </div>

          {/* Comment Section */}
          <div className="bg-zinc-800 p-4 rounded">
            <div className="flex items-center mb-2">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center">PM</div>
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

        {/* Details Panel */}
        <aside className=" bg-zinc-800 py-4 px-6 w-3/12">
          <TaskDetails
            assignee="Pierre Garamendi Marquez"
            sprint="Tablero Sprint 2"
            team="Ninguno"
            created="20 hour ago"
            updated="2 hour ago"
          />
          <div className="mt-6">
            <button className="bg-indigo-500 w-full py-2 rounded mb-2">Crear rama</button>
            <button className="bg-indigo-500 w-full py-2 rounded">Crear confirmación</button>
          </div>
        </aside>
      </div>
    </div>
  );
};
