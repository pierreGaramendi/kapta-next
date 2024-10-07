type Props = {};
export const MembersComponent = ({}: Props) => {
  return (
    <div className="flex flex-row items-center">
      <div className="cursor-pointer border border-zinc-500 font-bold flex items-center justify-center bg-red-700 rounded-full w-[28px] h-[28px]">
        P
      </div>
      <div className="-ml-1 border cursor-pointer border-zinc-500 font-bold flex items-center justify-center bg-red-700 rounded-full w-[28px] h-[28px]">
        L
      </div>
      <div className="-ml-1 cursor-pointer border border-zinc-500 font-bold flex items-center justify-center bg-red-700 rounded-full w-[28px] h-[28px]">
        Z
      </div>
      <div className="-ml-1 cursor-pointer border border-zinc-500 font-bold flex items-center justify-center bg-red-700 rounded-full w-[28px] h-[28px]">
        A
      </div>
    </div>
  );
};
