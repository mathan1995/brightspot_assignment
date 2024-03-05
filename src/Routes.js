import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Profile, Todo, Weather } from "./pages";

const Routesx = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/weather" element={<Weather />} />
    </Routes>
  );
};

export default Routesx;
