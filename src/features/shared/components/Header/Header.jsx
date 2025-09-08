import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import cafeVideo from '../../../../imagenes/cafe.mp4'; // Ajusta la ruta según tu estructura

export function Header() {
  return (
    <header className={styles.header}>
      {/* Video de fondo */}
      <video className={styles.videoBackground} autoPlay loop muted>
        <source src={cafeVideo} type="video/mp4" />
      </video>

      {/* Contenido del header */}
      <div className={styles.headerContent}>
        <NavLink to="/" className={styles.logo}>
          Mi Tienda Arquitectura
        </NavLink>
        <nav className={styles.nav}>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? styles.activeLink : styles.link}
          >
            Dashboard
          </NavLink>
          {/* Otros enlaces */}
        </nav>
      </div>
    </header>
  );
}
