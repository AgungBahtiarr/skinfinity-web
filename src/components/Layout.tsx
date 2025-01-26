import React from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} />
        <main className={`flex-1 transition-all duration-300 ${
          isCollapsed ? 'pl-16 pr-6' : 'pl-16 lg:pl-64 pr-6 lg:pr-8'
        } p-6`}>
          {children}
        </main>
      </div>
    </div>
  );
}