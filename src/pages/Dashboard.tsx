import React from 'react';
import { Layout } from '../components/Layout';
import { Users, Calendar, DollarSign, TrendingUp, Activity, Clock } from 'lucide-react';

function DashboardCard({ title, value, icon: Icon, trend }: { 
  title: string; 
  value: string; 
  icon: React.ComponentType<any>;
  trend?: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          {trend && <p className="text-green-500 text-sm mt-1">+{trend}% from last month</p>}
        </div>
        <div className="bg-[#9bbbf4] bg-opacity-10 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-[#9bbbf4]" />
        </div>
      </div>
    </div>
  );
}

function RecentActivity({ time, title, description }: {
  time: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 pb-4">
      <div className="relative">
        <div className="w-3 h-3 bg-[#9bbbf4] rounded-full"></div>
        <div className="absolute top-3 left-1.5 w-[1px] h-full bg-gray-200"></div>
      </div>
      <div>
        <p className="text-sm text-gray-500">{time}</p>
        <h4 className="font-medium mt-1">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
}

function UpcomingAppointment({ time, patient, treatment }: {
  time: string;
  patient: string;
  treatment: string;
}) {
  return (
    <div className="flex items-center gap-4 pb-4">
      <div className="bg-[#9bbbf4] bg-opacity-10 p-2 rounded">
        <Clock className="w-5 h-5 text-[#9bbbf4]" />
      </div>
      <div>
        <p className="text-sm font-medium">{time}</p>
        <h4 className="text-gray-900">{patient}</h4>
        <p className="text-sm text-gray-500">{treatment}</p>
      </div>
    </div>
  );
}

export function Dashboard() {
  return (
    <Layout>
      <div className="pt-16">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome back, Dr. Sarah</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard 
            title="Total Patients" 
            value="1,234" 
            icon={Users}
            trend="12"
          />
          <DashboardCard 
            title="Today's Appointments" 
            value="8" 
            icon={Calendar}
          />
          <DashboardCard 
            title="Monthly Revenue" 
            value="$45,678" 
            icon={DollarSign}
            trend="8"
          />
          <DashboardCard 
            title="Treatment Success" 
            value="96%" 
            icon={TrendingUp}
            trend="3"
          />
        </div>

        {/* Charts and Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Treatment Analytics */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold">Treatment Analytics</h3>
              <select className="text-sm border rounded-lg px-3 py-2">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
              <p className="text-gray-500">Treatment Analytics Chart</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-6">Recent Activity</h3>
            <div className="space-y-4">
              <RecentActivity
                time="2 hours ago"
                title="New Patient Registration"
                description="Emma Thompson completed registration"
              />
              <RecentActivity
                time="3 hours ago"
                title="Treatment Completed"
                description="Facial rejuvenation for Sarah Wilson"
              />
              <RecentActivity
                time="5 hours ago"
                title="Appointment Rescheduled"
                description="John Doe moved to next Tuesday"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Upcoming Appointments */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-6">Upcoming Appointments</h3>
            <div className="space-y-4">
              <UpcomingAppointment
                time="10:00 AM"
                patient="Emma Thompson"
                treatment="Skin Consultation"
              />
              <UpcomingAppointment
                time="11:30 AM"
                patient="Michael Brown"
                treatment="Laser Treatment"
              />
              <UpcomingAppointment
                time="2:00 PM"
                patient="Sophie Clark"
                treatment="Facial Treatment"
              />
            </div>
          </div>

          {/* Popular Treatments */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-6">Popular Treatments</h3>
            <div className="space-y-4">
              {[
                { name: 'Facial Rejuvenation', count: 45, percentage: 75 },
                { name: 'Laser Treatment', count: 38, percentage: 65 },
                { name: 'Skin Consultation', count: 32, percentage: 55 },
              ].map((treatment, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{treatment.name}</span>
                    <span className="text-sm text-gray-500">{treatment.count} patients</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#9bbbf4] h-2 rounded-full" 
                      style={{ width: `${treatment.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}