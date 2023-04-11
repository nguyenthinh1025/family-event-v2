import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import { createBrowserHistory } from 'history';
import { AdminTemplate } from './template/AdminTemplate';
import EditDrink from './pages/Drink/EditDrink';
import { ToastContainer, toast } from 'react-toastify';
import AddDrink from './pages/Drink/AddDrink';
import Drink from './pages/Drink/Drink';
import Food from './pages/Food/Food';
import EditFood from './pages/Food/EditFood';
import FoodType from './pages/FoodType/FoodType';
import EditFooodType from './pages/FoodType/EditFoodType';
import AddFoodType from './pages/FoodType/AddFoodType';
import AddFood from './pages/Food/AddFood';
import Game from './pages/Game/Game';
import EditGame from './pages/Game/EditGame';
import AddGame from './pages/Game/AddGame';
import Show from './pages/Show/Show';
import EditShow from './pages/Show/EditShow';
import Decor from './pages/Decor/Decor';
import EditDecor from './pages/Decor/EditDecor';
import AddDecor from './pages/Decor/AddDecor';
import Product from './pages/Product/Product';
import EditProduct from './pages/Product/EditProduct';
import AddProduct from './pages/Product/AddProduct';
import Menu from './pages/Menu/Menu';
import MenuProduct from './pages/MenuProduct/MenuProduct';
import DecorProduct from './pages/DecorProduct/DecorProduct';
import EditDecorProduct from './pages/DecorProduct/EditDecorProduct';
import EditMenu from './pages/Menu/EditMenu';
import AddMenu from './pages/Menu/AddMenu';
import Room from './pages/Room/Room';
import EditRoom from './pages/Room/EditRoom';
import AddRoom from './pages/Room/AddRoom';
import AddShow from './pages/Show/AddShow';
import EventType from './pages/EventType/EventType';
import EditEventType from './pages/EventType/EditEventType';
import AddEventType from './pages/EventType/AddEventType';
import EventBooker from './pages/EventBooker/EventBooker';
import EditEventBooker from './pages/EventBooker/EditEventBooker';
import AddEventBooker from './pages/EventBooker/AddEventBooker';
import Login from './pages/Login/Login';
import DetailEventBooker from './pages/EventBooker/DetailEventBooker';
import Entertainment from './pages/Entertainment/Entertainment';
import EditEntertainment from './pages/Entertainment/EditEntertainment';
import AddEntertainerment from './pages/Entertainment/AddEntertainment';
import EntertainmentProduct from './pages/EntertainmentProduct/EntertainmentProduct';
import EditEntertainmentProduct from './pages/EntertainmentProduct/EditEntertainmentProduct';
import Event from './pages/Event/Event';
import Loading from './pages/Loading/Loading';
import { ChartMonth1Action, ChartMonth2Action, ChartMonth3Action, ChartMonth4Action } from './redux/action/Chart';
import LineChart from './pages/Dashboard/LineChart';
import Chart1 from './pages/Dashboard/Chart1';
import ChartMonth from './pages/Dashboard/ChartMonth';
import Script from './pages/Script/Script';
import EditScript from './pages/Script/EditScript';
import AddFamily from './pages/EventBooker/AddFamily';
import EditEvent from './pages/Event/EditEvent';
import Register from './pages/Register/Register';
import Admin from './pages/Admin/Admin';
import AddStaff from './pages/Admin/AddStaff';
export const history = createBrowserHistory();

function App () {


  return (
    <div className='App'>
      <Router history={history}>
        <ToastContainer />
        <Loading />
        <Switch>
          <AdminTemplate path='/editdrink/:id' exact Component={EditDrink} />
          <AdminTemplate path='/adddrink' exact Component={AddDrink} />
          <AdminTemplate path='/addfood' exact Component={AddFood} />
          <AdminTemplate path='/drink' exact Component={Drink} />
          <AdminTemplate path='/food' exact Component={Food} />
          <AdminTemplate path='/foodtype' exact Component={FoodType} />
          <AdminTemplate path='/addfoodtype' exact Component={AddFoodType} />
          <AdminTemplate path='/editfood/:id' exact Component={EditFood} />
          <AdminTemplate path='/editfoodtype/:id' exact Component={EditFooodType} />
          <AdminTemplate path='/editgame/:id' exact Component={EditGame} />
          <AdminTemplate path='/game' exact Component={Game} />
          <AdminTemplate path='/addgame' exact Component={AddGame} />
          <AdminTemplate path='/show' exact Component={Show} />
          <AdminTemplate path='/editshow/:id' exact Component={EditShow} />
          <AdminTemplate path='/addshow' exact Component={AddShow} />
          <AdminTemplate path='/decor' exact Component={Decor} />
          <AdminTemplate path='/editdecor/:id' exact Component={EditDecor} />
          <AdminTemplate path='/adddecor' exact Component={AddDecor} />
          <AdminTemplate path='/product' exact Component={Product} />
          <AdminTemplate path='/editproduct/:id' exact Component={EditProduct} />
          <AdminTemplate path='/addproduct' exact Component={AddProduct} />
          <AdminTemplate path='/menu' exact Component={Menu} />
          <AdminTemplate path='/editmenu/:id' exact Component={EditMenu} />
          <AdminTemplate path='/addmenu' exact Component={AddMenu} />
          <AdminTemplate path='/menuproduct' exact Component={MenuProduct} />
          <AdminTemplate path='/decorproduct' exact Component={DecorProduct} />
          <AdminTemplate path='/editdecorproduct/:id' exact Component={EditDecorProduct} />
          <AdminTemplate path='/room' exact Component={Room} />
          <AdminTemplate path='/addroom' exact Component={AddRoom} />
          <AdminTemplate path='/editroom/:id' exact Component={EditRoom} />
          <AdminTemplate path='/eventtype' exact Component={EventType} />
          <AdminTemplate path='/editeventtype/:id' exact Component={EditEventType} />
          <AdminTemplate path='/addeventtype' exact Component={AddEventType} />
          <AdminTemplate path='/eventbooker' exact Component={EventBooker} />
          <AdminTemplate path='/editeventbooker/:id' exact Component={EditEventBooker} />
          <AdminTemplate path='/addeventbooker' exact Component={AddEventBooker} />
          <AdminTemplate path='/eventbook/:id' exact Component={DetailEventBooker} />
          <AdminTemplate path='/entertainment' exact Component={Entertainment} />
          <AdminTemplate path='/editentertainment/:id' exact Component={EditEntertainment} />
          <AdminTemplate path='/addentertainment' exact Component={AddEntertainerment} />
          <AdminTemplate path='/entertainmentproduct' exact Component={EntertainmentProduct} />
          <AdminTemplate path='/editentertainmentproduct/:id' exact Component={EditEntertainmentProduct} />
          <AdminTemplate path='/event' exact Component={Event} />
          <AdminTemplate path='/chartyear' exact Component={LineChart} />
          <AdminTemplate path='/chartquy' exact Component={Chart1} />
          <AdminTemplate path='/chartmonth' exact Component={ChartMonth} />
          <AdminTemplate path='/script' exact Component={Script} />
          <AdminTemplate path='/editscript/:id' exact Component={EditScript} />
          <AdminTemplate path='/editscript/:id' exact Component={EditScript} />
          <AdminTemplate path='/addfamily' exact Component={AddFamily} />
          <AdminTemplate path='/editevent/:id' exact Component={EditEvent} />
          <AdminTemplate path='/admin' exact Component={Admin} />
          <AdminTemplate path='/addstaff' exact Component={AddStaff} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />


          <AdminTemplate path='/' exact Component={Dashboard} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
