import './App.css';
import{ useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import Toast from './components/Toast';

function App() {
  const [toastList, setToast] = useState([]);

  const newToast = (toast) => {
    setToast([...toastList, toast]);
    let timer = setInterval(() => {
      toast.opacity -= .1; 
      console.log('Opacity ', toast.opacity);
      if(toastList.length === 0) {
        console.log('inside interval', toastList.length);
        clearInterval(timer);
      }
    }
    , 500);   
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
        <Toast toastList={toastList} setToast={setToast}/>
      </Router>
    </div>
  );
}

export default App;
