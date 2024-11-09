"use client";

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CursorSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleSelection = (cursorType: string) => {
    navigate(`/${cursorType}`);
  };

  return (
    <>
      <div className="flex flex-col items-center bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Select a Cursor Effect</h2>
        <button
          className="mb-2 p-2 rounded bg-blue-500 text-white"
          onClick={() => handleSelection("animated")}
        >
          Animated Cursor
        </button>
        <button
          className="mb-2 p-2 rounded bg-green-500 text-white"
          onClick={() => handleSelection("ripple")}
        >
          Ripple Cursor
        </button>
        <button
          className="mb-2 p-2 rounded bg-red-500 text-white"
          onClick={() => handleSelection("round")}
        >
          Round Cursor
        </button>
        <button
          className="p-2 rounded bg-purple-500 text-white"
          onClick={() => handleSelection("trailing")}
        >
          Trailing Cursor
        </button>
      </div>
      <Link to={"/"}>Home</Link>
    </>
  );
};

export default CursorSelection;
