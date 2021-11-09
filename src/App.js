import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MainHome from './Pages/Home/MainHome/MainHome';
import LogIn from './Pages/LogIn/LogIn';
import NotFoundPage from './Pages/NotFound/NotFound';
import Products from './Pages/Products/Products';
import Register from './Pages/Register/Register';
import ContextProvider from './utilities/ContextProvider/ContextProvider';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <MainHome></MainHome>
            </Route>
            <Route exact path="/home">
              <MainHome></MainHome>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>

            <Route path="*">
              <NotFoundPage></NotFoundPage>
            </Route>
          </Switch>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
