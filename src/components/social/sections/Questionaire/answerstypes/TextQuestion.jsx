import React from "react";
import { capitalizeString } from "../StringOpration/capitalizeString";
const TextQuestion = ({ data, questionId, answer, handleFields }) => {
  return (
    <div className=" w-full flex flex-col gap-4">
      <label>{capitalizeString(data?.questionText)}</label>
      <input
        type="text"
        id="voice-search"
        onChange={(e) => handleFields(data, e.target.value)}
        value={answer && answer[questionId]?.answer}
        className="bg-[#F3F3F3] border px-4 py-2 border-none outline-none rounded-lg"
        required
      />
    </div>
  );
};

export default TextQuestion;
