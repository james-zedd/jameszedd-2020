import React from 'react'

export const About = () => {
    return (
        <section className="about">
            <div className="row">
                <div className="about__text col-6">
                    <h1 className="title">About</h1>
                    <p>I have been a freelance web developer since 2015, specializing in Shopify theme development and web application development. I have built custom Shopify themes for clients from PSD mock ups and modified existing themes to client requests. I am also familiar with modern web application technologies, git and scrum/agile methodology.</p>
                    <p>I began my professional career with a local software company in 2019 that builds and maintains Learning Management Software for enterprise-level clients.</p>
                </div>
                <div className="about__img col-6 text-center">
                    <img src="https://graphicpolicy.files.wordpress.com/2016/03/the-tick.jpg" alt="james_zedd"/>
                </div>
            </div>
        </section>
    )
}
