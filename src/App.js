import './App.css';
import{ useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import Toast from './components/Toast';

function App() {
  const [toastList, setToast] = useState([]);

  const newToast = (toast) => {
    console.log('New toast ', toast)
    setToast([...toastList, toast]);
    console.log('Lista completa ', toastList);
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
        <Toast toastList={toastList}/>
      </Router>
    </div>
  );
}

export default App;
