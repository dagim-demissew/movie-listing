import React from "react";
import Input from "./common/input";
import Joi from "joi-browser";
import Form from "./common/form";
import withParams from "./common/withParams";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { Link, Navigate } from "react-router-dom";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genre: { _id: "", name: "" },
      numberInStock: "",
      rate: "",
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.object().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .label("Number In Stock")
      .min(0)
      .integer(),
    rate: Joi.number().required().label("Rate").max(10),
  };
  componentDidMount() {
    const { id } = this.props.params;
    if (id !== "new") {
      const singleMovie = getMovie(id);
      if (!singleMovie) {
        this.props.navigate("/404 not found", { replace: true });
        return;
      }
      this.setState({
        data: {
          title: singleMovie.title,
          genre: singleMovie.genre,
          numberInStock: singleMovie.numberInStock,
          rate: singleMovie.dailyRentalRate,
        },
      });
    }
  }

  doSubmit() {
    saveMovie(this.state.data);
    this.props.navigate("/movies", { replace: true });
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-8">
            <h1>Add new movie</h1>
            <form onSubmit={this.handleFormSubmit}>
              <Input
                id={"title"}
                label={"Title"}
                name={"title"}
                type={"text"}
                inputValue={this.state.data.title}
                onHandleChange={this.handleChange}
              />
              {this.state.errors.title && (
                <div className="alert alert-danger">
                  {this.state.errors.title}
                </div>
              )}
              <Input
                id={"genre"}
                label={"Genre"}
                name={"genre"}
                options={[
                  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
                  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
                  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
                ]}
                type={"text"}
                inputValue={this.state.data.genre}
                onHandleChange={this.handleChange}
              />
              {this.state.errors.genre && (
                <div className="alert alert-danger">
                  {this.state.errors.genre}
                </div>
              )}

              <Input
                id={"numberInStock"}
                label={"Number In Stock"}
                name={"numberInStock"}
                type={"numberInStock"}
                inputValue={this.state.data.numberInStock}
                onHandleChange={this.handleChange}
              />
              {this.state.errors.numberInStock && (
                <div className="alert alert-danger">
                  {this.state.errors.numberInStock}
                </div>
              )}
              <Input
                id={"rate"}
                label={"Rate"}
                name={"rate"}
                type={"rate"}
                inputValue={this.state.data.rate}
                onHandleChange={this.handleChange}
              />
              {this.state.errors.rate && (
                <div className="alert alert-danger">
                  {this.state.errors.rate}
                </div>
              )}
              {this.renderButton("Save")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withParams(MovieForm);
