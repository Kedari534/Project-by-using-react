import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import RichTextEditor from "./components/RichTextEditor";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Auth from "./components/Auth";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/user-form" element={<UserForm />} />
          <Route path="/editor" element={<RichTextEditor />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </Provider>
  );
};
export default App;
