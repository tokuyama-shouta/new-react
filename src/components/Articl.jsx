import React from 'react';
import {useState} from "react";



const Articl = (props) => {
  const [isPublished, setIsPublished] = useState(false)
  console.log(isPublished)
  return (
    <div>
      <h2>{props.title}</h2>
      <h2>{props.content}</h2>
      <button onClick={() => setIsPublished(true)}>公開</button>
    </div>
  );
};

export default Articl;
