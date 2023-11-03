import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Table = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [data, setData] = useState([]);
  const [indexNumber, setIndexNumber] = useState(null);

  const { user } = useParams();

  const handleRowClick = (item) => {
    setSelectedItem(item);
  };

  const top5Data = data.slice(0, 5);

  useEffect(() => {
    axios
      .get("http://universities.hipolabs.com/search?country=Indonesia")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-400">
      <div className="max-w-4xl w-full p-4 bg-white rounded-lg shadow-lg">
        <p className="pb-2 text-lg">Welcome, {user}</p>
        <div className="pb-2">
          <table className="min-w-full" style={{ border: "1px solid black" }}>
            <thead>
              <tr>
                <td className="px-4 font-bold">ID</td>
                <td className="font-bold">Universitas</td>
                <td className="font-bold">Website</td>
              </tr>
            </thead>
            <tbody>
              {top5Data.map((item, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    handleRowClick(item);
                    setIndexNumber(index + 1);
                  }}
                  className="cursor-pointer"
                >
                  <td className="px-4">{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.web_pages}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedItem && (
        <>
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="modal bg-white p-4 w-96 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">
                  {selectedItem.name}
                </h2>
                <p>No: {indexNumber}</p>
                <p>Nama Universitas : {selectedItem.name}</p>
                <p>Website: {selectedItem.web_pages}</p>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
                  onClick={() => setSelectedItem(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Table;
