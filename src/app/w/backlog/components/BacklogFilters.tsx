import { HiUserAdd } from "react-icons/hi";

export const BacklogFilters = () => {
  return (
    <div className="flex flex-row mt-2 justify-between p-2">
      <div className="flex flex-row">
        <div className="flex flex-row mr-4 items-center justify-center">
          <div className="cursor-pointer border border-zinc-700 font-bold flex items-center justify-center bg-red-800 rounded-full w-[28px] h-[28px]">
            P
          </div>
          <div className="-ml-1 border cursor-pointer border-zinc-700 font-bold flex items-center justify-center bg-red-800 rounded-full w-[28px] h-[28px]">
            L
          </div>
          <div className="-ml-1 cursor-pointer border border-zinc-700 font-bold flex items-center justify-center bg-red-800 rounded-full w-[28px] h-[28px]">
            Z
          </div>
          <div className="-ml-1 cursor-pointer border border-zinc-700 font-bold flex items-center justify-center bg-red-800 rounded-full w-[28px] h-[28px]">
            A
          </div>
          <button className="bg-zinc-600 rounded-full p-1 flex justify-center items-center ml-2">
            <HiUserAdd size={20} />
          </button>
        </div>
        <select name="pets" id="pet-select" className="text-white rounded pl-2 bg-zinc-600">
          <option value="">Tipo de Item&nbsp;</option>
          <option value="cat">Epic</option>
          <option value="dog">Story</option>
          <option value="hamster">Task</option>
          <option value="parrot">Bug</option>
        </select>
      </div>
      <div>
        <button className="bg-indigo-600 p-1 px-4 rounded">Create Sprint</button>
      </div>
    </div>
  );
};

