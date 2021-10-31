import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import ManageUsers from './pages/ManageUsers';
import TWEArchive from './pages/TWEArchive';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Cookies from 'js-cookie';
import Login from './pages/Login';

function App() {
  const isLoggedIn = Cookies.get('token');
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>{isLoggedIn ? <Dashboard /> : <Home />}</Route>
          <Route path="/dashboard">{isLoggedIn ? <Dashboard /> : <Home />}</Route>
          <Route path="/manageusers">{!isLoggedIn ? <ManageUsers /> : <Home />}</Route>
          <Route path="/twearchive">{!isLoggedIn ? <TWEArchive /> : <Home />}</Route>
          <Route path="/register">{isLoggedIn?<Dashboard /> : <Register />}</Route>
          <Route path="/login">{isLoggedIn?<Dashboard /> : <Login />}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
