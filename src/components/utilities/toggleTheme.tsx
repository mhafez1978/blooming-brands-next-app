// DarkModeToggle.js
"use client";
import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <div className="toggle-switch">
        <input
          title="ToggleSwitch"
          name="toggleSwitch"
          type="checkbox"
          id="dark-mode-toggle"
          className="toggle-checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <label className="toggle-label" htmlFor="dark-mode-toggle"></label>
      </div>
    </>
  );
};

export default DarkModeToggle;
