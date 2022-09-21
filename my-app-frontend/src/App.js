import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/navbar';
import firstpage from './layout/firstpage';
import aboutus from './layout/AboutUs';
import help from './layout/Help';
import faq from './layout/Faq';
import NotFound from './layout/NotFound';
import addproduct from './components/addproduct';
import loginform from './components/loginform';
import register from './components/register';
import UpdateProduct from './components/UpdateProduct';
import myproductlist from './components/myproductList';
import productCard from './components/productcard';
import viewcard from './components/viewCard';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <div>
          <Switch>
            <Route exact path="/" component={firstpage} />
            <Route path="/aboutus" component={aboutus}/>
            <Route path="/help" component={help}/>
            <Route path="/faq" component={faq}/>
            <Route path="/product" component={productCard}/>
            <Route path="/myproduct" component={myproductlist}/>
            <Route path="/login" component={loginform} />
            <Route path="/register" component={register} />
            <Route path="/user" component={register} />
            <Route path="/productadd" component={addproduct} />
            <Route path="/view/:id" component={viewcard} />
            <Route path="/productupdate/:id" component={UpdateProduct} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
