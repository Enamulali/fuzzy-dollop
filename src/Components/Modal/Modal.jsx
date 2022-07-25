import React from "react";
import "./Modal.css";

const Modal = ({ setOpenModal }) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="btn-container">
          <button
            className="modal-btn"
            onClick={() => {
              setOpenModal((curr) => !curr);
            }}
          >
            Close Modal
          </button>
        </div>
        <div className="modal-title">
          <h1>Modal</h1>
        </div>
        <div className="modal-body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            dolorem fugiat inventore labore ab omnis libero alias voluptatem
            modi! Repellat reiciendis, quod fugiat saepe enim repellendus libero
            magni aut voluptate!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
