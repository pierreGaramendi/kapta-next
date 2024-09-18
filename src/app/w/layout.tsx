"use client";
import { Sidebar } from "./components/SideBar";

export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row h-screen bg-zinc-900 overflow-hidden">
      <Sidebar />
      <div className="py-3 pr-3 w-full">{children}</div>
    </div>
  );
}