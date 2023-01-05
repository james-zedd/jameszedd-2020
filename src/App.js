import React from 'react';
import './scss/application.scss';

import { Header } from './components/Header';
import { Opener } from './components/Opener';
import { About } from './components/About';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
    return (
        <div id='App'>
            <div className='container'>
                <main role='main'>
                    <Opener />
                    <About />
                    <Work />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
