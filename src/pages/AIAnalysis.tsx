import React from "react";
import { Layout } from "../components/Layout";
import {
  Brain,
  TrendingUp,
  Users,
  DollarSign,
  BarChart2,
  ChevronRight,
} from "lucide-react";

export function AIAnalysis() {
  return (
    <Layout>
      <div className="pt-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">AI Analysis</h1>
            <p className="text-gray-600">
              AI-powered insights and recommendations
            </p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Brain className="w-5 h-5" />
            Generate Report
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: "Patient Growth",
              value: "+12%",
              trend: "up",
              icon: Users,
            },
            {
              title: "Revenue Growth",
              value: "+8%",
              trend: "up",
              icon: DollarSign,
            },
            {
              title: "Treatment Success",
              value: "94%",
              trend: "up",
              icon: TrendingUp,
            },
            {
              title: "Patient Satisfaction",
              value: "4.8/5",
              trend: "stable",
              icon: Users,
            },
          ].map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{metric.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{metric.value}</h3>
                </div>
                <div className="bg-[#9bbbf4] bg-opacity-10 p-3 rounded-lg">
                  <metric.icon className="w-6 h-6 text-[#9bbbf4]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Performance Analysis */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Performance Analysis</h2>
            <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
              <p className="text-gray-500">Performance Trend Chart</p>
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">AI Recommendations</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Optimize Appointment Slots",
                  description:
                    "Consider adding more slots during peak hours (2-5 PM) to reduce wait times.",
                  impact: "High",
                },
                {
                  title: "Staff Training Focus",
                  description:
                    "Invest in advanced procedure training for staff to expand service offerings.",
                  impact: "Medium",
                },
                {
                  title: "Inventory Management",
                  description:
                    "Implement automated reordering for frequently used supplies.",
                  impact: "High",
                },
              ].map((rec, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50"
                >
                  <div
                    className={`w-2 h-2 mt-2 rounded-full ${
                      rec.impact === "High" ? "bg-red-500" : "bg-yellow-500"
                    }`}
                  />
                  <div>
                    <h3 className="font-medium">{rec.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {rec.description}
                    </p>
                    <span
                      className={`inline-block mt-2 text-xs px-2 py-1 rounded-full ${
                        rec.impact === "High"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {rec.impact} Impact
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Analysis Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Patient Demographics */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Patient Demographics</h2>
            <div className="h-[250px] flex items-center justify-center border-2 border-dashed rounded-lg">
              <p className="text-gray-500">Demographics Chart</p>
            </div>
          </div>

          {/* Treatment Success Rates */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">
              Treatment Success Rates
            </h2>
            <div className="h-[250px] flex items-center justify-center border-2 border-dashed rounded-lg">
              <p className="text-gray-500">Success Rates Chart</p>
            </div>
          </div>

          {/* Revenue Optimization */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Revenue Optimization</h2>
            <div className="space-y-4">
              {[
                {
                  name: "Dental Implants",
                  potential: "+15%",
                  current: "$45,000",
                },
                { name: "Orthodontics", potential: "+8%", current: "$38,000" },
                {
                  name: "Cosmetic Procedures",
                  potential: "+12%",
                  current: "$29,000",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      Current: {item.current}
                    </p>
                  </div>
                  <span className="text-green-500">{item.potential}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Operational Efficiency */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">
              Operational Efficiency
            </h2>
            <div className="space-y-4">
              {[
                {
                  metric: "Average Wait Time",
                  value: "12 mins",
                  target: "10 mins",
                },
                {
                  metric: "Treatment Room Utilization",
                  value: "78%",
                  target: "85%",
                },
                { metric: "Staff Productivity", value: "82%", target: "90%" },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{item.metric}</span>
                    <span className="text-sm text-gray-500">
                      Target: {item.target}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#9bbbf4] h-2 rounded-full"
                      style={{ width: item.value }}
                    ></div>
                  </div>
                  <p className="text-sm text-right mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
