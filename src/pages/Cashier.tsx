import React from 'react';
import { Layout } from '../components/Layout';
import { DollarSign, CreditCard, Wallet, Receipt, Plus } from 'lucide-react';

export function Cashier() {
  return (
    <Layout>
      <div className="pt-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Cashier</h1>
            <p className="text-gray-600">Process payments and manage transactions</p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus className="w-5 h-5" />
            New Transaction
          </button>
        </div>

        {/* Transaction Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { title: "Today's Revenue", value: '$1,234.56', icon: DollarSign },
            { title: 'Pending Payments', value: '3', icon: CreditCard },
            { title: 'Completed Transactions', value: '15', icon: Receipt }
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

        {/* Current Transaction */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Current Transaction</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  Service/Treatment
                </label>
                <select className="w-full border rounded-lg px-4 py-2">
                  <option>Select Service</option>
                  <option>Consultation</option>
                  <option>Treatment</option>
                </select>
              </div>
            </div>

            {/* Items List */}
            <div className="mt-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Item</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Consultation</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$50.00</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$50.00</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Treatment A</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$150.00</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$150.00</td>
                  </tr>
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr>
                    <td colSpan={3} className="px-6 py-4 text-right font-medium">Total</td>
                    <td className="px-6 py-4 whitespace-nowrap text-lg font-bold">$200.00</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Payment Section */}
            <div className="mt-6 border-t pt-6">
              <h3 className="text-lg font-medium mb-4">Payment Method</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="flex items-center justify-center gap-2 p-4 border rounded-lg hover:bg-gray-50">
                  <CreditCard className="w-5 h-5" />
                  Credit Card
                </button>
                <button className="flex items-center justify-center gap-2 p-4 border rounded-lg hover:bg-gray-50">
                  <Wallet className="w-5 h-5" />
                  Cash
                </button>
                <button className="flex items-center justify-center gap-2 p-4 border rounded-lg hover:bg-gray-50">
                  <Receipt className="w-5 h-5" />
                  Insurance
                </button>
              </div>
              <div className="mt-6 flex justify-end">
                <button className="btn-primary">Process Payment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}