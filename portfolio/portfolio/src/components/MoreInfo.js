import React from "react";
import ReactDOM from "react-dom";
import "../timeline.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
