import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./views/Home";
import EditEmployee from "./views/EditEmployee";
import "./styles/app.scss";

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <Link to="/">Главная</Link>
          <Link to="/edit/new">Добавить сотрудника</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/edit/:id" component={EditEmployee} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
