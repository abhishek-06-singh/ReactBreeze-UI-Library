// DocumentsUpload.js
import React, { useState } from "react";
import { capitalizeString } from "../StringOpration/capitalizeString";
import docImg from "../../../assets/docImg.png";

const DocumentsUpload = ({
  data,
  handleDocumentsUpload,
  questionId,
  answer,
}) => {
  const [documents, setDocuments] = useState(
    (answer && answer[questionId]?.answer) || []
  );
  const [showModal, setShowModal] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);

  const handleFileChange = (e) => {
    const newDocuments = [...documents];
    const filesArray = e.target.files;

    for (let i = 0; i < filesArray.length; i++) {
      const file = filesArray[i];
      const fileName = file.name.toLowerCase();

      if (
        fileName.endsWith(".pdf") ||
        fileName.endsWith(".doc") ||
        fileName.endsWith(".docx")
      ) {
        newDocuments.push({ id: Date.now(), file, name: file.name });
      } else {
        console.warn(
          `Ignoring file: ${file.name}. Only PDF and Word documents are allowed.`
        );
      }
    }

    setDocuments([...newDocuments]);
    handleDocumentsUpload(newDocuments, questionId);
  };

  const openModal = (doc) => {
    setSelectedDoc(doc);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedDoc(null);
    setShowModal(false);
  };

  const handleDocumentClick = (doc) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(doc.file);
    downloadLink.download = doc.name;
    downloadLink.click();
  };

  return (
    <div className="w-full">
      <label>{capitalizeString(data?.questionText)}</label>

      <div className="flex mt-2">
        {documents.slice(0, 2).map((doc, index) => (
          <div
            key={doc.id}
            className="mr-2 cursor-pointer"
            onClick={() => handleDocumentClick(doc)}
          >
            <div
              className="w-24 h-24 flex flex-col justify-end items-center relative"
              style={{
                backgroundImage: `url(${docImg})`,
                backgroundSize: "cover",
              }}
            >
              {doc.name.length > 6 ? (
                <span className="truncate">{doc.name.substring(0, 6)}...</span>
              ) : (
                <span>{doc.name}</span>
              )}
              <span
                className="text-s bg-gray-600 w-full rounded-t-lg text-center font-bold  absolute bottom-0"
                style={{
                  color: doc.name.endsWith(".pdf") ? "red" : "blue",
                }}
              >
                {doc.name.endsWith(".pdf") ? "PDF" : "Word"}
              </span>
            </div>
          </div>
        ))}
        {documents.length >= 3 && (
          <div className="mr-2">
            <div
              className="w-24 h-24 bg-gray-300 flex justify-center items-center cursor-pointer"
              onClick={() => openModal()}
            >
              +{documents.length - 2}
            </div>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg max-w-2xl overflow-y-auto">
            <div className="grid grid-cols-2 gap-2">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="mr-2 cursor-pointer"
                  onClick={() => handleDocumentClick(doc)}
                >
                  <div
                    className="w-20 h-20 flex flex-col justify-end items-center relative"
                    style={{
                      backgroundImage: `url(${docImg})`,
                      backgroundSize: "cover",
                    }}
                  >
                    {doc.name.length > 6 ? (
                      <span className="truncate">
                        {doc.name.substring(0, 6)}...
                      </span>
                    ) : (
                      <span>{doc.name}</span>
                    )}
                    <span
                      className="text-s bg-gray-800 w-full rounded-t-lg text-center font-bold absolute bottom-0"
                      style={{
                        color: doc.name.endsWith(".pdf") ? "red" : "blue",
                      }}
                    >
                      {doc.name.endsWith(".pdf") ? "PDF" : "Word"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => closeModal()}
              className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <input
        type="file"
        accept=".pdf, .doc, .docx"
        onChange={handleFileChange}
        className="mt-2"
        multiple
      />
    </div>
  );
};

export default DocumentsUpload;
