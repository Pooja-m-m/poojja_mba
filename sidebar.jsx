"use client";
import { LogInIcon } from "lucide-react";
import { useState } from "react";
import { FaUserCog, FaTachometerAlt, FaWallet, FaBlog, FaSearch, FaHeadset, FaChartBar, FaEnvelope, FaCog } from "react-icons/fa";

const Sidebar = () => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <div className="w-64 min-h-screen bg-teal-700 text-white p-4 flex flex-col justify-between">
      <div>
        {/* Header */}
        <h2 className="text-xl font-bold flex items-center gap-2">
          JOB PORTAL <span>💼</span>
        </h2>
        <hr className="my-2 border-white/30" />

        {/* Sidebar Items */}
        <div className="space-y-2">
          <SidebarItem icon={<FaTachometerAlt />} text="Dashboard" />
          <SidebarItem icon={<FaUserCog />} text="User Management" className="text-gray-300" />
          <SidebarItem icon={<FaChartBar />} text="Job Management" />
          <SidebarItem icon={<FaWallet />} text="Payment" />
          <SidebarItem icon={<FaBlog />} text="Blog" />
          <SidebarItem icon={<FaSearch />} text="Job Search" />
        </div>

        {/* Help and Support Section */}
        <div>
          <button
            onClick={() => setIsHelpOpen(!isHelpOpen)}
            className="w-full text-left flex items-center justify-between p-2 hover:bg-teal-800 rounded-md"
          >
            <span className="flex items-center gap-2">
              <FaHeadset /> Help and Support
            </span>
            <span>{isHelpOpen ? "▲" : "▼"}</span>
          </button>
          {isHelpOpen && (
            <div className="ml-6 mt-2 space-y-2">
              <SidebarItem icon={<FaChartBar />} text="Reports" />
              <SidebarItem icon={<FaEnvelope />} text="Email Support" />
              <SidebarItem icon={<FaCog />} text="Settings" />
            </div>
          )}
        </div>

      </div>

      {/* Refresh Button */}
      <button className="bg-gray-500 p-3 rounded-lg flex items-center justify-center mt-4">
        <LogInIcon className="text-white text-xl" />
      </button>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ icon, text, className = "" }) => (
  <div className={`flex items-center gap-3 p-2 hover:bg-teal-800 cursor-pointer rounded-md ${className}`}>
    {icon} <span>{text}</span>
  </div>
);

export default Sidebar;
