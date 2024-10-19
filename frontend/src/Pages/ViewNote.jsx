import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import CustomInput from "../Input/CustomInput";
import TextDisplay from "../DisplayText/TextDisplay";

const ViewNote = () => {
  const [note, setNote] = React.useState(null);
  const { randomUrl } = useParams();
  // console.log(randomUrl);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/notes/${randomUrl}`
        );
        setNote(response.data.content);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNote();
  }, [randomUrl]);

  return (
    <div className="">
      <div>
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Create Note
          </h2>
          <form onSubmit>
            <CustomInput
              isReadOnly={true}
              label="Write your note"
              value={note}
            />
            <button
              type="submit"
              className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Save Note
            </button>
          </form>
        </div>
      </div>
      {/* 
      
      
       */}
    </div>
  );
};

export default ViewNote;
