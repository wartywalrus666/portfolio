import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from "./App";
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Project from './projects/Project';

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="main">
                    <Routes>
                        {/*pages*/}
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
            </BrowserRouter>
        );
    }
}

export default AppRouter;