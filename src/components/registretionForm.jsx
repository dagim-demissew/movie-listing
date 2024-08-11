import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import Input from "./common/input";

class RegistrationForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username").email({ email: true }),
    name: Joi.string().required().label("Name"),
    password: Joi.string().required().label("Password").min(5),
  };
  doSubmit = () => {
    console.log(this.state.data);
    // Call server here
  };
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-8">
            <h1>Login</h1>
            <form onSubmit={this.handleFormSubmit}>
              <Input
                id={"name"}
                label={"Name"}
                name={"name"}
                type={"text"}
                inputValue={this.state.data.name}
                onHandleChange={this.handleChange}
              />
              {this.state.errors.name && (
                <div className="alert alert-danger">
                  {this.state.errors.name}
                </div>
              )}
              <Input
                id={"username"}
                label={"Username"}
                name={"username"}
                type={"text"}
                inputValue={this.state.data.username}
                onHandleChange={this.handleChange}
              />
              {this.state.errors.username && (
                <div className="alert alert-danger">
                  {this.state.errors.username}
                </div>
              )}
              <Input
                id={"password"}
                label={"password"}
                name={"password"}
                type={"password"}
                inputValue={this.state.data.password}
                onHandleChange={this.handleChange}
              />
              {this.state.errors.password && (
                <div className="alert alert-danger">
                  {this.state.errors.password}
                </div>
              )}
              {this.renderButton("Login")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
