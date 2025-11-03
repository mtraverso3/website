'use client';

import { useState, useEffect, useRef } from 'react';

type Theme = 'auto' | 'light' | 'dark' | 'amber' | 'green';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('auto');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme('auto');
    }
  }, []);

  const applyTheme = (selectedTheme: Theme) => {
    document.body.classList.remove('light-theme', 'dark-theme', 'amber-theme', 'green-theme');

    if (selectedTheme === 'auto') {
      return;
    }

    document.body.classList.add(`${selectedTheme}-theme`);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const scrollAmount = 100;

      switch (e.key) {
        case 'ArrowDown':
        case 'j':
          window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
          e.preventDefault();
          break;
        case 'ArrowUp':
        case 'k':
          window.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
          e.preventDefault();
          break;
        case 'Home':
        case 'g':
          window.scrollTo({ top: 0, behavior: 'smooth' });
          e.preventDefault();
          break;
        case 'End':
        case 'G':
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          e.preventDefault();
          break;
        case 'PageDown':
        case ' ':
          window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
          e.preventDefault();
          break;
        case 'PageUp':
          window.scrollBy({ top: -window.innerHeight * 0.8, behavior: 'smooth' });
          e.preventDefault();
          break;
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getDisplayName = (t: Theme): string => {
    const names: Record<Theme, string> = {
      auto: 'AUTO',
      light: 'LIGHT',
      dark: 'DARK',
      amber: 'AMBER',
      green: 'GREEN'
    };
    return names[t];
  };

  const themes: Theme[] = ['auto', 'light', 'dark', 'amber', 'green'];

  return (
    <div className="theme-dropdown-container" ref={dropdownRef}>
      <button
        className={`theme-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme menu"
        aria-expanded={isOpen}
      >
        {getDisplayName(theme)}
      </button>

      <div className={`theme-menu ${isOpen ? 'open' : ''}`}>
        {themes.map((t) => (
          <button
            key={t}
            className={`theme-option ${theme === t ? 'active' : ''}`}
            onClick={() => handleThemeChange(t)}
          >
            {getDisplayName(t)}
          </button>
        ))}
      </div>
    </div>
  );
}

