import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
  } from "@/components/ui/sidebar"

  import logo from "../../../public/logo.png"
  
  export function AppSiderbar() {
    return (
      <Sidebar>
        <SidebarHeader className='flex items-center mt-5' />
        <img src ="/logo.png" alt="Logo" width={200} height={100} className="w-[150px]"/>
        <button className='w-full mt-5'><plus/> Create New Interview</button>
        <SidebarContent>
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
  