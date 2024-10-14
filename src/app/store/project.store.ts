import { create } from "zustand";
export interface IProject {
  _id: string;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  owner_id: string;
  status: string;
  backlog_general_id?: any;
  sprints: any[];
  members: any[];
}
export interface IStateProject {
  projects: IProject[];
}

export const useStoreProjects = create<IStateProject>((set) => {
  return {
    projects: [
      {
        _id: "66e9bbe1309b68e5333a8ceb",
        name: "Updated Project",
        description: "Updated description",
        start_date: "2024-09-01T00:00:00.000Z",
        end_date: "2024-12-01T00:00:00.000Z",
        owner_id: "66e9bafb309b68e5333a8ce6",
        status: "active",
        backlog_general_id: null,
        sprints: [],
        members: [],
      },
    ],
    updateProjects: (newProjects: IProject[]) => {
      set({ projects: newProjects });
    },
  };
});
