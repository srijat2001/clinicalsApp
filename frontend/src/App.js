import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import AddPatient from './components/AddPatient';
import AddClinicals from './components/AddClinicals';
import ShowClinicals from './components/ShowClinicals';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/addPatient" component={AddPatient}/>
        <Route exact path="/addClinicals/:patientId" component={AddClinicals}/>
        <Route exact path="/showClinicals/:patientId" component={ShowClinicals}/>
      </Switch>  
    </div>
  );
}

export default App;
