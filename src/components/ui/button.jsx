import React from "react";

export function Button({ children, onClick, className = "", disabled = false, size = "md", variant = "default" }) {
  const sizeStyles = {
    sm: "text-sm px-2 py-1",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3"
  };
  const variantStyles = {
    default: "bg-pink-600 text-white hover:bg-pink-700",
    outline: "border border-pink-600 text-pink-600 hover:bg-pink-50",
    destructive: "bg-red-600 text-white hover:bg-red-700"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-xl font-semibold disabled:opacity-50 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
