import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import {AppSiderbar} from "./_components/AppSiderbar";

function DashboardProvider({children}){
    return (
        <SidebarProvider>
            <AppSiderbar/>
        <div>
            {children}
        </div>
        </SidebarProvider>
    )
}

export default DashboardProvider