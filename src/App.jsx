import { useEffect, useState } from "react";
import "./App.css";
import { getAllPosts } from "./actions/getPostsService";
import MainScreen from "./pages/MainScreen";
import SignUp from "./pages/SignUp";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const name = useSelector((state) => state.name.value);

  return (
    <div className="App">
      {name !== "" ? <MainScreen /> : <SignUp />}
    </div>
  );
}

export default App;
