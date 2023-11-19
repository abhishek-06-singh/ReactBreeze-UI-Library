import React from "react";
import { capitalizeString } from "../StringOpration/capitalizeString";

const SingleSelectionQuestion = ({
  data,
  questionId,
  answer,
  handleFields,
}) => {
  return (
    <div className="w-full">
      <label>{capitalizeString(data?.questionText)}</label>
      <ul className="mt-2 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
        {data?.answerOption &&
          data?.answerOption.map((item, idx) => (
            <li
              key={item}
              className="w-full border-b border-gray-200 rounded-t-lg d p-1 bg-slate-50"
            >
              <div className="flex items-center pl-3">
                <input
                  id={`${questionId}-${item}-radio`}
                  type="radio"
                  onChange={() => handleFields(data, item)}
                  checked={answer[questionId]?.answer === item}
                  className="w-3 h-3 text-indigo-600 border-gray-300 rounded-full focus:ring-indigo-500"
                />
                <label
                  htmlFor={`${questionId}-${item}-radio`}
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                >
                  {capitalizeString(item)}
                </label>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SingleSelectionQuestion;
