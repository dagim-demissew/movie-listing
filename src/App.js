import MoviesList from "./components/moviesList";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import Navbar from "./components/common/navbar";
import ErrorPage from "./components/errorPage";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegistrationForm from "./components/registretionForm";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/movies/:id" element={<MovieForm />} />
            <Route path="/movies" element={<MoviesList />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/registration" element={<RegistrationForm />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
