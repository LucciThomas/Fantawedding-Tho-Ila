import React from "react";

export function Input({ value, onChange, placeholder, className = "", ...props }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`rounded border border-gray-300 px-3 py-2 text-base text-black ${className}`}
      {...props}
    />
  );
}
