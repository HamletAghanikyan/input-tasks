import React, { useState, useEffect } from 'react';
import './style.scss'
function Task4() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    Task4 = theme;
  }, [theme]);
  return (
    <div className={`App ${theme} box`}>
      
      <button onClick={toggleTheme}>Toggle Theme</button>
      
    </div>
  );
}
export default Task4;