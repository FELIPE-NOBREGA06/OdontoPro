<<<<<<< HEAD
import React from "react";
import { SidebarDashboard } from "./_components/sidebar";
=======
import { SidebarDashboard } from "./_components/sidebar"
>>>>>>> 6328a0a (att)

export default function DashboardLayout({
  children,
}: {
<<<<<<< HEAD
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarDashboard>{children}</SidebarDashboard>
    </>
  );
}
=======
  children: React.ReactNode
}) {
  return (
    <>
      <SidebarDashboard>
        {children}
      </SidebarDashboard>
    </>
  )
}
>>>>>>> 6328a0a (att)
