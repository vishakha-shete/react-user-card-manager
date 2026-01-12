import React, { useState } from "react";

const App = () => {
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!userName || !role || !imageURL || !description) return;

    setAllUsers([
      ...allUsers,
      { userName, role, imageURL, description },
    ]);

    setUserName("");
    setRole("");
    setImageURL("");
    setDescription("");
  };

  const deleteHandler = (idx) => {
    setAllUsers(allUsers.filter((_, i) => i !== idx));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1220] to-[#020617] text-white px-4 py-10">

      {/* TITLE */}
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-10">
        User Card Manager
      </h1>

      {/* FORM */}
      <form
        onSubmit={submitHandler}
        className="
          mx-auto
          bg-white/5 backdrop-blur-xl
          border border-white/10
          rounded-3xl
          p-6 md:p-8
          grid grid-cols-1 md:grid-cols-2 gap-5
        "
      >
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Full Name"
          className="px-4 py-3 rounded-xl text-white border-2 font-semibold outline-none"
        />

        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          type="text"
          placeholder="Role"
          className="px-4 py-3 rounded-xl text-white border-2 font-semibold outline-none"
        />

        <input
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          type="text"
          placeholder="Profile Image URL"
          className="px-4 py-3 rounded-xl text-white border-2 font-semibold outline-none"
        />

        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Short Description"
          className="px-4 py-3 rounded-xl text-white  border-2 font-semibold outline-none"
        />

        <button
          type="submit"
          className="
            md:col-span-2
            mt-2
            bg-emerald-500
            hover:bg-emerald-600
            transition
            py-3
            rounded-xl
            font-bold
            text-lg
            active:scale-95
          "
        >
          Create User
        </button>
      </form>

      {/* USER CARDS */}
      <div className="mt-14 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8">
        {allUsers.map((user, idx) => (
          <div
            key={idx}
            className="
              bg-white
              text-black
              rounded-2xl
              p-6
              flex flex-col items-center
              text-center
              shadow-xl
              transition
              hover:-translate-y-2
            "
          >
            <img
              src={user.imageURL}
              alt={user.userName}
              className="w-24 h-24 rounded-full object-cover border-4 border-emerald-500"
            />

            <h2 className="mt-4 text-xl font-bold">
              {user.userName}
            </h2>

            <p className="text-emerald-600 font-semibold mt-1">
              {user.role}
            </p>

            <p className="text-sm mt-3 text-gray-700">
              {user.description}
            </p>

            <button
              onClick={() => deleteHandler(idx)}
              className="
                mt-5
                bg-red-500
                hover:bg-red-600
                transition
                text-white
                px-5
                py-2
                rounded-lg
                text-sm
                font-bold
                active:scale-95
                
              "
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
