import React from "react";
import dayjs from "dayjs";
import { MobileTimePicker } from "@mui/x-date-pickers";
import { capitalizeString } from "../StringOpration/capitalizeString";
const TimeQuestion = ({ data, questionId, selectTime, handleFields }) => {
  let time = selectTime.filter((obj) => obj?.questionId === data?.questionId);

  return (
    <div className="flex flex-col gap-2 w-full">
      <label>{capitalizeString(data?.questionText)}</label>
      <div className="relative max-w-sm w-full ">
        <MobileTimePicker
          value={time[0]?.time ? dayjs(time[0]?.time) : ""}
          onChange={(val) => handleFields(data, val)}
        />
      </div>
    </div>
  );
};

export default TimeQuestion;
