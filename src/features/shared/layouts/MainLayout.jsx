import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export function MainLayout() {
  const layoutStyle = { 
    display: 'flex', 
    flexDirection: 'column', 
    minHeight: '100vh' 
  };
  const mainStyle = {
    flexGrow: 1,
    padding: '2rem'
  };

  return (
    <div style={layoutStyle}>
      
      <main style={mainStyle}>
        <Outlet /> {/* Las páginas se renderizan aquí */}
      </main>
    </div>
  );
}