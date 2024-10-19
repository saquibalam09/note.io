import React, { useEffect, useState } from "react";
import axios from "axios";
import ViewNote from "./ViewNote";
import CustomInput from "../Input/CustomInput";

const CreateNote = () => {
  // const [content, setContent] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [note, setNote] = useState("");
  const [noteUrl, setNoteUrl] = useState(
    `http://localhost:${window.location.port}/note/`
  );
  // const [view, setView] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(noteUrl)
      .then(() => {
        setCopied(true); // Show confirmation after successful copy
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const closeModal = () => {
    setModalOpen(false);
    setCopied(false); // Reset copied state when closing

    setNoteUrl(`http://localhost:${window.location.port}/note/`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/notes", {
        note,
      });
      setModalOpen(true);
      setNoteUrl(noteUrl + String(response.data.randomUrl));
      // console.log(noteUrl);

      // alert(
      //   `Note created! URL: http://localhost:5173/note/${response.data._id}`
      // );
    } catch (error) {
      console.error(error);
    }
  };
  // const handleNoteChange = (newValue) => {
  //   setNote(newValue);
  //   // Optionally, send updated value to the backend if needed
  //   // await fetch('/api/updateNote', { method: 'POST', body: JSON.stringify({ note: newValue }) });
  // };

  return (
    <div className="">
      <div>
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Create Note
          </h2>
          <form onSubmit={handleSubmit}>
            <CustomInput
              label="Write your note"
              value={note}
              onChange={setNote}
              placeholder="Type your note here..."
            />
            <button
              type="submit"
              className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Save Note
            </button>
          </form>
        </div>
        {modalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Note Created!
              </h2>
              <p className="text-gray-600 mb-2">Here is your unique URL:</p>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded mb-4 text-gray-700"
                type="text"
                value={noteUrl}
                readOnly
              />
              <button
                onClick={handleCopy}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
              >
                Copy URL
              </button>
              {copied && (
                <p className="text-green-500 text-sm mb-4">
                  URL copied to clipboard!
                </p>
              )}
              <button
                onClick={closeModal}
                className="w-full bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateNote;
