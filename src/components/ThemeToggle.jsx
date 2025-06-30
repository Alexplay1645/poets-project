import { useState, useEffect } from 'react';


function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="theme-toggle-radio">
      <label>
        <span>Light</span>
        <input
          type="radio"
          name="theme"
          value="light"
          checked={theme === 'light'}
          onChange={() => setTheme('light')}
        />
        <span className="circle"></span>
      </label>

      <label>
        <span>Dark</span>
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={theme === 'dark'}
          onChange={() => setTheme('dark')}
        />
        <span className="circle"></span>
      </label>
    </div>
  );
}

export default ThemeToggle;
