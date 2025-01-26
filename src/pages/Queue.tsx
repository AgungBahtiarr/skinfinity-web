import React from 'react';
import { Layout } from '../components/Layout';
import { Play, Pause, SkipForward, Volume2, Users, Clock, RotateCcw } from 'lucide-react';

export function Queue() {
  return (
    <Layout>
      <div className="pt-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Queue System</h1>
            <p className="text-gray-600">Manage patient queues and waiting times</p>
          </div>
          <div className="flex gap-4">
            <button className="btn-secondary flex items-center gap-2">
              <RotateCcw className="w-5 h-5" />
              Reset Queue
            </button>
            <button className="btn-primary flex items-center gap-2">
              <Play className="w-5 h-5" />
              Call Next
            </button>
          </div>
        </div>

        {/* Queue Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { title: 'Current Number', value: 'A-023', icon: Play },
            { title: 'Waiting Patients', value: '12', icon: Users },
            { title: 'Average Wait Time', value: '15 min', icon: Clock }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-[#9bbbf4] bg-opacity-10 p-3 rounded-lg">
                  <stat.icon className="w-6 h-6 text-[#9bbbf4]" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Queue Display */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Now Serving</h2>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Pause className="w-5 h-5 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <SkipForward className="w-5 h-5 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Volume2 className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
          <div className="text-center py-12">
            <h3 className="text-6xl font-bold text-[#9bbbf4] mb-4">A-023</h3>
            <p className="text-xl text-gray-600">Please proceed to Room 2</p>
          </div>
        </div>

        {/* Queue List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Waiting List</h2>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Queue Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patient Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Waiting Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { number: 'A-024', name: 'John Smith', service: 'General Check-up', waitTime: '10 min', status: 'Next' },
                { number: 'A-025', name: 'Sarah Wilson', service: 'Dental Cleaning', waitTime: '15 min', status: 'Waiting' },
                { number: 'A-026', name: 'Mike Johnson', service: 'Consultation', waitTime: '20 min', status: 'Waiting' }
              ].map((queue, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {queue.number}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {queue.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {queue.service}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {queue.waitTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      queue.status === 'Next'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {queue.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}