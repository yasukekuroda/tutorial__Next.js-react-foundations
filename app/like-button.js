"use client";

import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes((prev) => prev + 1);
  }

  return <button onClick={handleClick}>Like ({likes})</button>;
}

export default LikeButton;
