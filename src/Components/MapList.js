import React from "react";

export const MapList = ({ myList }) => {
  const listItems = myList.map((myList) => {
    return <li key={myList}>{myList}</li>;
  });

  return (
    <div>
      <div className="container">
        <h2>My Lists</h2>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
};
