import React, { useEffect, useState } from "react";
import "./questionnaire.css";
import logo from "../../assets/appLogo.png";
import QuestionBoilerblate from "./question._boilerplate";

import { useNavigate } from "react-router-dom";
import questionsData from "./questionsData";

const QuestionnaireBoilerplate = ({ customerInfo, ...props }) => {
  const redirect = useNavigate();
  const [questionData, setQuestionData] = useState(questionsData);
  const [startIndex, setStartIndex] = useState(0);
  const [answer, setAnswer] = useState({});
  const [selectTime, setSelectTime] = useState([]);
  const [validation, setValidation] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  const questionsPerPage = 1; // ------------------------------- To set Question per page set the value of questionsPerPage  ----------------------------------------- //
  console.log("startIndex => ", answer);

  const handleMultiSelect = (data, item, chacked) => {
    let obj = {
      questionId: data?.questionId,
      customerId: data["customerId"],
      answerType: data["answerType"],
    };
    let selectans = [];

    if (chacked) {
      if (answer[data?.questionId] && answer[data?.questionId].answer) {
        selectans = [...answer[data?.questionId].answer, item];
      } else {
        selectans.push(item);
      }
    } else {
      if (answer[data?.questionId]?.answer) {
        selectans = answer[data?.questionId].answer.filter((val) => {
          return val !== item;
        });
      }
    }

    obj.answer = [...selectans];
    setAnswer({
      ...answer,
      [data?.questionId]: obj,
    });
    setFieldErrors({
      ...fieldErrors,
      [data?.questionId]:
        selectans.length === 0
          ? "Please select at least one option."
          : undefined,
    });
  };
  const handleFields = (data, val) => {
    let obj = {
      questionId: data?.questionId,
      customerId: data["customerId"],
      answerType: data["answerType"],
    };
    let timeObj = {
      questionId: data?.questionId,
    };
    if (data?.answerType === "time") {
      const gmtDate = new Date(val);
      timeObj.time = gmtDate;
      let filterval = selectTime.filter(
        (obj) => obj?.questionId !== data?.questionId
      );

      setSelectTime([...filterval, timeObj]);

      console.log("handleFields time  => ", gmtDate);
      const options = {
        hour12: false, // Use 24-hour format
        hour: "2-digit",
        minute: "2-digit",
        // second: "2-digit",
        // timeZoneName: "short",
      };
      // Get the local time string in the user's time zone
      const localTimeString = gmtDate.toLocaleString(undefined, options);
      obj.answer = localTimeString;
    } else if (data?.answerType === "boolean") {
      obj.answer = val;
    } else {
      obj.answer = String(val);
    }

    setAnswer({
      ...answer,
      [data?.questionId]: obj,
    });
    setFieldErrors({
      ...fieldErrors,
      [data?.questionId]: !val ? "This field is required." : undefined,
    });
  };

  const handlePrivous = () => {
    if (startIndex - 2 < 0) {
      return;
    }
    setStartIndex(startIndex - 2);
    setValidation(false);
  };
  const handleImageUpload = (files, questionId) => {
    const imageObj = {
      questionId: questionId,
      customerId: customerInfo?.id,
      answerType: "image-upload",
      answer: files,
    };

    setAnswer({
      ...answer,
      [questionId]: imageObj,
    });

    setFieldErrors({
      ...fieldErrors,
      [questionId]:
        files.length === 0 ? "Please upload at least one image." : undefined,
    });
  };
  const handleDocumentsUpload = (documents, questionId) => {
    const documentObj = {
      questionId: questionId,
      customerId: customerInfo?.id,
      answerType: "document-upload",
      answer: documents,
    };

    setAnswer({
      ...answer,
      [questionId]: documentObj,
    });

    setFieldErrors({
      ...fieldErrors,
      [questionId]:
        documents.length === 0
          ? "Please upload at least one document."
          : undefined,
    });
  };
  const handlePrevNext = (step) => {
    const newIndex = startIndex + step * questionsPerPage;
    const currentPageQuestions = questionData.slice(
      startIndex,
      startIndex + questionsPerPage
    );

    const newFieldErrors = {};
    currentPageQuestions.forEach((q) => {
      const key = q?.questionId;
      if (
        !answer[key] ||
        (typeof answer[key] === "string" && !answer[key].trim())
      ) {
        newFieldErrors[key] = "This field is required.";
      } else {
        newFieldErrors[key] = undefined;
      }
    });

    setFieldErrors({
      ...fieldErrors,
      ...newFieldErrors,
    });

    const hasFieldErrors = Object.values(newFieldErrors).some(
      (error) => !!error
    );

    if (newIndex < 0 || newIndex >= questionData.length) {
      return;
    }

    if (startIndex < startIndex + questionsPerPage && hasFieldErrors) {
      setValidation(true);
      return;
    }

    setStartIndex(newIndex);
    setValidation(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 to-indigo-900 ">
      <div className="authForm">
        <img src={logo} alt="" className="m-4 w-52" />

        <div className="w-full  flex flex-col justify-between   min-h-[21rem]">
          <div>
            <div className="flex flex-col w-full mb-5">
              <div className="flex justify-between items-center">
                <div className="text-[1.25rem] font-bold leading-[2.5rem]">
                  Profile Details
                </div>

                {questionData && questionData.length ? (
                  <div className="text-[0.8rem] ">
                    {"Step" +
                      "(" +
                      Math.ceil((startIndex + 1) / questionsPerPage) +
                      "/ " +
                      Math.ceil(questionData.length / questionsPerPage) +
                      ")"}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div>
                <p className="text-[#666] m-0">
                  Please fill the necessary details so that we can assist you
                  better
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full mb-3">
              {questionData &&
                questionData
                  .slice(startIndex, startIndex + questionsPerPage)
                  .map((obj) => (
                    <div key={obj?.questionId}>
                      <QuestionBoilerblate
                        data={obj}
                        setAnswer={setAnswer}
                        answer={answer}
                        selectTime={selectTime}
                        AnswerTypetype={obj?.answerType}
                        handleMultiSelect={handleMultiSelect}
                        questionId={obj?.questionId}
                        handleFields={handleFields}
                        handleImageUpload={handleImageUpload}
                        customerInfo={customerInfo}
                        handleDocumentsUpload={handleDocumentsUpload}
                      />
                      {fieldErrors[obj?.questionId] && (
                        <p className="text-red-500 text-sm">
                          {fieldErrors[obj?.questionId]}
                        </p>
                      )}
                    </div>
                  ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-full ">
          <div className="flex gap-4 w-full mt-1 ">
            {startIndex >= questionsPerPage ? (
              <div
                className="w-6/12 text-indigo-500 flex justify-center items-center cursor-pointer font-semibold"
                onClick={() => handlePrevNext(-1)}
              >
                Previous
              </div>
            ) : (
              ""
            )}

            <div
              className="w-full bg-indigo-500 text-white cursor-pointer px-3 py-2  flex justify-center items-start rounded-full"
              onClick={() => handlePrevNext(1)}
            >
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireBoilerplate;
