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

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/manageusers"><ManageUsers /></Route>
          <Route path="/twearchive"><TWEArchive /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
