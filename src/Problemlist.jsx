import { useState } from 'react';
import ProblemStatement from './problemstatement';
import problems from './assets/problems.json'; // Assuming you save the JSON data as problems.json

const ProblemList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < problems["Problem Statements"].length - 1 ? prevIndex + 1 : prevIndex));
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <ProblemStatement problem={problems["Problem Statements"][currentIndex]} />
      <div className="mt-6">
        <button
          className="bg-green-500 text-black px-4 py-2 rounded mr-2 disabled:opacity-50"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button
          className="bg-green-500 text-black px-4 py-2 rounded"
          onClick={handleNext}
          disabled={currentIndex === problems["Problem Statements"].length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProblemList;
