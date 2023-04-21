import "./App.css";
import MainScreen from "./pages/MainScreen";
import SignUp from "./pages/SignUp";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "./redux/features/name/nameSlice";

function App() {
  const name = useSelector((state) => state.name.value);
  const dispatch = useDispatch();
  const loginName = localStorage.getItem("loginName")
  if (loginName) {
    dispatch(setName(loginName))
  }


  return (
    <div className="App">
      {loginName ? <MainScreen /> : <SignUp />}
    </div>
  );
}

export default App;
