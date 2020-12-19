import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Tutors from "./pages/tutors";
import TutorsApply from "./pages/tutorsApply";
// import StudentApply from "./pages/students";
import TutorsFind from "./pages/tutorsFind";
import { ProviderTutors } from "./context/useTutorsContext";
import GlobalStyles from "./styles/GlobalStyles";
import Typography from "./styles/Typography";
import TutorInfo from "./pages/tutorInfo";

function App() {
  return (
    <ProviderTutors>
      <GlobalStyles />
      <Typography />
      <div className="App" style={{ paddingTop: "4rem" }}>
        <Nav />
        <Switch>
          <Route exact path="/tutor">
            <Tutors />
          </Route>
          <Route path="/tutor/add">
            <TutorsApply />
          </Route>
          <Route path="/tutor/find">
            <TutorsFind />
          </Route>
          <Route path="/tutor/:id">
            <TutorInfo />
          </Route>
          {/* <Route path="/student/add">
            <StudentApply />
          </Route> */}
        </Switch>
      </div>
    </ProviderTutors>
  );
}

export default App;
