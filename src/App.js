import React from 'react';
import Main from './Components/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FilteredProducts from './Components/FilteredProducts/FilteredProducts';
import SingleProduct from './Components/FilteredProducts/SingleProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main></Main>}></Route>
          <Route path='filteredProducts/:type' element={<FilteredProducts></FilteredProducts>}></Route>
          <Route path='filteredProducts/:type/:id' element={<SingleProduct></SingleProduct>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
