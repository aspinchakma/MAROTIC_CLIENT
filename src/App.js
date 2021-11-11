import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import MainHome from './Pages/Home/MainHome/MainHome';
import LogIn from './Pages/LogIn/LogIn';
import NotFoundPage from './Pages/NotFound/NotFound';
import Products from './Pages/Products/Products';
import Register from './Pages/Register/Register';
import ContextProvider from './utilities/ContextProvider/ContextProvider';
import SingleProductDetails from './Pages/SingleProduct/SingleProductDetails/SingleProductDetails';
import PrivateRoute from './utilities/PrivateRoute/PrivateRoute';

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
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/products">
              <Products></Products>
            </Route>
            <PrivateRoute path="/product/:id">
              <SingleProductDetails></SingleProductDetails>
            </PrivateRoute>
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
