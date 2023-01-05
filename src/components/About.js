import React from 'react';
import profilePic from '../assets/img/james_zedd__iaido__circle.png';

export const About = () => {
    return (
        <section className='about'>
            <div className='row'>
                <div className='about__text col'>
                    <p>
                        I began my professional career with a local software
                        company in 2019 that builds and maintains Learning
                        Management Software for enterprise-level clients. In
                        2021 I was promoted to Team Lead and I took on several
                        additional responsibilities, including managing the
                        goals of my team each sprint and deploying changes to
                        our development environment.
                    </p>
                    <p>
                        One great achievement I had in this role was being part
                        of setting up an integration between a third-party
                        software and our LMS software so that courses could be
                        integrated into our software and the outcome of the
                        course could be shared with the third-party.
                    </p>
                    <p>
                        Before this position, I operated as a freelance web
                        developer for four years, specializing in Shopify theme
                        development. I have built custom Shopify themes for
                        clients from PSD mock ups and modified existing themes
                        to client requests.
                    </p>
                </div>
                {/* <div className='about__img col col-4 text-center'>
                    <img
                        src={profilePic}
                        className='about__profile-pic'
                        alt='james_zedd'
                    />
                </div> */}
            </div>
        </section>
    );
};
