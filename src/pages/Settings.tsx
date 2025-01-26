import React from 'react';
import { Layout } from '../components/Layout';
import { User, Bell, Shield, Sliders, Building } from 'lucide-react';

export function Settings() {
  return (
    <Layout>
      <div className="pt-16">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-gray-600">Manage your clinic preferences and configurations</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <nav className="space-y-2">
                {[
                  { name: 'Clinic Profile', icon: Building },
                  { name: 'User Management', icon: User },
                  { name: 'Notifications', icon: Bell },
                  { name: 'Security', icon: Shield },
                  { name: 'Preferences', icon: Sliders }
                ].map((item, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left ${
                      index === 0 ? 'bg-[#9bbbf4] bg-opacity-10 text-[#9bbbf4]' : 'hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 ${index === 0 ? 'text-[#9bbbf4]' : 'text-gray-500'}`} />
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {/* Clinic Profile Section */}
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">Clinic Profile</h2>
                <p className="text-gray-500 text-sm mt-1">Update your clinic's information</p>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Clinic Logo */}
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Building className="w-12 h-12 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Clinic Logo</h4>
                    <button className="btn-secondary text-sm">Change Logo</button>
                  </div>
                </div>

                {/* Clinic Information Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Clinic Name
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded-lg px-4 py-2"
                      defaultValue="Skinfinity Beauty Clinic"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full border rounded-lg px-4 py-2"
                      defaultValue="contact@skinfinity.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full border rounded-lg px-4 py-2"
                      defaultValue="+1 234-567-8900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      className="w-full border rounded-lg px-4 py-2"
                      defaultValue="https://skinfinity.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <textarea
                      className="w-full border rounded-lg px-4 py-2"
                      rows={3}
                      defaultValue="123 Beauty Street, Suite 100, Los Angeles, CA 90001"
                    />
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <h4 className="font-medium mb-4">Business Hours</h4>
                  <div className="space-y-3">
                    {[
                      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
                    ].map((day) => (
                      <div key={day} className="flex items-center gap-4">
                        <span className="w-24 text-sm">{day}</span>
                        <input
                          type="time"
                          className="border rounded px-2 py-1"
                          defaultValue="09:00"
                        />
                        <span className="text-gray-500">to</span>
                        <input
                          type="time"
                          className="border rounded px-2 py-1"
                          defaultValue="17:00"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <button className="btn-secondary">Cancel</button>
                  <button className="btn-primary">Save Changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}