"use client";
import { IoMdHome, IoMdSettings } from "react-icons/io";
import { RiTaskFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { useStoreProjects } from "@/app/store/project.store";

const routes = [
  { name: "Home", path: "/w/dashboard", icon: <IoMdHome size={15} /> },
  { name: "Backlog", path: "/w/backlog", icon: <IoMdSettings size={15} /> },
  { name: "Tableros", path: "/w/board", icon: <IoMdSettings size={15} /> },
  { name: "Settings", path: "/w/settings", icon: <IoMdSettings size={15} /> },
];

export function Sidebar() {
  const [dataz, setData] = useState<any>(null);
  const { projects, updateProjects } = useStoreProjects((state: any) => state);
  useEffect(() => {
    const fetchData = async () => {
      try {
        //
        const me = await axios("/api/user/me");
        const projects = await axios("/api/projects/get");
        //console.log(projects.data);
        //console.log("sie s:",updateProjects);
        console.log(JSON.stringify(projects.data));
        updateProjects(projects.data);
      } catch (error: any) {
        console.error(error); // NOTE - use "error.response.data` (not "error")
      }

      //const responsePOST = await axios.post('/api/test/post');
      //sconsole.log(projects);
      setData(1);
    };
    fetchData();
  }, []);
  const pathname = usePathname();
  return (
    <div className="p-3 min-w-[200px] max-w-[200px] bg-zinc-900">
      <div id="logo" className="flex flex-row items-center py-2">
        <RiTaskFill size={35} className="text-indigo-500" />
        <span className="ml-2 text-2xl font-black text-white">Kapta</span>
      </div>
      <div className="mt-4">
        <hr className="my-3 border-zinc-700" />
        <button
          className={`flex flex-row bg-zinc-800 font-bold items-center whitespace-nowrap rounded text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 w-full justify-start`}
        >
          <IoMdSettings size={15} />
          <span className="ml-2">Espacio de Trabajo</span>
        </button>
        <hr className="my-3 border-zinc-700" />
        {routes.map((route, index) => (
          <div key={index}>
            <Link href={route.path}>
              <button
                className={`flex flex-row bg-zinc-800 font-bold items-center whitespace-nowrap rounded text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 w-full justify-start ${
                  pathname === route.path
                    ? "!bg-indigo-600 text-white"
                    : "hover:bg-indigo-500 hover:text-white text-gray-400 hover:translate-x-2"
                }`}
              >
                {route.icon}
                <span className="ml-2">{route.name}</span>
              </button>
            </Link>
            {index < routes.length - 1 && <div className="my-2" />}
          </div>
        ))}
        <hr className="my-3 border-zinc-700" />
      </div>
    </div>
  );
}
