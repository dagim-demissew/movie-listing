import React, { useState } from "react";
import Joi, { errors } from "joi-browser";
import Form from "./common/form";
import Input from "./common/input";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
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

export default LoginForm;
