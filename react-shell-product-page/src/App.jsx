import React from 'react';
import {
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';
import CatalogPage from './pages/catalog';
import './app.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />} >
        <Route index element={<CatalogPage />} />
        <Route path=":id" element={<div>Details</div>} />
      </Route>
    </Routes>
  )
}

export default App;