// import logo from './logo.svg';
import './App.css';
import { Homepage } from './components/homepage/homepage';
import SignIn from './components/signin/signin';
import {AllRoutes} from "./routes/route"

function App() {
  return (
    <div className="App">
      <AllRoutes/>
    </div>
  );
}

export default App;
