import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LinkButton({ children, path }) {
  const navigate = useNavigate();
  const className =
    "sm:text-md my-4 block text-sm text-blue-500 hover:text-blue-700 hover:underline";

  if (path === "-1")
    return (
      <button onClick={() => navigate(-1)} className={className}>
        &larr; Go back
      </button>
    );

  return (
    <Link to={path} className={className}>
      {children}
    </Link>
  );
}
