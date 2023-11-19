import React from "react";
import { capitalizeString } from "../StringOpration/capitalizeString";
const BooleanQuestion = ({ data, questionId, answer, handleFields }) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{capitalizeString(data?.questionText)}</label>
      <div className="flex items-center  gap-4">
        <input
          id="country-option-3"
          type="radio"
          onChange={() => handleFields(data, true)}
          checked={answer[questionId]?.answer}
          className="w-4 h-4 border-gray-300 "
        />
        <label>Yes</label>
      </div>
      <div className="flex items-center  gap-4">
        <input
          id="country-option-4"
          type="radio"
          onChange={() => handleFields(data, false)}
          checked={!answer[questionId]?.answer}
          className="w-4 h-4 border-gray-300 "
        />
        <label>No</label>
      </div>
    </div>
  );
};

export default BooleanQuestion;
