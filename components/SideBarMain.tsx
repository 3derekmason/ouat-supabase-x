"use client";

import { useState } from "react";

export default function SideBarMain() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return isSideBarOpen ? (
    <div className="absolute w-[320px] min-h-screen bg-foreground/90 top-0 left-0">
      <div className="flex items-center justify-end p-4 border-b border-background/20">
        <button
          className="p-4 text-background"
          onClick={() => {
            setIsSideBarOpen(false);
          }}
        >
          X
        </button>
      </div>
    </div>
  ) : (
    <button
      onClick={() => {
        setIsSideBarOpen(true);
      }}
    >
      {isSideBarOpen ? "" : "menu"}
    </button>
  );
}
