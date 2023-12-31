import { Route, Switch } from "react-router";
import {BrowserRouter} from "react-router-dom";
import Course from "./components/Course";
import CustomNavbar from "./components/CustomNavbar";
import Department from "./components/Department";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {

  return (
    <div className="App">
      <BrowserRouter basename="/RSP">
        <ScrollToTop>
          <CustomNavbar/>
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route path="/department/:deptId">
              <Department/>
            </Route>
            <Route path="/course/:courseCode">
              <Course/>
            </Route>
          </Switch>
          <Footer/>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
