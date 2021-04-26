import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '.';
import { useAuthState } from 'react-firebase-hooks/auth';

import Loader from './Components/Loader';
import Navbar from './Components/Navbar';
import AppRouter from './Components/AppRouter';

function App() {

  const {auth} = useContext(Context)
  const [user,loading, error] = useAuthState(auth)

  if (loading) {
    return <Loader/>
  }


  return (
    <BrowserRouter>
        <Navbar/>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
