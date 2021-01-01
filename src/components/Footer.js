import React from 'react'

export const Footer = () => {
    return (
        <footer className="footer">
            <hr/>
            <div className="footer__text text-center">
                <p className="footer__copyright">© 2020 Zedd Enterprises. All rights reserved.</p>
                <p className="footer__view">View this React app on <a href="https://github.com/james-zedd/jameszedd-2020" className="footer__project-link text-link" target="_blank" rel="noreferrer">Github</a></p>
            </div>
        </footer>
    )
}
