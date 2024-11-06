import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from "./components/LoginScreen";
import DashboardScreen from "./components/DashboardScreen";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import Header from "./components/Header";

function App() {
  return (
      <Provider store={store}>
       <Router>
           <Header />
         <Routes>
           <Route path="/" element={<LoginScreen />} />
           <Route path="/dashboard" element={<DashboardScreen />} />
         </Routes>
       </Router>
      </Provider>
  );
}

export default App;
