"use client";
import { GoQuestion } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";

export default function Page() {
  return (
    <div className="bg-neutral-950 flex-1 h-full rounded-md p-2">
      <header className="rounded-md flex flex-row p-2 justify-between">
        <div>
          <h1 className="font-bold">Home</h1>
          <h2>Monitor all of your projects and task here</h2>
        </div>
        <div className="flex flex-row justify-end items-center">
          <div>
            <input type="text" className="rounded-md p-1 text-black"/>
          </div>
          <GoQuestion size={25}/>
          <IoIosSettings size={25}/>
          <div>
            <div className="rounded-full border border-neutral-400 p-2">JB</div>
          </div>
        </div>
      </header>
      <div className="border border-neutral-500 rounded-md flex flex-row mt-2">
        <div className="flex flex-col w-full justify-center p-4">
          <span>Total Projects</span>
          <span className="font-bold text-2xl">1</span>
        </div>
        <div className="flex flex-col w-full p-4">
          <span>Total Tasks</span>
          <span className="font-bold text-2xl">3</span>
        </div>
        <div className="flex flex-col w-full p-4">
          <span>Assigens Tasks</span>
          <span className="font-bold text-2xl">1</span>
        </div>
        <div className="flex flex-col w-full p-4">
          <span>Completed Taskts</span>
          <span className="font-bold text-2xl">0</span>
        </div>
      </div>
    </div>
  );
}
