import React from 'react';
import './ThemeToggle.scss';
import { useTheme } from '../../context/ThemeContext';
import { Button } from 'react-bootstrap';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button 
      variant={isDark ? 'dark' : 'light'}
      onClick={toggleTheme}
      className="theme-toggle-btn d-flex align-items-center justify-content-center rounded-circle p-2"
      style={{ width: '40px', height: '40px' }}
      aria-label="Toggle theme"
    >
      <span className="fs-5">
        {isDark ? '🌙' : '☀️'}
      </span>
    </Button>
  );
}
