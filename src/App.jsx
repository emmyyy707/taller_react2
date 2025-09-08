import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './features/shared/layouts/MainLayout';
import { DashboardPage } from './features/dashboard/pages/DashboardPage';

function App() {
  return (
    <Routes>
      {/* La ruta padre aplica el MainLayout a todas sus rutas hijas */}
      <Route path="/" element={<MainLayout />}>
        {/* La ruta por defecto (index) será nuestro Dashboard */}
        <Route index element={<DashboardPage />} />
        {/* Aquí añadiremos más rutas en el futuro */}
      </Route>
    </Routes>
  );
}

export default App;