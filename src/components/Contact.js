import React from 'react';
import { ReactComponent as Github } from '../assets/svg/github-sign.svg';
import { ReactComponent as Linkedin } from '../assets/svg/linkedin.svg';
import { ReactComponent as Instagram } from '../assets/svg/instagram.svg';

export const Contact = () => {
    return (
        <section className='contact'>
            <div className='contact__items text-center'>
                <span className='contact__item github'>
                    <a
                        href='https://github.com/james-zedd'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Github />
                    </a>
                </span>
                <span className='contact__item linkedin'>
                    <a
                        href='https://www.linkedin.com/in/jameszedd/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Linkedin />
                    </a>
                </span>
                <span className='contact__item github'>
                    <a
                        href='https://www.instagram.com/jameszedd/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Instagram />
                    </a>
                </span>
            </div>
        </section>
    );
};
