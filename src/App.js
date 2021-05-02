import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />;
}

function StarRating({ totalstar }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return createArray(totalstar).map((n, i) => (
    <Star
      key={i}
      selected={selectedStars > i}
      onSelect={() => setSelectedStars(i + 1)}
    />
  ));
}

export default function App() {
  return (
    <div className="App">
      <StarRating totalstar={5} />
    </div>
  );
}
