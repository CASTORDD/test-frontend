import React from "react";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

interface DetailItemProps {
  text: string | number;
  icon: IconName;
  color?: "blue" | "orange";
}

export default function DetailItem({
  text,
  icon,
  color = "orange",
}: DetailItemProps) {
  return (
    <div
      className={`flex items-center gap-2 text-${color}-300 text-base`}
      data-testid="detail-item"
    >
      <DynamicIcon name={icon} size={16} />
      <span className="text-gray-500">{text}</span>
    </div>
  );
}
