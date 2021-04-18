import "./App.css";
import { useState, useEffect } from "react";
import useData from "./useData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Navbar from "./Navbar";
import Analysis from "./Analysis";
import PrivateRoute from "./PrivateRoute";
import { AuthWrapper } from "./AuthWrapper";
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
  const { data, getData } = useData();

  useEffect(() => {
    async function onPageLoad() {
      await getData();
    }
    onPageLoad();
  }, [data]);
  return (
    <div>
      <AuthWrapper>
        <Router>
          <Navbar item={item} setItem={setItem} setSearch={setSearch} />
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <PrivateRoute path='/' exact>
              <Home item={item} setItem={setItem} search={search} data={data} />
            </PrivateRoute>
            <Route path='/analysis'>
              <Analysis data={data} />
            </Route>
          </Switch>
        </Router>
      </AuthWrapper>
    </div>
  );
}

export default App;
