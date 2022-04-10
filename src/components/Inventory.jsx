import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });

  const handleBooks = (e) => {
    setInv({ ...inv, books: inv.books + e });
  };
  const handleNoteBooks = (e) => {
    setInv({ ...inv, notebooks: inv.notebooks + e });
  };
  const handlePens = (e) => {
    setInv({ ...inv, pens: inv.pens + e });
  };

  const total = inv.books + inv.notebooks + inv.pens;

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button
          className="circlularButton"
          onClick={() => {
            handleBooks(1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            handleBooks(inv.books <= 0 ? 0 : -1);
          }}
        >
          -
        </button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button
          className="circlularButton"
          onClick={() => {
            handleNoteBooks(1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            handleNoteBooks(inv.notebooks <= 0 ? 0 : -1);
          }}
        >
          -
        </button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button
          className="circlularButton"
          onClick={() => {
            handlePens(1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            handlePens(inv.pens <= 0 ? 0 : -1);
          }}
        >
          -
        </button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
      {/*calculate total and show it*/}
      total: {total}
    </div>
  );
};
