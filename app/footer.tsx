import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-red-300 flex items-center "
      style={{ height: "70px" }}
    >
      <div className=" ml-10">
        <Link
          href="/about"
          className="bg-gray-400 rounded-lg hover:bg-gray-500 cursor-pointer p-2 text-center"
        >
          About
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
