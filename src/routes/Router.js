import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import Page404 from './Page404.jsx';

const Webpages = () => {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/projects" element={<Projects />} />
 
                <Route path="*" element={<Page404 />} /> 
            </Routes>
        </Router>
    );
};

export default Webpages;