import { Sidebar } from "./components/SideBar";

export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row h-screen bg-zinc-950 overflow-hidden">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
