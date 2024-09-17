"use client";
import { Sidebar } from "./components/SideBar";

export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row min-h-screen bg-neutral-900">
      <Sidebar />
      <div className="flex-1 py-3 pr-3">{children}</div>
    </div>
  );
}
