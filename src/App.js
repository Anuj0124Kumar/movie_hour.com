import Header from "./components/Header";
import Cards from "./components/Cards";
import {Route, Routes} from 'react-router-dom'
import { createContext,useState } from "react";
import Addmovie from "./components/Addmovie";
import Details from "./components/Details";
import Login from "./components/Login";
import Signup from "./components/Signup";



const Appstate = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <Appstate.Provider value={{login, userName, setLogin, setUserName}} >
    <div className="App relative">
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/addmovie" element={<Addmovie />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate};
