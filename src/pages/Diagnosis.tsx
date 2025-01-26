import React from 'react';
import { Layout } from '../components/Layout';
import { Search, Plus, Filter, FileText, Stethoscope } from 'lucide-react';

export function Diagnosis() {
  return (
    <Layout>
      <div className="pt-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Diagnosis & Procedures</h1>
            <p className="text-gray-600">ICD-10 and ICD-9 code management</p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus className="w-5 h-5" />
            New Diagnosis
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { title: 'ICD-10 Diagnoses', value: '156', icon: FileText },
            { title: 'ICD-9 Procedures', value: '89', icon: Stethoscope }
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

        {/* Search and Filter */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search ICD codes..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9bbbf4]"
              />
            </div>
            <select className="border rounded-lg px-4 py-2">
              <option>All Types</option>
              <option>ICD-10</option>
              <option>ICD-9</option>
            </select>
            <button className="btn-secondary flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>
        </div>

        {/* ICD Codes List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Usage</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  code: 'J02.0',
                  type: 'ICD-10',
                  description: 'Streptococcal pharyngitis',
                  category: 'Respiratory',
                  usage: 45
                },
                {
                  code: '23.09',
                  type: 'ICD-9',
                  description: 'Other tooth extraction',
                  category: 'Dental',
                  usage: 32
                },
                {
                  code: 'K21.9',
                  type: 'ICD-10',
                  description: 'Gastro-esophageal reflux disease without esophagitis',
                  category: 'Digestive',
                  usage: 28
                }
              ].map((code, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {code.code}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      code.type === 'ICD-10'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {code.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {code.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {code.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {code.usage} times
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent Usage */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Most Used ICD-10 Codes</h2>
            <div className="space-y-4">
              {[
                { code: 'J02.0', description: 'Streptococcal pharyngitis', usage: 45 },
                { code: 'K21.9', description: 'GERD without esophagitis', usage: 38 },
                { code: 'M54.5', description: 'Low back pain', usage: 32 }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{item.code}</span>
                    <span className="text-sm text-gray-500">{item.usage} uses</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#9bbbf4] h-2 rounded-full" 
                      style={{ width: `${(item.usage / 45) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Most Used ICD-9 Procedures</h2>
            <div className="space-y-4">
              {[
                { code: '23.09', description: 'Other tooth extraction', usage: 32 },
                { code: '96.54', description: 'Dental scaling', usage: 28 },
                { code: '24.39', description: 'Other dental surgery', usage: 25 }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{item.code}</span>
                    <span className="text-sm text-gray-500">{item.usage} uses</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#9bbbf4] h-2 rounded-full" 
                      style={{ width: `${(item.usage / 32) * 100}%` }}
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