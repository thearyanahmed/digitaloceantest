import React, { useState, useEffect } from "react";

interface Option {
  label: string;
  value: string | number;
}

interface SelectProps {
  options: Option[];
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!value && options.length > 0) {
      // Automatically select the first option if no value is provided
      onChange(options[0].value);
    } else {
      let selectedRow: number | null = null;

      // Ensure both `option.value` and `value` are compared as numbers or strings
      options.forEach((option, idx) => {
        const optionValue = typeof option.value === "string" ? parseInt(option.value) : option.value;
        const valueAsNumber = typeof value === "string" ? parseInt(value) : value;

        if (optionValue === valueAsNumber) {
          selectedRow = idx;
        }
      });

      if (selectedRow !== null) {
        onChange(options[selectedRow].value);
      }
    }
  }, [value, options, onChange]);

  // Find the selected label
  const selectedLabel = options.find((option) => option.value === value)?.label;

  const handleSelect = (optionValue: string | number) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Trigger */}
      <div
        className={`w-full h-12 bg-white px-4 py-3.5 flex items-center ring-1 ring-primary justify-between text-md border text-secondary rounded cursor-pointer ${
          disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : ""
        }`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span>{selectedLabel || placeholder}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a 1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-14 w-full bg-white border rounded-xl shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className={`px-4 py-2 cursor-pointer ${
                option.value === value ? "bg-blue-200 font-semibold" : "hover:bg-blue-100"
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
