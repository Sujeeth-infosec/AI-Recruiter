import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

import Image from "next/image";
import logo from "../../../public/logo.png";
import { PlusIcon } from "@heroicons/react/24/solid"; // Correct import for Heroicons v2

export function AppSiderbar() {
  return (
    <div className="fixed top-0 right-0 h-full bg-white shadow-lg z-50 w-[250px]">
      <Sidebar>
        <SidebarHeader className="flex items-center justify-center mt-5" />
        <Image src={logo} alt="Logo" width={100} height={200} className="mx-auto w-[150px]" />
        <button
          className="w-full mt-5 text-sm font-medium text-white p-2 rounded hover:opacity-90 flex items-center justify-center gap-2"
          style={{ backgroundColor: "#0377fc" }}
        >
          <PlusIcon className="w-5 h-5" /> {/* Adding the "+" icon */}
          Create New Interview
        </button>
        <SidebarContent>
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </div>
  );
}
