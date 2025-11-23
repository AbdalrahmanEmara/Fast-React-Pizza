import { useState } from "react";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setUsername(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm tracking-widest text-stone-500 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-72 rounded-3xl px-6 py-1.5 md:py-2.5 mb-6 md:mb-10"
      />

      {username !== "" && (
        <div>
          <button className="">Start ordering</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
