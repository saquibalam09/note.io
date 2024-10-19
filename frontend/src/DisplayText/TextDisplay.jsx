import React from "react";
// import "./TextDisplay.css"; // Import CSS for styling

function TextDisplay({ title, content }) {
  return (
    <div className="flex  items-center justify-center h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105">
        {title && <h2 className="text-xl mb-2">{title}</h2>}
        <textarea
          value={content} // Display the value
          readOnly // Prevents the user from modifying the text
          className=" h-full  p-3 border border-gray-300 rounded-lg text-base font-sans resize-y focus:outline-none"
        />
      </div>
    </div>
  );
}

export default TextDisplay;
