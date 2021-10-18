
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound'
import Footer from './Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import Appointment from './Pages/Appointment/Appointment';
import PatientForm from './Pages/PatientForm/PatientForm';
import Login from './Login/Firebase/Login';
import Home from './Pages/Home/Home';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/patientform">
              <PatientForm></PatientForm>
            </Route>
            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
