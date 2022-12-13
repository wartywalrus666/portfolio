import '../css/Project.css'
import Navbar from '../bars/Navbar'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Personas from './Personas';
import ResponsiveDesign from './ResponsiveDesign';
import Development from './Development';
import ULP from './ULP';
import { Link } from 'react-router-dom';

function Project() {

    const { p } = useParams();
    console.log(p)

    const [proj, setProj] = useState("")

    useEffect(() => {
        if (p === 'personas') {
            setProj(<Personas />)
        } else if (p === 'responsivedesign') {
            setProj(<ResponsiveDesign />)
        } else if (p === 'development') {
            setProj(<Development />)
        } else if (p === 'ulp') {
            setProj(<ULP />)
        }
    }, [p])

    return (
        <div className="Project-wrapper">
            <Navbar currentPage="Project" />
            <div className='Project-back'>
                <Link to={process.env.PUBLIC_URL + "/projects"}> <h4> &larr; back to projects </h4></Link>
            </div>
            {proj}
        </div>
    );
}

export default Project;