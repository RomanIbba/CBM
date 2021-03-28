import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Products, SMP, SLM, AB, KWFP} from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Sidebar from './components/Sidebar';
import Team from './components/pages/Team';
import {About, TheCBMTeam, History} from './components/pages/About';
import {Solutions, OS, CS, GS, SN } from './components/pages/Solutions';
import Financing from './components/pages/Financing';
import {Service, RR, CCBM, SDS} from './components/pages/Service';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar />  */}
        <Sidebar />
        <Switch>
        {/* <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/team' exact component={Team} /> */}
          <Route path='/' exact component={Home} />
          <Route path='/About' exact component={About} />
          <Route path='/About/TheCBMTeam' exact component={TheCBMTeam} />
          <Route path='/About/History' exact component={History} />

          <Route path='/Products' exact component={Products} />
          <Route path='/Products/SMP' exact component={SMP} />
          <Route path='/Products/SLM' exact component={SLM} />
          <Route path='/Products/AB' exact component={AB} />
          <Route path='/Products/KWFP' exact component={KWFP} />

          <Route path='/Solutions' exact component={Solutions} />
          <Route path='/Solutions/OS' exact component={OS} />
          <Route path='/Solutions/CS' exact component={CS} />
          <Route path='/Solutions/GS' exact component={GS} />
          <Route path='/Solutions/SN' exact component={SN} />

          <Route path='/Financing' component={Financing} />
          
          <Route path='/Service' exact component={Service} />  
          <Route path='/Service/RR' exact component={RR} />
          <Route path='/Service/CCBM' exact component={CCBM} />
          <Route path='/Service/SDS' exact component={SDS} />
        </Switch>
      </Router>
    </>
  );
}

export default App;