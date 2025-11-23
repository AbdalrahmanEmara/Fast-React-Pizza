import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Search order #' value={query} onChange={(e) => setQuery(e.target.value)} className='rounded-3xl px-4 py-1.5 w-40 sm:w-72 transition-all bg-yellow-100'/>
    </form>
  )
}
