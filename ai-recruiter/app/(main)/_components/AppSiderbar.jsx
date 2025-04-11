import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import { PlusIcon } from "@heroicons/react/24/solid";
import { SideBarOptions } from "@/Services/Constants";

export function AppSiderbar() {
  return (
    <div className="fixed top-0 right-0 h-full bg-white shadow-lg z-50 w-[260px]">
      <Sidebar className="flex flex-col h-full">
        <SidebarHeader className="flex flex-col items-center py-6 border-b">
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={100}
            className="w-[140px] mb-4"
          />
          <button
            className="bg-[#0377fc] text-white rounded-lg text-sm px-4 py-2 flex items-center gap-2 hover:opacity-90 transition"
          >
            <PlusIcon className="w-5 h-5" />
            Create Interview
          </button>
        </SidebarHeader>

        <SidebarContent className="flex-1 overflow-y-auto px-4 mt-4">
          {/* Main */}
          <SidebarGroup>
            <p className="text-xs text-gray-500 mb-2 px-2 uppercase">Main</p>
            <SidebarMenu className="space-y-1">
              {SideBarOptions.slice(0, 2).map((option, index) => (
                <SidebarMenuItem key={index}>
                  <Link
                    href={option.path}
                    className="flex items-center gap-3 text-sm py-2 px-3 rounded hover:bg-gray-100"
                  >
                    <option.icon className="w-5 h-5 text-[#0377fc]" />
                    {option.name}
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          {/* Interviews */}
          <SidebarGroup className="mt-6">
            <p className="text-xs text-gray-500 mb-2 px-2 uppercase">Interviews</p>
            <SidebarMenu className="space-y-1">
              {SideBarOptions.slice(2, 4).map((option, index) => (
                <SidebarMenuItem key={index}>
                  <Link
                    href={option.path}
                    className="flex items-center gap-3 text-sm py-2 px-3 rounded hover:bg-gray-100"
                  >
                    <option.icon className="w-5 h-5 text-[#0377fc]" />
                    {option.name}
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          {/* Settings */}
          <SidebarGroup className="mt-6">
            <p className="text-xs text-gray-500 mb-2 px-2 uppercase">Settings</p>
            <SidebarMenu className="space-y-1">
              {SideBarOptions.slice(4, 5).map((option, index) => (
                <SidebarMenuItem key={index}>
                  <Link
                    href={option.path}
                    className="flex items-center gap-3 text-sm py-2 px-3 rounded hover:bg-gray-100"
                  >
                    <option.icon className="w-5 h-5 text-[#0377fc]" />
                    {option.name}
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t px-4 py-3 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} AI Recruiting
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
