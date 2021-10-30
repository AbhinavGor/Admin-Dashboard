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

function App() {
  const isLoggedIn = Cookies.get('isLoggedIn') === 1;
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>{Cookies.get('isLoggedIn') === 1 ? <Dashboard /> : <Home />}</Route>
          <Route path="/dashboard"><Dashboard /></Route>
          <Route path="/manageusers"><ManageUsers /></Route>
          <Route path="/twearchive"><TWEArchive /></Route>
          <Route path="/register">{isLoggedIn?<Dashboard /> : <Register />}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
