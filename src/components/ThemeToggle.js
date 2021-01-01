import React from "react";

export const ThemeToggle = ({theme,  toggleTheme }) => {
    const alternateTheme = theme === 'light' ? 'dark' : 'light';
    return (
        <button onClick={toggleTheme} className="header__toggle-theme btn">
          Enable {alternateTheme} mode
        </button>
    );
};