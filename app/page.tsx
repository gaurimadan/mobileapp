"use client";
import { useState } from 'react';
import { FiDownload, FiFilter, FiMoreVertical, FiX } from 'react-icons/fi';
import Head from 'next/head';
import Image from 'next/image';
import MobileSidebar from './components/MobileSidebar';

interface MarketIndex {
  name: string;
  value: string;
  change?: string;
}

interface Order {
  id: number;
  time: string;
  client: string;
  ticker: string;
  isLive?: boolean;
  side: 'Buy' | 'Sell';
  product: string;
  executed: number;
  total: number;
  price: number;
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string[]>(['RELIANCE', 'ASIANPAINT']);
  const [searchQuery, setSearchQuery] = useState('');
  const [clientId, setClientId] = useState('AAA002');
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const ordersPerPage = 5; 

  const marketIndices: MarketIndex[] = [
    { name: 'SIGNORIA', value: '0.00' },
    { name: 'NIFTY BANK', value: '52,323.30' },
    { name: 'NIFTY FIN SERVICE', value: '25,255.75' },
    { name: 'RELCHEMO', value: '162.73' },
  ];

  const orders: Order[] = [
    { id: 1, time: '08:14:31', client: 'AAA001', ticker: 'RELIANCE', isLive: true, side: 'Buy', product: 'CNC', executed: 50, total: 100, price: 250.50 },
    { id: 2, time: '08:14:31', client: 'AAA003', ticker: 'MRF', side: 'Buy', product: 'NRML', executed: 10, total: 20, price: 2700.00 },
    { id: 3, time: '08:14:31', client: 'AAA002', ticker: 'ASIANPAINT', isLive: true, side: 'Buy', product: 'NRML', executed: 10, total: 30, price: 1500.60 },
    { id: 4, time: '08:14:31', client: 'AAA002', ticker: 'TATAINVEST', side: 'Sell', product: 'INTRADAY', executed: 10, total: 10, price: 2300.10 },
    { id: 5, time: '08:14:35', client: 'AAA001', ticker: 'HDFC', side: 'Buy', product: 'CNC', executed: 25, total: 50, price: 1450.20 },
    { id: 6, time: '08:14:40', client: 'AAA003', ticker: 'INFY', side: 'Sell', product: 'NRML', executed: 5, total: 10, price: 1600.80 },
    { id: 7, time: '08:14:45', client: 'AAA002', ticker: 'ICICI', side: 'Buy', product: 'INTRADAY', executed: 20, total: 20, price: 900.50 },
    { id: 8, time: '08:14:50', client: 'AAA002', ticker: 'AXISBANK', side: 'Sell', product: 'CNC', executed: 15, total: 30, price: 750.90 },
  ];



  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const removeFilter = (filter: string) => {
    setActiveFilter(activeFilter.filter(f => f !== filter));
  };

 
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
     
      <MobileSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

  
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
         
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 relative">
                <Image src="/image.png" alt="Logo" fill className="object-contain" />
              </div>
              <div className="hidden md:flex space-x-6">
                {marketIndices.map((index) => (
                  <div key={index.name} className="text-sm text-gray-700">
                    <span className="font-semibold">{index.value}</span>
                    <span className="text-gray-500 ml-1">{index.name}</span>
                  </div>
                ))}
              </div>
            </div>

         
            <nav className="flex items-center space-x-4">
            <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-gray-100 md:hidden focus:outline-none">
                <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="hidden md:flex items-center space-x-4">
                <a href="#" className="text-gray-700 hover:text-blue-500 text-sm">MARKETWATCH</a>
                <a href="#" className="text-gray-700 hover:text-blue-500 text-sm">EXCHANGE FILES</a>
                <div className="relative group">
                  <a href="#" className="text-gray-700 hover:text-blue-500 text-sm flex items-center">
                    PORTFOLIO
                    <svg className="ml-1 h-4 w-4 text-gray-500 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
                <div className="relative group">
                  <a href="#" className="text-gray-700 hover:text-blue-500 text-sm flex items-center">
                    FUNDS
                    <svg className="ml-1 h-4 w-4 text-gray-500 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
                <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-800 font-semibold text-sm">
                  LK
                </div>
              </div>
            </nav>
          </div>
        
          <div className="md:hidden py-2 overflow-x-auto whitespace-nowrap scrollbar-hide border-t">
            {marketIndices.map((index) => (
              <div key={index.name} className="inline-block mr-4 text-sm text-gray-700">
                <span className="font-semibold">{index.value}</span>
                <span className="text-gray-500 ml-1">{index.name}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

     
      <main className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
        
          <div className="px-4 py-3 border-b flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">Open Orders</h2>
            <button
              className="flex items-center text-blue-500 hover:text-blue-700 text-sm focus:outline-none"
              onClick={() => console.log('Download clicked')}
            >
              <FiDownload className="mr-1" />
              <span className="hidden md:inline">Download</span>
            </button>
          </div>

        
          <div className="px-4 py-3 border-b flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="relative">
                <select
                  className="appearance-none bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:shadow-outline text-sm"
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                >
                  <option value="AAA002">AAA002</option>
                  <option value="BBB111">BBB111</option>
                 
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              <button className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md flex items-center space-x-1 text-sm">
                <span>Lalit</span>
                <FiX className="h-4 w-4 text-gray-500 hover:text-gray-700" />
              </button>
            </div>

            <div className="relative w-full md:w-1/3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-2 overflow-x-auto py-1">
              {activeFilter.map(filter => (
                <button
                  key={filter}
                  className="flex items-center space-x-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm"
                >
                  <span>{filter}</span>
                  <FiX
                    className="h-4 w-4 text-blue-500 hover:text-blue-700 cursor-pointer"
                    onClick={() => removeFilter(filter)}
                  />
                </button>
              ))}
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm flex items-center space-x-1 focus:outline-none"
               
              >
                <FiX className="h-4 w-4" />
                <span>Cancel All</span>
              </button>
            </div>
          </div>

         
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center">
                      Time
                      <svg className="h-4 w-4 ml-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </th>
                  <th className="hidden md:table-cell px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center">
                      Client
                      <svg className="h-4 w-4 ml-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ticker
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center">
                      Side
                      <FiFilter className="ml-1 text-gray-400" />
                    </div>
                  </th>
                  <th className="hidden md:table-cell px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center">
                      Product
                      <FiFilter className="ml-1 text-gray-400" />
                      <svg className="h-4 w-4 ml-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center">
                      Qty (Exec/Total)
                      <svg className="h-4 w-4 ml-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                  </th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-800">{order.time}</td>
                    <td className="hidden md:table-cell px-3 py-2 whitespace-nowrap text-sm text-gray-800">{order.client}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm">
                      <div className="flex items-center">
                        <span className="text-gray-800">{order.ticker}</span>
                        {order.isLive && (
                          <span className="ml-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        )}
                      </div>
                    </td>
                    <td className={`px-3 py-2 whitespace-nowrap text-sm font-medium ${order.side === 'Buy' ? 'text-green-600' : 'text-red-600'}`}>
                      {order.side}
                    </td>
                    <td className="hidden md:table-cell px-3 py-2 whitespace-nowrap text-sm text-gray-800">{order.product}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-800">{order.executed}/{order.total}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-800">{order.price.toFixed(2)}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-right text-sm text-gray-500">
                      <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                        <FiMoreVertical />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-4 py-3 flex items-center justify-between border-t">
            <div className="text-sm text-gray-600">
              Showing {indexOfFirstOrder + 1} to {Math.min(indexOfLastOrder, orders.length)} of {orders.length} orders
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={previousPage}
                disabled={currentPage === 1}
                className={`px-3 py-1 border rounded-md text-sm text-gray-600 hover:bg-gray-100 focus:outline-none ${currentPage === 1 ? 'cursor-not-allowed text-gray-400' : ''}`}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-3 py-1 border rounded-md text-sm focus:outline-none ${currentPage === number ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  {number}
                </button>
              ))}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 border rounded-md text-sm text-gray-600 hover:bg-gray-100 focus:outline-none ${currentPage === totalPages ? 'cursor-not-allowed text-gray-400' : ''}`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}