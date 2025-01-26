import React from 'react';
import { Layout } from '../components/Layout';
import { Calendar as CalendarIcon, Clock, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
];

const appointments = [
  {
    time: '09:00',
    patient: 'Emma Thompson',
    treatment: 'Skin Consultation',
    status: 'confirmed'
  },
  {
    time: '11:00',
    patient: 'Michael Brown',
    treatment: 'Laser Treatment',
    status: 'pending'
  },
  {
    time: '14:00',
    patient: 'Sophie Clark',
    treatment: 'Facial Treatment',
    status: 'completed'
  }
];

function getStatusColor(status: string) {
  switch (status) {
    case 'confirmed':
      return 'bg-green-100 text-green-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'completed':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export function Appointments() {
  return (
    <Layout>
      <div className="pt-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Appointments</h1>
            <p className="text-gray-600">Manage your daily schedule</p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus className="w-5 h-5" />
            New Appointment
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Calendar Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <h2 className="text-lg font-semibold">March 2024</h2>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                    Day
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-[#9bbbf4] rounded-lg">
                    Week
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                    Month
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-8 gap-4">
                {/* Time Column */}
                <div className="space-y-6 pt-16">
                  {timeSlots.map((time) => (
                    <div key={time} className="text-sm text-gray-500">{time}</div>
                  ))}
                </div>

                {/* Days Columns */}
                {Array.from({ length: 7 }).map((_, index) => (
                  <div key={index} className="border-l">
                    <div className="text-center py-4 border-b">
                      <div className="text-sm font-medium">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                      </div>
                      <div className="text-2xl font-semibold">
                        {index + 20}
                      </div>
                    </div>
                    <div className="relative h-full">
                      {/* Appointment slots would go here */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-semibold mb-6">Upcoming Appointments</h3>
            <div className="space-y-4">
              {appointments.map((appointment, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50">
                  <div className="bg-[#9bbbf4] bg-opacity-10 p-2 rounded">
                    <Clock className="w-5 h-5 text-[#9bbbf4]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{appointment.time}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(appointment.status)}`}>
                        {appointment.status}
                      </span>
                    </div>
                    <h4 className="font-medium">{appointment.patient}</h4>
                    <p className="text-sm text-gray-500">{appointment.treatment}</p>
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