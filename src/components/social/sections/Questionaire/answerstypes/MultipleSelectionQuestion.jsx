import React from "react";
import { capitalizeString } from "../StringOpration/capitalizeString";

const MultipleSelectionQuestion = ({
  data,
  questionId,
  answer,
  handleMultiSelect,
}) => {
  return (
    <div className="w-full">
      <lable>{capitalizeString(data?.questionText)}</lable>
      <ul className="mt-2 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
        {data?.answerOption &&
          data?.answerOption.map((item) => (
            <li
              key={item}
              className="w-full border-b border-gray-200 rounded-t-lg d p-1 bg-slate-50"
            >
              <div className="flex items-center pl-3">
                <input
                  id={`${questionId}-${item}-checkbox`}
                  type="checkbox"
                  value=""
                  checked={
                    answer &&
                    answer[questionId]?.answer &&
                    answer[questionId].answer.includes(item)
                  }
                  onChange={(e) =>
                    handleMultiSelect(data, item, e.target.checked)
                  }
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                />
                <label
                  htmlFor={`${questionId}-${item}-checkbox`}
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

export default MultipleSelectionQuestion;
