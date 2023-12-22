import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <button className="bg-gray-400 rounded-lg hover:bg-gray-500 cursor-pointer ml-10 mb-20 mt-2">
          <a href="/">Home</a>
        </button>
        <button className="bg-gray-400 rounded-lg hover:bg-gray-500 cursor-pointer ml-10 mb-20 mt-2">
          <a href="/indicators">Indicators</a>
        </button>
      </div>
      <div className="text-blue-500 text-4xl text-center">
        Economic Score
        </div>
    </div>
  );
};

export default page;
