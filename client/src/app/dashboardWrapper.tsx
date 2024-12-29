"use client"
import React, { useEffect } from 'react'
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import StoreProvider, { useAppSelector } from './redux';

const DashboardLayout = ({ children }: {children: React.ReactNode}) => {
  const isSidebarCollapsed = useAppSelector((state)=> state.global.isSidebarCollapsed,
);
const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

useEffect(() =>{
  if(isDarkMode){
    document.documentElement.classList.add("dark") //this will add dark mode to the root element
  }
  else {
    document.documentElement.classList.remove("dark") //this will remove dark mode from the root element
  }
})

  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
    {      }
    <Sidebar/>
    sidebar
    <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${ 
      isSidebarCollapsed ? "": "md:pl-64"}`}>
        
        navbar
        <Navbar/>
        {children}
    </main>
    </div>
);
};

const DashboardWrapper = ({ children }: {children: React.ReactNode}) => {
  return(
    <StoreProvider>
      {/* the entire application has access to the redux code */}
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};
export default DashboardWrapper