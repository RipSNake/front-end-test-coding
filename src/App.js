import './App.css';
import{ useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import Toast from './components/Toast';

const testList = [
    {
      id: 1,
      title: 'Success',
      message: 'This is a success toast component',
      backgroundColor: '#5cb85c',
      // icon: checkIcon
    },
    {
      id: 2,
      title: 'Danger',
      message: 'This is an error toast component',
      backgroundColor: '#d9534f',
      // icon: errorIcon
    },
];

function App() {
  const [toastList, setToast] = useState([]);

  const addToast = (toast) => {
    setToast([...toastList, toast]);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/users/:id" component={ProfileScreen} addToast={addToast}/>
          <Route path="/users" component={SearchScreen} addToast={addToast} exact/>
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
