import React from 'react';
import { Layout } from '../components/Layout';
import { Search, Plus, Filter, AlertTriangle } from 'lucide-react';

const products = [
  {
    id: 'P001',
    name: 'Facial Cleanser',
    stock: 45,
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80',
    status: 'in-stock'
  },
  {
    id: 'P002',
    name: 'Anti-Aging Serum',
    stock: 8,
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80',
    status: 'low-stock'
  },
  {
    id: 'P003',
    name: 'Moisturizer',
    stock: 0,
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1611080002340-38fcf92b8e8f?auto=format&fit=crop&q=80',
    status: 'out-of-stock'
  }
];

function getStatusColor(status: string) {
  switch (status) {
    case 'in-stock':
      return 'bg-green-100 text-green-800';
    case 'low-stock':
      return 'bg-yellow-100 text-yellow-800';
    case 'out-of-stock':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export function Inventory() {
  return (
    <Layout>
      <div className="pt-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold">Inventory Management</h1>
            <p className="text-gray-600">Track and manage your product inventory</p>
          </div>
          <button className="btn-primary flex items-center gap-2 whitespace-nowrap">
            <Plus className="w-5 h-5" />
            Add Product
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Products', value: '156', trend: '+12%' },
            { title: 'Low Stock Items', value: '8', trend: '-3%' },
            { title: 'Out of Stock', value: '3', trend: '-2%' },
            { title: 'Total Value', value: '$12,458', trend: '+8%' }
          ].map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-gray-500 text-sm">{card.title}</h3>
              <div className="flex items-end gap-2 mt-2">
                <span className="text-2xl font-bold">{card.value}</span>
                <span className={`text-sm ${
                  card.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>{card.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9bbbf4]"
              />
            </div>
            <button className="btn-secondary flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-square relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.status === 'low-stock' && (
                  <div className="absolute top-2 right-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    Low Stock
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium">{product.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-600">${product.price}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(product.status)}`}>
                    {product.stock} in stock
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}