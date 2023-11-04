import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './component/Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const [{user},dispatch] = useStateValue(); //it is called a data layer 
  // useEffect hoook which runs based on given conditon
  useEffect(()=>{
  const unsubscribe =   auth.onAuthStateChanged((authUser) => {
    if (authUser) {
        //user is logged in 
        dispatch({
          type:"SET_USER", //mtlb jb login hogey to user ko data layer ma push krdegey
          user: authUser
        })
      }else{
        //user is logged out
        dispatch({
          type:"SET_USER",// mtlb jb logout hogey to user ko data layer sey nikal degey \

          user: null
        });
      }
    });
    return ()=>{
      unsubscribe()

      //any clean operation goes in here 

    }
  },[])//dependency array ka matlb ye hoga k agr khali array ha tw funcgtion sirf ek baar chaleyga jb app component render hoga,agr dependency array ma basket ha tw function tb tb chaleyga jb basket apki render yaa update hogi
  console.log("I am a user"+ user)
  
  return (
    <Router>
      <div className='app'>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />}/>
        
        <Route path='/' element={<Home/>} />
        <Route path='/checkout' element={<Checkout />}>
         
        </Route>

      </Routes>
      </div>
    </Router>
  );
}

export default App;
