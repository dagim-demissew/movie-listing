import { values } from "lodash";
import React from "react";

function Genre(props) {
  const { items, onChangeGenre, currentGenre } = props;
  return (
    <div>
      <ul
        className="list-group"
        style={{ width: "200px", textAlign: "center" }}>
        {items.map((item) => (
          <li
            key={item._id}
            className={`list-group-item ${
              currentGenre.name === item.name ? "active" : ""
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => onChangeGenre(item)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Genre;
