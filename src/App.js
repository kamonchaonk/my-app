import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ConferenceManagement from './componentVroom/assignmentTwo/ConferenceManagement'
import CountingMachine from './componentVroom/assignmentOne/CountingMachine'
import Login from './componentVroom/Login'

function App() {
  return (


    <div >
      <BrowserRouter basename="">


        <Switch>
          <Route component={Login} path="/login" exact></Route>
          <Route component={ConferenceManagement} path="/conferenceManagement" exact></Route>
          <Route component={CountingMachine} path="/countingMachine" exact></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
