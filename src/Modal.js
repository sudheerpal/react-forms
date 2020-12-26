import React, { useState } from "react";
import "./style.css";

export default function Modal(props) {
  const [filterCount, setFilterCount] = useState(0);

  // const updateFilter = () => {
  //   setFilterCount(filterCount+1);
  // };

  return (
    <div id="myModal" class="modal">
      <div class="modal-content">
        <div class="modal-body">
          <p>Some text in the Modal Body</p>
          <p>Some other text...</p>
        </div>
      </div>
    </div>
  );
}
