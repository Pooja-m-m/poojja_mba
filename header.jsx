"use client";
import { Bookmark, Eye, Bell } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-teal-700 text-white p-4 rounded-lg">
      {/* Left Section - Welcome Message */}
      <div>
        <h1 className="text-sm font-semibold">
          Welcome Divya Sain 👋
        </h1>
        <p className="text-xs text-white/80">
          Here's what happening with you today.
        </p>
      </div>

      {/* Right Section - Icons & Profile */}
      <div className="flex items-center gap-4">
        <Bookmark className="w-5 h-5 cursor-pointer hover:text-gray-200" />
        <Eye className="w-5 h-5 cursor-pointer hover:text-gray-200" />
        <Bell className="w-5 h-5 cursor-pointer hover:text-gray-200" />

        {/* Profile Avatar */}
        <div className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center border border-white">
          <img
            src="user.png" 
            alt="User"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
