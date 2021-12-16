import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import ButtonProps from "./buttonTypes";

/**
 * Primary UI component for user interaction
 */
export const Button2 = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      test
      {label}
    </button>
  );
};
