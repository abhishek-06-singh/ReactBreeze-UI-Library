import React from "react";
import { capitalizeString } from "../StringOpration/capitalizeString";
const NumericQuestion = ({ data, questionId, answer, handleFields }) => {
  return (
    <div className=" w-full flex flex-col gap-4">
      <label>{capitalizeString(data?.questionText)}</label>
      <input
        type="number"
        id="voice-search"
        onChange={(e) => handleFields(data, e.target.value)}
        value={answer && answer[questionId]?.answer}
        className="bg-[#F3F3F3] border px-4 py-2 border-none outline-none rounded-lg"
        onWheel={(e) => e.target.blur()}
        required
      />
    </div>
  );
};

export default NumericQuestion;
