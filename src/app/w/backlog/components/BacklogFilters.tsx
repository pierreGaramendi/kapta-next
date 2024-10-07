import { HiUserAdd } from "react-icons/hi";
import { MembersComponent } from "../../components/members/Members";

export const BacklogFilters = () => {
  return (
    <div className="flex flex-row mt-2 justify-between p-2">
      <div className="flex flex-row">
        <div className="flex flex-row mr-4 items-center justify-center">
          <MembersComponent></MembersComponent>
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
