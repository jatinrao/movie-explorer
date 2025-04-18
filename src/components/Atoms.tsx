import React, { PropsWithChildren } from "react";

export const Loader = () => (
  <div
    data-testid="loader"
    className="flex justify-center items-center py-16 m-auto"
  >
    <div className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-transparent animate-spin"></div>
  </div>
);

export const Badge = ({
  children,
  className = "",
}: PropsWithChildren & any) => (
  <span
    className={`bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium ${className}`}
  >
    {children}
  </span>
);

export const IconButton = ({ onClick, icon, label, className = "" }: any) => (
  <button
    data-testid="close-button"
    onClick={onClick}
    className={`p-2 rounded-full transition-colors duration-200 ${className}`}
    aria-label={label}
  >
    {icon}
  </button>
);

export const SectionTitle = ({ children, icon }: PropsWithChildren & any) => (
  <h3 className="text-lg font-semibold mb-2 text-gray-800 flex items-center">
    {icon && <span className="mr-2">{icon}</span>}
    {children}
  </h3>
);

export const FieldLabel = ({ children }: PropsWithChildren & any) => (
  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">
    {children}
  </h3>
);

export const FieldValue = ({ children }: PropsWithChildren) => (
  <p className="text-gray-800 font-medium">{children || "N/A"}</p>
);

type TagProps = PropsWithChildren<{
  color?: "blue" | "red" | "green" | "yellow"; // Define allowed color values
}>;

export const Tag = ({ children, color = "blue" }: TagProps) => {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-800",
    red: "bg-red-100 text-red-800",
    green: "bg-green-100 text-green-800",
    yellow: "bg-yellow-100 text-yellow-800",
  };

  return (
    <span
      className={`${colorClasses[color] ? colorClasses[color] : colorClasses["blue"]} px-2 py-1 rounded text-xs font-medium`}
    >
      {children}
    </span>
  );
};
