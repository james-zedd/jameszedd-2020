import React from 'react';
import { ThemeToggle } from "./ThemeToggle";

export const Header = (props) => {
    const {theme, themeToggler} = props;

    return (
        <header className="header">
            <span>jameszedd.com</span>
            <ThemeToggle theme={theme} toggleTheme={themeToggler} />
        </header>
    )
}
