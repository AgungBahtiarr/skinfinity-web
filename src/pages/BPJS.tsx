import React from 'react';
import { Layout } from '../components/Layout';
import { Building, FileText, Users, RefreshCw, Search, Filter } from 'lucide-react';

export function BPJS() {
  return (
    <Layout>
      <div className="pt-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">BPJS Integration</h1>
            <p className="text-gray-600">Manage BPJS claims and patient verification</p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <RefreshCw className="w-5 h-5" />
            Sync Data
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { title: 'Total Claims', value: '156', icon: FileText },
            { title: 'Pending Verification', value: '23', icon: RefreshCw },
            { title: 'BPJS Patients', value: '89', icon: Users }
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

        {/* Patient Verification */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Patient Verification</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  BPJS Number
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="Enter BPJS number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  NIK
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="Enter NIK"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="btn-primary">Verify Patient</button>
            </div>
          </div>
        </div>

        {/* Claims List */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Claims History</h2>
          </div>
          <div className="p-4">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search claims..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9bbbf4]"
                />
              </div>
              <button className="btn-secondary flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Claim ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Treatment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    id: 'CLM001',
                    patient: 'Emma Thompson',
                    date: '2024-03-15',
                    treatment: 'General Check-up',
                    amount: 'Rp 150.000',
                    status: 'Approved'
                  },
                  {
                    id: 'CLM002',
                    patient: 'Michael Brown',
                    date: '2024-03-14',
                    treatment: 'Dental Care',
                    amount: 'Rp 350.000',
                    status: 'Pending'
                  }
                ].map((claim, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {claim.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {claim.patient}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {claim.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {claim.treatment}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {claim.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        claim.status === 'Approved'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {claim.status}
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