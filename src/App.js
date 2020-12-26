import React, { useState } from "react";
import "./style.css";
import Modal from "./Modal.js";

export default function App() {
  const [filterCount, setFilterCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // const updateFilter = () => {



  //   // setFilterCount(filterCount+1);
  // };

  return (
    <div>
      <button onClick={()=>setShowModal(!showModal)} class="button">{`Filter (${filterCount})`}</button>
      <Modal  showModal={showModal} />
    </div>
  );
}
