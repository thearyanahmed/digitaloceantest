import React from "react";

interface CheckboxProps {
  id: string; // Unique ID for the checkbox
  label?: string; // Optional label
  checked: boolean; // Checked state
  onChange: (checked: boolean) => void; // Change handler
  disabled?: boolean; // Optional disabled state
  className?: string; // Optional custom class for styling
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  disabled = false,
  className = "",
}) => {
  const handleCheckboxChange = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <div className={`flex items-center ${className}`}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        disabled={disabled}
        className={`w-5 h-5 border rounded-md cursor-pointer bg-primary ${
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        }`}
      />
      {label && (
        <label
          htmlFor={id}
          className={`ml-2 text-sm ${
            disabled ? "text-secondary" : "text-secondary"
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
