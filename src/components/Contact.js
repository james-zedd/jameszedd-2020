import React from 'react'

export const Contact = () => {
    return (
        <section className="contact">
            <h1 className="contact__title title text-center">Contact</h1>
            <div className="contact__items text-center">
                <span className="contact__item github">
                    <a href="https://github.com/james-zedd" target="_blank" rel="noreferrer">Github</a>
                </span>
                <span className="contact__item linkedin">
                    <a href="https://www.linkedin.com/in/jameszedd/" target="_blank" rel="noreferrer">Linked In</a>
                </span>
                <span className="contact__item github">
                    <a href="https://www.instagram.com/jameszedd/" target="_blank" rel="noreferrer">Instagram</a>
                </span>
            </div>
        </section>
    )
}
