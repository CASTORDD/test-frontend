import React from "react";

export default function Tag({ text }: { text: string }) {
  return (
    <div
      className="text-xs capitalize py-1 px-2 border-[1px] rounded-full"
      data-testid="tag"
    >
      {text}
    </div>
  );
}
