// import logo from './logo.svg';
import './App.css';
import { Homepage } from './components/homepage/homepage';
import { Navbar } from './components/navbar/navbar';
import { SellerPost } from './components/sellerPost/sellerPost';
import SignIn from './components/signin/signin';
import {AllRoutes} from "./routes/route"

function App() {
  return (
    <div className="App">
      {/* <AllRoutes/> */}
      <SellerPost/>
    </div>
  );
}

export default App;
