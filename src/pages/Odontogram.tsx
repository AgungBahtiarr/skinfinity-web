import React from 'react';
import { Layout } from '../components/Layout';
import { Search, Plus, Filter, Bluetooth as Tooth } from 'lucide-react';

export function Odontogram() {
  return (
    <Layout>
      <div className="pt-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Odontogram</h1>
            <p className="text-gray-600">Dental charting and treatment planning</p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus className="w-5 h-5" />
            New Chart
          </button>
        </div>

        {/* Patient Info */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Patient Name
              </label>
              <select className="w-full border rounded-lg px-4 py-2">
                <option>Select Patient</option>
                <option>Emma Thompson</option>
                <option>Michael Brown</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chart Date
              </label>
              <input
                type="date"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dentist
              </label>
              <select className="w-full border rounded-lg px-4 py-2">
                <option>Select Dentist</option>
                <option>Dr. Sarah Johnson</option>
                <option>Dr. David Wilson</option>
              </select>
            </div>
          </div>
        </div>

        {/* Odontogram Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-lg font-semibold mb-4">Dental Chart</h2>
          <div className="grid grid-cols-16 gap-2">
            {/* Upper Teeth */}
            <div className="col-span-16 grid grid-cols-16 gap-2 mb-8">
              {Array.from({ length: 16 }).map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-sm text-gray-500 mb-2">{18 - index}</span>
                  <button className="w-12 h-12 border rounded-lg hover:bg-gray-50 flex items-center justify-center">
                    <Tooth className="w-8 h-8 text-gray-400" />
                  </button>
                </div>
              ))}
            </div>
            
            {/* Lower Teeth */}
            <div className="col-span-16 grid grid-cols-16 gap-2">
              {Array.from({ length: 16 }).map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <button className="w-12 h-12 border rounded-lg hover:bg-gray-50 flex items-center justify-center">
                    <Tooth className="w-8 h-8 text-gray-400" />
                  </button>
                  <span className="text-sm text-gray-500 mt-2">{31 + index}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Treatment Legend */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Treatment Legend</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { color: 'bg-red-500', label: 'Caries' },
              { color: 'bg-blue-500', label: 'Filling' },
              { color: 'bg-yellow-500', label: 'Crown' },
              { color: 'bg-green-500', label: 'Root Canal' },
              { color: 'bg-purple-500', label: 'Bridge' },
              { color: 'bg-gray-500', label: 'Missing' },
              { color: 'bg-pink-500', label: 'Implant' },
              { color: 'bg-orange-500', label: 'Extraction' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${item.color}`} />
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}