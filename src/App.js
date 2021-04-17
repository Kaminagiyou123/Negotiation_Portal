import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Navbar from "./Navbar";
function App() {
  const [search, setSearch] = useState({ account: "", search: "" });
  const [item, setItem] = useState({
    Account_Name: "",
    Account_Code: "",
    Key_Negotiator: "",
    Manager: "",
    Goal_to_Close: 0,
    Stretch_Goal: 0,
    Negotiation_Phase: "",
    Anchor_Ask: 0,
    Win_Amount: 0,
    Gap_to_Goal: 0,
    Negotiator_Comments: "",
  });

  return (
    <div>
      <Navbar item={item} setItem={setItem} setSearch={setSearch} />
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Home item={item} setItem={setItem} search={search} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
