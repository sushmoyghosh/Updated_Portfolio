import React, { useState } from 'react';

const ColorChanger = () => {
  const colors = ['bg-red-800', 'bg-fuchsia-500', 'bg-blue-500', 'bg-green-500'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const changeColor = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const currentColorClass = colors[currentColorIndex];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className={`w-1/2 p-8 text-center ${currentColorClass}`}>
        Section with Dynamic Color
      </div>
      <button
        onClick={changeColor}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Change Color
      </button>
    </div>
  );
};

export default ColorChanger;
