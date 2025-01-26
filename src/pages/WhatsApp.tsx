import React from 'react';
import { Layout } from '../components/Layout';
import { MessageCircle, Users, Send, Plus, Search } from 'lucide-react';

export function WhatsApp() {
  return (
    <Layout>
      <div className="pt-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">WhatsApp Broadcast</h1>
            <p className="text-gray-600">Send messages and manage patient communications</p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus className="w-5 h-5" />
            New Broadcast
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { title: 'Total Messages Sent', value: '1,234', icon: MessageCircle },
            { title: 'Active Recipients', value: '567', icon: Users },
            { title: 'Response Rate', value: '92%', icon: Send }
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

        {/* Message Templates */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Message Templates</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Appointment Reminder', message: 'Hi [name], this is a reminder for your appointment tomorrow at [time].' },
              { title: 'Follow-up Care', message: 'Hi [name], how are you feeling after your treatment? Please let us know if you have any concerns.' },
              { title: 'Birthday Wishes', message: 'Happy Birthday [name]! We wish you a wonderful day filled with joy and good health.' }
            ].map((template, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">{template.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{template.message}</p>
                <button className="text-[#9bbbf4] text-sm hover:underline">Use Template</button>
              </div>
            ))}
          </div>
        </div>

        {/* Broadcast History */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Broadcast History</h2>
          </div>
          <div className="p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search broadcasts..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9bbbf4]"
              />
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Message Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Recipients</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Delivered</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Read</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { date: '2024-03-15', type: 'Appointment Reminder', recipients: 45, delivered: 45, read: 42 },
                  { date: '2024-03-14', type: 'Follow-up Care', recipients: 30, delivered: 30, read: 28 },
                  { date: '2024-03-13', type: 'Promotional', recipients: 100, delivered: 98, read: 85 }
                ].map((broadcast, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{broadcast.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{broadcast.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{broadcast.recipients}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{broadcast.delivered}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{broadcast.read}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}