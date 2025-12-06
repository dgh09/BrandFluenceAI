import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Sidebar.module.css';

interface NavItem {
  icon: string;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { icon: '🎯', label: 'Matching IA', path: '/matching' },
  { icon: '📋', label: 'Mis Campañas', path: '/campaigns' },
  { icon: '📈', label: 'Analytics', path: '/analytics' }
];

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src="/brandfluence-logo-full.svg" alt="BrandFluenceAI" className={styles.logoImage} />
      </div>

      {/* User Profile */}
      {user && (
        <div className={styles.userProfile}>
          <div className={styles.userAvatar}>
            {user.nombre.charAt(0)}
          </div>
          <div className={styles.userInfo}>
            <div className={styles.userName}>{user.nombre}</div>
            <div className={styles.userType}>
              {user.tipo === 'creator' ? '👤 Creador' : '🏢 Marca'}
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={styles.nav}>
        <ul className={styles.navMenu}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                >
                  <span className={styles.navIcon}>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className={styles.sidebarFooter}>
        <button onClick={handleLogout} className={styles.logoutButton}>
          <span className={styles.navIcon}>🚪</span>
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
};
