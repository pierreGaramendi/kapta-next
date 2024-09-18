"use client";
import { useStoreProjects } from "@/app/store/project.store";
import { DashboardTopbar } from "./components/dashboard-topbar/DashboardTopbar";
import { DashboardSummary } from "./components/dashboard-summary/DashboardSummary";

export default function Page() {
  const { projects } = useStoreProjects((state: any) => state);
  return (
    <div className="bg-zinc-950 h-full rounded-md p-2 flex flex-col">
      <DashboardTopbar />
      <DashboardSummary />
      <div className="flex flex-row h-full">
        <div className="overflow-y-auto w-full bg-zinc-900 rounded-lg">
          <div className="rounded-lg w-full bg-zinc-900 p-4 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates, neque culpa ducimus tenetur ipsum ut dolore pariatur, deleniti sapiente quis placeat libero cum unde voluptatem voluptas molestiae accusamus dolorem!
          </div>
          <div className="rounded-lg w-full bg-zinc-900 p-4 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates, neque culpa ducimus tenetur ipsum ut dolore pariatur, deleniti sapiente quis placeat libero cum unde voluptatem voluptas molestiae accusamus dolorem!
          </div>
          <div className="rounded-lg w-full bg-zinc-900 p-4 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates, neque culpa ducimus tenetur ipsum ut dolore pariatur, deleniti sapiente quis placeat libero cum unde voluptatem voluptas molestiae accusamus dolorem!
          </div>
          <div className="rounded-lg w-full bg-zinc-900 p-4 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates, neque culpa ducimus tenetur ipsum ut dolore pariatur, deleniti sapiente quis placeat libero cum unde voluptatem voluptas molestiae accusamus dolorem!
          </div>
          <div className="rounded-lg w-full bg-zinc-900 p-4 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates, neque culpa ducimus tenetur ipsum ut dolore pariatur, deleniti sapiente quis placeat libero cum unde voluptatem voluptas molestiae accusamus dolorem!
          </div>
          <div className="rounded-lg w-full bg-zinc-900 p-4 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates, neque culpa ducimus tenetur ipsum ut dolore pariatur, deleniti sapiente quis placeat libero cum unde voluptatem voluptas molestiae accusamus dolorem!
          </div>
          <div className="rounded-lg w-full bg-zinc-900 p-4 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates, neque culpa ducimus tenetur ipsum ut dolore pariatur, deleniti sapiente quis placeat libero cum unde voluptatem voluptas molestiae accusamus dolorem!
          </div>
          <div className="rounded-lg w-full bg-zinc-900 p-4 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates, neque culpa ducimus tenetur ipsum ut dolore pariatur, deleniti sapiente quis placeat libero cum unde voluptatem voluptas molestiae accusamus dolorem!
          </div>
          <div className="rounded-lg w-full bg-zinc-900 p-4 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates, neque culpa ducimus tenetur ipsum ut dolore pariatur, deleniti sapiente quis placeat libero cum unde voluptatem voluptas molestiae accusamus dolorem!
          </div>
          <div className="rounded-lg w-full bg-zinc-900 p-4 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates, neque culpa ducimus tenetur ipsum ut dolore pariatur, deleniti sapiente quis placeat libero cum unde voluptatem voluptas molestiae accusamus dolorem!
          </div>
          <div className="rounded-lg w-full bg-zinc-900 p-4 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates, neque culpa ducimus tenetur ipsum ut dolore pariatur, deleniti sapiente quis placeat libero cum unde voluptatem voluptas molestiae accusamus dolorem!
          </div>
          <div className="rounded-lg w-full bg-zinc-900 p-4 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates, neque culpa ducimus tenetur ipsum ut dolore pariatur, deleniti sapiente quis placeat libero cum unde voluptatem voluptas molestiae accusamus dolorem!
          </div>
        </div>
        <div className="rounded-lg w-full"></div>
      </div>
    </div>
  );
}
