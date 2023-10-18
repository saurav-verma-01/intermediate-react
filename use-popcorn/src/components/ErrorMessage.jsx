import React from "react";

const ErrorMessage = ({ msg }) => {
  return (
    <p className="error">
      <span>⛔</span> {msg} <span>❌</span>
    </p>
  );
};

export default ErrorMessage;
