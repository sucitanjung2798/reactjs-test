import React, { useEffect, useState } from "react";
import axios from "axios";
// import Modal from "./Modal";

// const LandingPage = () => {
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [data, setData] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   useEffect(() => {
//     axios
//       .get("http://universities.hipolabs.com/search?country=Indonesia")
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error", error);
//       });
//   });

//   const handleRowClick = (rowId) => {
//     setSelectedRow(rowId);
//     openModal();
//   };

//   const top5Data = data.slice(0, 5);

//   return (
//     <div>
//       <div className="min-h-screen flex items-center justify-center bg-cyan-400">
//         <div className="max-w-4xl w-full p-4 bg-white rounded-lg shadow-lg">
//           <div> Welcome, user</div>
//           <table className="min-w-full">
//             <thead>
//               <tr>
//                 <th className="py-2">No</th>
//                 <th className="py-2">Nama Universitas</th>
//                 <th className="px-4 py-2">Website</th>
//               </tr>
//             </thead>
//             <tbody>
//               {top5Data.map((row, index) => (
//                 <tr
//                   key={row.id}
//                   className={`cursor-pointer ${
//                     selectedRow === row.id ? "bg-blue-200" : ""
//                   }`}
//                   onClick={() => {
//                     handleRowClick(row.id);
//                     setIsModalOpen(true);
//                   }}
//                 >
//                   <td className="px-6 py-2">{index}</td>
//                   <td className="px-4 py-2">{row.name}</td>
//                   <td className="px-4 py-2">{row.description}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <Modal isOpen={isModalOpen} selectedRow={selectedRow} />
//     </div>
//   );
// };

// export default LandingPage;

// import React, { useState } from "react";

const Table = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [data, setData] = useState([]);

  const handleRowClick = (item) => {
    setSelectedItem(item);
  };

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
    <div>
      <table className="min-w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              onClick={() => handleRowClick(item)}
              className="cursor-pointer"
            >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedItem && (
        <>
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="modal bg-white p-4 w-96 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">
                  {selectedItem.name}
                </h2>
                <p>No: {selectedItem.description}</p>
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
