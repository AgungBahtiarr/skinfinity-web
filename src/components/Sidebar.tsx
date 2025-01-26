import React from 'react';
import { LayoutDashboard, Users, Calendar, Package, BarChart, Settings, ClipboardList, ChevronLeft, ChevronRight, Stethoscope, MessageCircle, Bell, Building, BookOpen, Pill as Pills, ListOrdered, FileText, CreditCard, Brain, BarChart2 } from 'lucide-react';
import { MenuItem } from '../types';
import { useLocation, Link } from 'react-router-dom';

const menuItems: MenuItem[] = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Patients', path: '/patients', icon: Users },
  { name: 'Appointments', path: '/appointments', icon: Calendar },
  { name: 'Medical Records', path: '/medical-records', icon: ClipboardList },
  { name: 'Odontogram', path: '/odontogram', icon: Stethoscope },
  { name: 'Diagnosis & Procedures', path: '/diagnosis', icon: FileText },
  { name: 'Referrals & Letters', path: '/referrals', icon: FileText },
  { name: 'Inventory', path: '/inventory', icon: Package },
  { name: 'Queue System', path: '/queue', icon: ListOrdered },
  { name: 'Prescriptions', path: '/prescriptions', icon: FileText },
  { name: 'Cashier', path: '/cashier', icon: CreditCard },
  { name: 'WhatsApp', path: '/whatsapp', icon: MessageCircle },
  { name: 'Reminders', path: '/reminders', icon: Bell },
  { name: 'BPJS Integration', path: '/bpjs', icon: Building },
  { name: 'Education', path: '/education', icon: BookOpen },
  { name: 'Medications', path: '/medications', icon: Pills },
  { name: 'AI Analysis', path: '/ai-analysis', icon: Brain },
  { name: 'Financial Reports', path: '/reports', icon: BarChart },
  { name: 'Meta Analytics', path: '/meta-analytics', icon: BarChart2 },
  { name: 'Settings', path: '/settings', icon: Settings },
];

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const location = useLocation();

  return (
    <aside 
      className={`fixed left-0 top-14 h-[calc(100vh-3.5rem)] bg-white border-r border-gray-200 z-20 transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="relative h-full">
        <div className="overflow-y-auto py-5 px-3 h-full">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-[#9bbbf4] bg-opacity-10 text-[#9bbbf4]' 
                        : 'text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 ${isActive ? 'text-[#9bbbf4]' : 'text-gray-500'}`} />
                    <span className={`ml-3 whitespace-nowrap ${isCollapsed ? 'hidden' : 'block'}`}>
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        
        <button
          onClick={onToggle}
          className="absolute -right-3 top-6 bg-white border border-gray-200 rounded-full p-1.5 hover:bg-gray-50"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>
    </aside>
  );
}