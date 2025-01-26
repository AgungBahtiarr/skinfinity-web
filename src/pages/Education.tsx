import React from "react";
import { Layout } from "../components/Layout";
import { BookOpen, Play, Plus, Search, Filter } from "lucide-react";

export function Education() {
  return (
    <Layout>
      <div className="pt-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Educational Content</h1>
            <p className="text-gray-600">
              Manage and share educational resources
            </p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Add Content
          </button>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9bbbf4]"
              />
            </div>
            <button className="btn-secondary flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Dental Hygiene Basics",
              description:
                "Learn the fundamentals of maintaining good dental hygiene.",
              type: "Video",
              duration: "5 mins",
              image:
                "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80",
            },
            {
              title: "Understanding Gum Disease",
              description:
                "Comprehensive guide to periodontal health and prevention.",
              type: "Article",
              duration: "10 mins read",
              image:
                "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80",
            },
            {
              title: "Proper Brushing Technique",
              description:
                "Step-by-step guide to brushing your teeth correctly.",
              type: "Video",
              duration: "3 mins",
              image:
                "https://images.unsplash.com/photo-1550159930-40066082a4fc?auto=format&fit=crop&q=80",
            },
          ].map((content, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="aspect-video relative">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-full object-cover"
                />
                {content.type === "Video" && (
                  <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </button>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      content.type === "Video"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {content.type}
                  </span>
                  <span className="text-sm text-gray-500">
                    {content.duration}
                  </span>
                </div>
                <h3 className="font-medium mb-2">{content.title}</h3>
                <p className="text-sm text-gray-600">{content.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Section */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Oral Hygiene", count: 12 },
              { name: "Dental Procedures", count: 8 },
              { name: "Preventive Care", count: 15 },
              { name: "Nutrition", count: 10 },
              { name: "Childrens Dental Health", count: 6 },
              { name: "Orthodontics", count: 9 },
              { name: "Dental Emergency", count: 5 },
              { name: "Cosmetic Dentistry", count: 7 },
            ].map((category, index) => (
              <button
                key={index}
                className="p-4 border rounded-lg hover:bg-gray-50"
              >
                <h3 className="font-medium mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} items</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
