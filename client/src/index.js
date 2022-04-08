
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ReactDom from "react-dom";
import App from "./components/App";
import Header from "./components/Header";
import UpdateTask from "./components/UpdateTask";

ReactDom.render(
  <Router>
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<App/>}/>
        <Route path=':_id' element={<UpdateTask/>}/>
        <Route path="*" element={<h1>No such path</h1>}/>
      </Route>
    </Routes>
  </Router>
, document.getElementById("root"));
