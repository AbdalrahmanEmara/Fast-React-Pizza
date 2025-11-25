import { useState } from "react";
import Button from "../../ui/Button";

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
        className="input w-72 mb-8"
      />

      {username !== "" && (
        <div>
          <Button className="">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
