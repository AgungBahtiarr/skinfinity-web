import React from 'react';
import { Layout } from '../components/Layout';
import { BarChart2, TrendingUp, Users, Target, Share2 } from 'lucide-react';

export function MetaAnalytics() {
  return (
    <Layout>
      <div className="pt-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Meta Analytics</h1>
            <p className="text-gray-600">Social media and marketing performance insights</p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            Share Report
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Page Reach', value: '45.2K', trend: '+12%', icon: Users },
            { title: 'Engagement Rate', value: '6.8%', trend: '+3%', icon: Target },
            { title: 'Click-through Rate', value: '2.4%', trend: '+1%', icon: TrendingUp },
            { title: 'Conversion Rate', value: '1.2%', trend: '+0.5%', icon: BarChart2 }
          ].map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{metric.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{metric.value}</h3>
                  <p className="text-green-500 text-sm mt-1">{metric.trend} from last month</p>
                </div>
                <div className="bg-[#9bbbf4] bg-opacity-10 p-3 rounded-lg">
                  <metric.icon className="w-6 h-6 text-[#9bbbf4]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Audience Growth */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Audience Growth</h2>
            <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
              <p className="text-gray-500">Audience Growth Chart</p>
            </div>
          </div>

          {/* Engagement Analysis */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Engagement Analysis</h2>
            <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
              <p className="text-gray-500">Engagement Chart</p>
            </div>
          </div>
        </div>

        {/* Content Performance */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Top Performing Content</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Content</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reach</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Engagement</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Clicks</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    content: 'Dental Care Tips',
                    type: 'Video',
                    reach: '12.5K',
                    engagement: '8.2%',
                    clicks: '456'
                  },
                  {
                    content: 'Before & After',
                    type: 'Image',
                    reach: '10.1K',
                    engagement: '6.8%',
                    clicks: '342'
                  },
                  {
                    content: 'Patient Story',
                    type: 'Article',
                    reach: '8.3K',
                    engagement: '5.4%',
                    clicks: '234'
                  }
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.content}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.reach}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.engagement}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.clicks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Audience Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Demographics */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Audience Demographics</h2>
            <div className="space-y-4">
              {[
                { age: '18-24', percentage: 15 },
                { age: '25-34', percentage: 35 },
                { age: '35-44', percentage: 25 },
                { age: '45-54', percentage: 15 },
                { age: '55+', percentage: 10 }
              ].map((demo, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{demo.age}</span>
                    <span className="text-sm text-gray-500">{demo.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#9bbbf4] h-2 rounded-full" 
                      style={{ width: `${demo.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location Insights */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Top Locations</h2>
            <div className="space-y-4">
              {[
                { city: 'New York', percentage: 30 },
                { city: 'Los Angeles', percentage: 25 },
                { city: 'Chicago', percentage: 20 },
                { city: 'Houston', percentage: 15 },
                { city: 'Phoenix', percentage: 10 }
              ].map((location, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{location.city}</span>
                    <span className="text-sm text-gray-500">{location.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#9bbbf4] h-2 rounded-full" 
                      style={{ width: `${location.percentage}%` }}
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