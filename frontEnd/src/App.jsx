import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import GlobalStyle from './styled/Golbal';
import ProductDetail from './pages/ProductDetail';
import Attend from './pages/Attend';
import VermeilCollection from './pages/VermeilCollection';
const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>

          <Route path='/attend' element={<Attend/>}/>

          {/* <Route path='/cart' element={<Cart/>}/> */}

          <Route path='/SignatureCollection'>
            <Route path=':VermeilCollection' element={<VermeilCollection/>}/>
          </Route>

          <Route path='/productDetail'>
            <Route path=':productDetailID' element={<ProductDetail/>}/>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;