import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from "./App";
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Project from './projects/Project';

class AppRouter extends React.Component {

    // basename={process.env.PUBLIC_URL}
    render() {
        return (
            <HashRouter>
                <div className="main">
                    <Routes>
                        <Route path='/' element={<App />} exact={true} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/projects'>
                            <Route index element={<Projects />} />
                            <Route path=":p" element={<Project />} />
                        </Route>
                        <Route path="*" element={<App />} />
                    </Routes>
                </div>
            </HashRouter>
        );
    }
}

export default AppRouter;