import React from "react";
import Link from "next/link";

const Card = ({ item }) => {
  return (

    
    <div className="flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg h-full">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
          alt="card-image"
        />
      </div>
      <div className="flex-grow p-4">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">{item.title}</h6>
        <p className="text-slate-600 leading-normal font-light">{item.body}</p>
      </div>
      <div className="px-4 pb-4 mt-auto">
        <a href="https://portfolio-iota-lovat-69.vercel.app/" target="_blank" rel="noopener noreferrer">
          <button
            className="w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            View more
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
