import "./App.css";
import About from "./pages/About";
import AddUser from "./pages/AddUser";
import Home from "./pages/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PageNotFound from "./pages/PageNotFound";
import Users from "./component/Users";
import UpdateUser from "./pages/UpdateUser";

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/about" element={ <About />}/>
        <Route path="/adduser" element={ <AddUser />}/>
        <Route path="*" element={ <PageNotFound />}/>
        <Route path="/users" element={ <Users />}/>
        <Route path="/update/:id" element={ <UpdateUser />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
