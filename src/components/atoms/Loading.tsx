import { Loader2Icon } from "lucide-react";

export default function Loading() {
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center text-slate-400">
      <Loader2Icon size={40} className="animate-spin" />
      <span className="animate-pulse">Loading...</span>
    </div>
  );
}
