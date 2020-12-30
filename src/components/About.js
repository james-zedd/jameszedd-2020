import React from 'react';
import profilePic from "../assets/img/james_zedd__iaido__circle.png";

export const About = () => {
    return (
        <section className="about">
            <div className="row">
                <div className="about__text col col-6">
                    <h1 className="title">About</h1>
                    <p>I have been a freelance web developer since 2015, specializing in Shopify theme development and web application development. I have built custom Shopify themes for clients from PSD mock ups and modified existing themes to client requests. I am also familiar with modern web application technologies, git and scrum/agile methodology.</p>
                    <p>I began my professional career with a local software company in 2019 that builds and maintains Learning Management Software for enterprise-level clients.</p>
                </div>
                <div className="about__img col col-6 text-center">
                    <img src={profilePic} className="about__profile-pic" alt="james_zedd"/>
                </div>
            </div>
        </section>
    )
}
