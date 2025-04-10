import React from "react"
import DashboardProvider from "./provider" // Import the DashboardProvider component


function DashboardLayout({ Children }) {
    return (
        <div>
            <DashboardProvider>
                {Children}
            </DashboardProvider>
        </div>
    )
}

export default DashboardLayout