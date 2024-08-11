import React, { useState, useEffect } from "react";

const Input = (props) => {
  const {
    id,
    name,
    type,
    inputValue,
    onHandleChange,
    label,
    options,
    placeholder,
  } = props;
  const [selectedValue, setSelectedValue] = useState({ _id: "", name: "" });

  useEffect(() => {
    setSelectedValue(inputValue);
  }, [inputValue]);

  const handleSelect = (option) => {
    setSelectedValue(option);
    onHandleChange({ target: { name, value: option } }); // Pass the entire option object
  };

  return (
    <div className="form-group">
      {options ? (
        <>
          <label htmlFor={id}>{label}</label>
          <div className="input-group">
            <input
              id={id}
              disabled
              name={name}
              type="text"
              className="form-control"
              value={selectedValue.name}
              onChange={(e) => handleSelect(e.target.value)}
              placeholder="Select or type a genre"
            />
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"></button>
            <ul className="dropdown-menu dropdown-menu-end">
              {options.map((option) => (
                <li key={option._id}>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSelect(option); // Use option.name to display the selected genre
                    }}>
                    {option.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            name={name}
            type={type}
            value={inputValue}
            onChange={onHandleChange}
            className="form-control"
            placeholder={placeholder}
          />
        </>
      )}
    </div>
  );
};

export default Input;
