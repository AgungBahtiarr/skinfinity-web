import React from 'react';
import { Layout } from '../components/Layout';
import { Camera, Clock, ChevronRight, Image as ImageIcon } from 'lucide-react';

export function Progress() {
  return (
    <Layout>
      <div className="pt-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold">Treatment Progress</h1>
            <p className="text-gray-600">Track and document patient treatment results</p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Camera className="w-5 h-5" />
            Add New Progress
          </button>
        </div>

        {/* Patient Selection */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <select className="flex-1 border rounded-lg px-4 py-2">
              <option>Select Patient</option>
              <option>Emma Thompson</option>
              <option>Michael Brown</option>
              <option>Sophie Clark</option>
            </select>
            <select className="flex-1 border rounded-lg px-4 py-2">
              <option>Select Treatment</option>
              <option>Facial Rejuvenation</option>
              <option>Laser Treatment</option>
              <option>Skin Care</option>
            </select>
          </div>
        </div>

        {/* Progress Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Before/After Comparison */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-semibold mb-6">Treatment Progress</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-500">Before Treatment</h4>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500">Taken on March 1, 2024</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-500">Latest Progress</h4>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500">Taken on March 15, 2024</p>
              </div>
            </div>
          </div>

          {/* Progress Notes */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-semibold mb-6">Progress Notes</h3>
            <div className="space-y-6">
              {[
                { date: 'March 15, 2024', note: 'Significant improvement in skin texture. Patient reports satisfaction with results.' },
                { date: 'March 8, 2024', note: 'Second treatment session completed. Minor redness observed, expected to subside within 24 hours.' },
                { date: 'March 1, 2024', note: 'Initial treatment session. Treatment plan discussed and agreed upon.' }
              ].map((note, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#9bbbf4]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{note.date}</p>
                    <p className="mt-1">{note.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Treatment Timeline */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-semibold mb-6">Treatment Timeline</h3>
          <div className="space-y-6">
            {[
              { date: 'March 15, 2024', treatment: 'Facial Rejuvenation', status: 'Completed' },
              { date: 'March 8, 2024', treatment: 'Laser Treatment', status: 'Completed' },
              { date: 'March 22, 2024', treatment: 'Follow-up Session', status: 'Scheduled' }
            ].map((session, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50">
                <div className={`w-3 h-3 rounded-full ${
                  session.status === 'Completed' ? 'bg-green-500' : 'bg-[#9bbbf4]'
                }`} />
                <div className="flex-1">
                  <p className="text-sm text-gray-500">{session.date}</p>
                  <h4 className="font-medium">{session.treatment}</h4>
                </div>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  session.status === 'Completed' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {session.status}
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}