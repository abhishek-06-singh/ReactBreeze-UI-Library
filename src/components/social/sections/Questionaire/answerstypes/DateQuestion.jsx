import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { capitalizeString } from "../StringOpration/capitalizeString";
const DateQuestion = ({ data, questionId, answer, handleFields }) => {
  let date = new Date(answer[questionId]?.answer);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <div className="flex flex-col gap-2 w-full">
      <label>{capitalizeString(data?.questionText)}</label>
      <div className="relative max-w-sm w-full ">
        <DatePicker
          placeholder="Select a date"
          className="bg-[#F3F3F3]  w-full border px-4 py-2 border-none outline-none rounded-lg"
          onChange={(val) => handleFields(data, val)}
          value={formattedDate !== "NaN-NaN-NaN" ? formattedDate : ""}
        />
      </div>
    </div>
  );
};

export default DateQuestion;
