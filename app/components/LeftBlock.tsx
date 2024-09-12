import React from "react";

const LeftBlock = () => {
  return (
    <div className="basis-full sm:basis-1/4 p-2">
      <div className="h-auto p-2 shadow-md shadow-black/10 m-2 bg-white rounded-md">
        <ul>
          <li className="p-4">
            <div className="relative h-10 w-full">
              <select className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-2.5 text-sm text-blue-gray-700 transition-all focus:border-gray-900">
                <option value="brazil">Corporate Payments</option>
                <option value="bucharest">Corporate Collections</option>
                <option value="london">Credit Card</option>
                <option value="washington">Deposits</option>
              </select>
              <label className="absolute left-0 -top-1.5 flex h-full w-full text-xs text-blue-gray-400 transition-all peer-placeholder-shown:text-sm peer-focus:text-xs">
                Featured Use Cases
              </label>
            </div>
          </li>
          <li className="p-4">
            <div className="relative h-10 w-full">
              <select className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-2.5 text-sm text-blue-gray-700 transition-all focus:border-gray-900">
                <option value="brazil">Corporate Payments</option>
                <option value="bucharest">Corporate Collections</option>
                <option value="london">UPI</option>
                <option value="london">Corporate Services</option>
                <option value="washington">Bill Payments</option>
              </select>
              <label className="absolute left-0 -top-1.5 flex h-full w-full text-xs text-blue-gray-400 transition-all peer-placeholder-shown:text-sm peer-focus:text-xs">
                Product API
              </label>
            </div>
          </li>
          <li className="p-4">
            <div className="relative h-10 w-full">
              <select className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-2.5 text-sm text-blue-gray-700 transition-all focus:border-gray-900">
                <option value="brazil">Bill Payments (BBPS COU)</option>
              </select>
              <label className="absolute left-0 -top-1.5 flex h-full w-full text-xs text-blue-gray-400 transition-all peer-placeholder-shown:text-sm peer-focus:text-xs">
                Cross Cutting
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftBlock;
