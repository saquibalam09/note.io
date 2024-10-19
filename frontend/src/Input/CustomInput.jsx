import React, { useState, useEffect } from "react";
// import "./CustomInput.css";

function CustomInput({
  label,
  value,
  onChange,
  placeholder,
  isReadOnly = false,
}) {
  console.log(value);

  return (
    <div className="flex flex-col">
      {label && (
        <label class="block text-lg font-semibold mb-2 text-gray-700">
          {label}
        </label>
      )}
      <textarea
        type="text"
        value={value}
        readOnly={isReadOnly}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-40 p-3 border border-gray-300 rounded-lg text-base font-sans resize-y focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
      />
    </div>
  );
}

export default CustomInput;
