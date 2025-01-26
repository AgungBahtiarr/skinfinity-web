import React from 'react';
import { Layout } from '../components/Layout';
import { Download, Calendar, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export function Reports() {
  return (
    <Layout>
      <div className="pt-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold">Financial Reports</h1>
            <p className="text-gray-600">Track your clinic's financial performance</p>
          </div>
          <div className="flex gap-4">
            <select className="border rounded-lg px-4 py-2">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
            <button className="btn-secondary flex items-center gap-2">
              <Download className="w-5 h-5" />
              Export
            </button>
          </div>
        </div>

        {/* Financial Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Revenue', value: '$45,678', trend: '+12%', icon: DollarSign },
            { title: 'Expenses', value: '$12,345', trend: '-3%', icon: TrendingDown },
            { title: 'Net Profit', value: '$33,333', trend: '+8%', icon: TrendingUp },
            { title: 'Avg. Treatment Value', value: '$299', trend: '+5%', icon: Calendar }
          ].map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{card.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{card.value}</h3>
                  <p className={`text-sm mt-1 ${
                    card.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>{card.trend} from last month</p>
                </div>
                <div className="bg-[#9bbbf4] bg-opacity-10 p-3 rounded-lg">
                  <card.icon className="w-6 h-6 text-[#9bbbf4]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-6">Revenue Trend</h3>
            <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
              <p className="text-gray-500">Revenue Chart</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-6">Treatment Revenue Distribution</h3>
            <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
              <p className="text-gray-500">Distribution Chart</p>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b">
            <h3 className="font-semibold">Recent Transactions</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Treatment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { date: '2024-03-15', treatment: 'Facial Treatment', patient: 'Emma Thompson', amount: '$299', status: 'completed' },
                  { date: '2024-03-14', treatment: 'Laser Treatment', patient: 'Michael Brown', amount: '$599', status: 'pending' },
                  { date: '2024-03-13', treatment: 'Skin Consultation', patient: 'Sophie Clark', amount: '$149', status: 'completed' }
                ].map((transaction, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.treatment}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.patient}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        transaction.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {transaction.status}
                      </span>
                    </td>
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