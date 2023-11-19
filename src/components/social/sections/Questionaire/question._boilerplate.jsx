import React from "react";
import MultipleSelectionQuestion from "./answerstypes/MultipleSelectionQuestion";
import SingleSelectionQuestion from "./answerstypes/SingleSelectionQuestion";
import TextQuestion from "./answerstypes/TextQuestion";
import NumericQuestion from "./answerstypes/NumericQuestion";
import BooleanQuestion from "./answerstypes/BooleanQuestion";
import DateQuestion from "./answerstypes/DateQuestion";
import TimeQuestion from "./answerstypes/TimeQuestion";
import ImageUpload from "./answerstypes/ImageUpload";
import DocumentsUpload from "./answerstypes/DocumentsUpload";
const QuestionBoilerblate = ({
  data,
  AnswerTypetype,
  questionId,
  answer,
  handleMultiSelect,
  handleFields,
  selectTime,
  handleImageUpload,
  customerInfo,
  handleDocumentsUpload,
}) => {
  console.log("Question => ", answer[questionId]?.answer);

  switch (AnswerTypetype) {
    case "multiple-selection":
      return (
        <MultipleSelectionQuestion
          data={data}
          questionId={questionId}
          answer={answer}
          handleMultiSelect={handleMultiSelect}
        />
      );

    case "single-selection":
      return (
        <SingleSelectionQuestion
          data={data}
          questionId={questionId}
          answer={answer}
          handleFields={handleFields}
        />
      );

    case "text":
      return (
        <TextQuestion
          data={data}
          questionId={questionId}
          answer={answer}
          handleFields={handleFields}
        />
      );

    case "numeric":
      return (
        <NumericQuestion
          data={data}
          questionId={questionId}
          answer={answer}
          handleFields={handleFields}
        />
      );

    case "boolean":
      return (
        <BooleanQuestion
          data={data}
          questionId={questionId}
          answer={answer}
          handleFields={handleFields}
        />
      );

    case "date":
      return (
        <DateQuestion
          data={data}
          questionId={questionId}
          answer={answer}
          handleFields={handleFields}
        />
      );

    // case "time":
    //   return (
    //     <TimeQuestion
    //       data={data}
    //       questionId={questionId}
    //       selectTime={selectTime}
    //       handleFields={handleFields}
    //     />
    //   );
    case "image-upload":
      return (
        <ImageUpload
          data={data}
          questionId={questionId}
          answer={answer}
          handleImageUpload={handleImageUpload}
          customerInfo={customerInfo}
        />
      );
    case "document-upload":
      return (
        <DocumentsUpload
          data={data}
          questionId={questionId}
          handleDocumentsUpload={handleDocumentsUpload}
          answer={answer}
          customerInfo={customerInfo}
        />
      );
    default:
      return null;
  }
};

export default QuestionBoilerblate;
