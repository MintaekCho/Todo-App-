import React from 'react';
import { useState } from 'react';
import Footer from './Footer';
import Main from './Main';
import Nav from './Header';

export default function ContainerBox() {

  const [darkMode, setDarkMode] = useState(false);
    return (
        <div className="w-1/3 h-3/4 mh bg-emerald-200 rounded-[30px] flex flex-col">
            <Nav></Nav>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}

