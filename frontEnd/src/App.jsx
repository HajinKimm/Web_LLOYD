import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import GlobalStyle from './styled/Golbal';
const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          {/* <Route path='/cart' element={<Cart/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;