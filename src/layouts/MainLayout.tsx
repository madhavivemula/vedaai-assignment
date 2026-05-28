import React from "react";
import Sidebar from "@/components/Sidebar";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex bg-[#f5f5f5]">
      <Sidebar />

      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}
