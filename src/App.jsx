import "./App.css";
import MainScreen from "./pages/MainScreen";
import SignUp from "./pages/SignUp";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "./redux/features/name/nameSlice";
import { useEffect } from "react";

function App() {
  const name = useSelector((state) => state.name.value);
  const dispatch = useDispatch();

  const verifyName = () => {
    const loginName = localStorage.getItem("loginName");
    if (loginName) {
      dispatch(setName(loginName));
    }
  };
  useEffect(() => {verifyName()},[])

  return <div className="App">{name ? <MainScreen /> : <SignUp />}</div>;
}

export default App;
