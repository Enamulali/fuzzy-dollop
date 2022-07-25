import React, { useState } from "react";
import "./Main.css";
import Modal from "./Modal/Modal";

const Main = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="main-container">
      <img
        src="/6F38F63A-1D64-455D-99FC-E510ECF2C0AD.jpeg"
        alt="header-img"
        className="header-img"
      />
      <h2 className="main-header">LET'S GO OUTSIDE</h2>
      <div className="paragraph-container">
        <p className="main-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error
          minima possimus illum sit et dolor architecto sunt, aut quibusdam.
          Facere maiores eos itaque quidem tempore alias reiciendis nulla
          ratione. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Totam dolorem dicta voluptatibus, non aut unde?
        </p>
        <p className="main-paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis id
          consequuntur adipisci corrupti, sunt assumenda ipsam dolores ea
          obcaecati commodi reiciendis debitis sequi quas, voluptatibus nesciunt
          qui voluptates dignissimos? Provident?
        </p>
      </div>
      <div className="btn-container">
        <button
          className="main-btn"
          onClick={() => {
            setOpenModal((curr) => {
              return !curr;
            });
          }}
        >
          READ MORE
        </button>
      </div>
      {openModal ? <Modal setOpenModal={setOpenModal} /> : null}
    </div>
  );
};

export default Main;
