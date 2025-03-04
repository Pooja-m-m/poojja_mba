"use client";
import { useState } from "react";
import {
  Home, Users, Briefcase, CreditCard, PenTool, Search,
  LifeBuoy, FileText, Mail, Settings, Bookmark, Eye, Bell,
  LogInIcon, Menu, X
} from "lucide-react";
import GeneralSettings from "../components/GeneralSettings";

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile Sidebar Toggle */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-teal-700 text-white rounded-lg" 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-teal-700 text-white flex flex-col p-4 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out md:relative md:w-64`}>
        <h1 className="text-lg font-bold uppercase flex items-center gap-2">
          JOB PORTAL <span className="text-xl">💼</span>
        </h1>
        <hr className="border-white/50 my-2" />

        {/* Sidebar Menu */}
        <nav className="flex-1 space-y-2">
          <SidebarItem icon={Home} label="Dashboard" />
          <SidebarItem icon={Users} label="User Management" bold />
          <SidebarItem icon={Briefcase} label="Job Management" />
          <SidebarItem icon={CreditCard} label="Payment" />
          <SidebarItem icon={PenTool} label="Blog" />
          <SidebarItem icon={Search} label="Job Search" />
          
          <hr className="border-white/50 my-2" />

          {/* Help & Support Dropdown */}
          <div>
            <button 
              className="w-full flex items-center justify-between p-2 hover:bg-teal-800 rounded-lg"
              onClick={() => setIsHelpOpen(!isHelpOpen)}
            >
              <div className="flex items-center gap-2">
                <LifeBuoy size={18} /> <span>Help and Support</span>
              </div>
              <span>{isHelpOpen ? "▲" : "▼"}</span>
            </button>
            {isHelpOpen && (
              <div className="pl-6 space-y-2">
                <SidebarItem icon={FileText} label="Reports" small />
                <SidebarItem icon={Mail} label="Email Support" small />
                <SidebarItem icon={Settings} label="Settings" />
              </div>
            )}
          </div>
        </nav>

        <hr className="border-white/50 my-2" />

        {/* Logout Button */}
        <div className="mt-auto flex justify-center">
          <button className="bg-gray-200 p-3 rounded-lg">
            <LogInIcon className="text-black" size={24} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center bg-teal-700 text-white p-4 rounded-lg m-4">
          <div>
            <h1 className="text-sm font-semibold">Welcome Divya Sain 👋</h1>
            <p className="text-xs text-white/80">Here's what happening with you today.</p>
          </div>

          <div className="flex items-center gap-4">
            <Bookmark className="w-5 h-5 cursor-pointer hover:text-gray-200" />
            <Eye className="w-5 h-5 cursor-pointer hover:text-gray-200" />
            <Bell className="w-5 h-5 cursor-pointer hover:text-gray-200" />
            <div className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center border border-white">
              <img src="user.png" alt="User" className="w-full h-full rounded-full" />
            </div>
          </div>
        </div>

        {/* Settings Page */}
        <main className="p-6">
          <SettingsHeading />
          <GeneralSettings />
        </main>
      </div>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ icon: Icon, label, bold = false, small = false }) => (
  <button className={`w-full flex items-center gap-2 p-2 rounded-lg ${small ? "pl-4" : ""} ${bold ? "font-bold" : ""} hover:bg-teal-800`}>
    <Icon size={18} /> <span>{label}</span>
  </button>
);

// Settings Heading Component
const SettingsHeading = () => (
  <div className="bg-gray-300 text-black text-lg font-bold text-center p-3 rounded-lg shadow-md">
    Settings
  </div>
);

export default Page;
