import { Switch, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Home from '../Pages/Home'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" >
          <Login/>
      </Route>
      <Route exact path="/home">
          <Home/>
      </Route>
      <Route exact path="*" >
          <h1>not found</h1>
      </Route>
    </Switch>
  );
};
export default Routes;
