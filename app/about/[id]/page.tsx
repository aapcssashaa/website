"use client";

const ID = ({ params }) => {
  return (
    <div>
      <div className="pl-10 pt-2">
        <button className="bg-gray-400 rounded-lg hover:bg-gray-500 cursor-pointer p-2">
          <a href="/">Home</a>
        </button>
      </div>
      <div className="text-blue-500 text-4xl ml-20 pt-20">
        <div>Hello {params.id}. </div>
        <br />
        <div> This is the About Page </div>
      </div>
    </div>
  );
};

export default ID;
