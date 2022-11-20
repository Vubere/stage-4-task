import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

import SearchComponent from './DashboardSearchComponent/SearchComponent'
import Review from './Review/Review'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/search-component' element={<SearchComponent/>}/>
          <Route path='/review-page' element={<Review/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

