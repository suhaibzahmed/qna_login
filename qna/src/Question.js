import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [btnIcon, setBtnIcon] = useState(true);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setBtnIcon(!btnIcon)}>
          {btnIcon === true ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      <p>{btnIcon === true ? "" : info}</p>
    </article>
  );
};

export default Question;
