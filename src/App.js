import './App.css';
import{ useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import Toasts from './components/Toasts';

function App() {
  const [toastList, setToast] = useState([]);

  const newToast = (toast) => {
    setToast([...toastList, toast]);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/users/:id" >
            <ProfileScreen addToast={newToast} />
          </Route>
          <Route path="/users" exact >
            <SearchScreen addToast={newToast} />
          </Route>
          <Route path="/" exact >
            <Redirect to="/users" />
          </Route>
        </Switch>
        <Toasts toastList={toastList} setToast={setToast}/>
      </Router>
    </div>
  );
}

export default App;
