
import './App.css';
import Nav from './component/Nav/Nav';
import Homepage from './page/Homepage/Homepage';
import Loginpage from './page/Loginpage/Loginpage';
import { Switch, Route } from 'react-router-dom';

import { useContext } from 'react';
import { Context } from './context/Context';
import Loading from './component/Loader/Loader';
import RegisterPage from './page/register/RegisterPage';
import { PrivateRoute } from './component/PrivateRoute/PrivateRoute';
import Page from './page/allBookings/AllBookings';
import AddLocation from './page/AddLocation/AddLocation';
import Details from './page/DetailsPage/Details';
import Footer from './component/footer/Footer';
import Notfound from './page/notFound/Notfound';
import AllBookings from './page/allBookings/AllBookings';
import Mybookings from './page/MyBookings/Mybookings';
import Destinations from './page/Destinations/Destinations';
import About from './page/About/About';
import Contact from './page/Contact/Contact';


function App() {
  const {Loader} = useContext(Context);
  return (
    <div className="App">
      <Nav/>
      {Loader? <Loading/> : null}
      <Switch>
      <Route exact path='/login'>
          <Loginpage/>
        </Route>
        <Route exact path='/register'>
          <RegisterPage/>
        </Route>
        <Route exact path='/destinations'>
          <Destinations/>
        </Route>
        <Route exact path='/about'>
          <About/>
        </Route>
        <Route exact path='/contact'>
          <Contact/>
        </Route>
        <PrivateRoute exact path='/addlocation'>
          <AddLocation/>
        </PrivateRoute>
        <PrivateRoute exact path='/location/details/:id'>
         <Details/>
        </PrivateRoute>
       
        <PrivateRoute  path='/allbookings'>
          <AllBookings/>
        </PrivateRoute>
        <PrivateRoute  path='/mybookings'>
          <Mybookings/>
        </PrivateRoute>
        <Route exact path='/'>
          <Homepage/>
        </Route>
        <Route exact path='*'>
          <Notfound/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
