"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";
import SortableTable from "@/components/SortableTable";
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-x-hidden">
      {/* Mobile Sidebar Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-teal-700 text-white rounded-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Close" : "Menu"}
      </button>
      
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-teal-700 text-white transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out md:relative md:w-64 z-40`}
      >
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-6 w-full overflow-x-auto">
        <Header />
        <Tabs />
        <div className="overflow-x-auto">
          <SortableTable />
        </div>
      </div>
    </div>
  );
}
