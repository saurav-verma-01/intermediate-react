import React from "react";

const SelectedMovie = ({ selectedId, onCloseMovie }) => {
  return (
    <div className="detail">
      {selectedId}
      <button className="btn-back" onClick={onCloseMovie}>
        Close
      </button>
    </div>
  );
};

export default SelectedMovie;
