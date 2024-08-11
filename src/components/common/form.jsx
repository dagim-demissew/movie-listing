import React, { Component } from "react";
import Joi from "joi-browser";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      errors: {},
    };
  }

  validate = () => {
    const { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schemaObj = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schemaObj);
    return error ? error.details[0].message : null;
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate() || {};
    this.setState({ errors: errors || {} });
    if (Object.keys(errors).length > 0) {
      return;
    }

    this.doSubmit();
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty({ name, value });

    if (errorMessage) errors[name] = errorMessage;
    else delete errors[name];

    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: value,
      },
      errors,
    }));

  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary m-2">
        {label}
      </button>
    );
  }
}

export default Form;
