
import React from "react";


const choose = () => {
    const features = [
      "High quality, fresh produce directly from farms.",
      "Competitive pricing with a focus on value for money.",
      "Timely delivery with robust logistics support.",
      "Dedicated customer service ensuring satisfaction."
    ];
  
    const backgroundUrl = "https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg";

  const FeatureCard = ({ text }) => {
    return (
      <div className="bg-white  justify-center  position-center p-10 rounded shadow-md flex items-center">
        <div className="text-blue-500 mr-4">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            //xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <p className="text-gray-700">{text}</p>
      </div>
    );
  };

  return (
    <div>
       {/* Why Choose Bhawani Exports Section  */}
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      >
        <div className="bg-white bg-opacity-75 p-8">
          <h1 className="text-4xl font-bold text-center text-orange-600">Why Choose Bhawani Exports</h1>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} text={feature} />
            ))}
          </div>
        </div>
      </div>
      </div>
      )
    }

export default choose;
