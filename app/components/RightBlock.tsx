"use client";
import React, { useState, useEffect } from "react";
import Card from "./Card";

const RightBlock = () => {
  const [res, setRes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12; // Display 9 cards per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setRes(data); // Save the fetched data to the state
        setLoading(false); // Stop loading after data is fetched
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Logic for pagination
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentPageData = res.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(res.length / cardsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-sky-100 basis-5/6">
      <div className="text-4xl p-2 italic">
        <h1>Featured Products</h1>
      </div>
      <hr className=" border-gray-200 sm:mx-1 dark:border-gray-700 " />
      <div className="text-xl p-1">
        <p>
          Explore wide range of APIs and choose required APIs that are best
          suited for your use case
        </p>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentPageData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 border border-gray-300 rounded-md ${
              currentPage === index + 1 ? "bg-slate-800 text-white" : "bg-white"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RightBlock;
