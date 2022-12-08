import '../css/About.css'
import Navbar from '../bars/Navbar'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Personas from './Personas';
import ResponsiveDesign from './ResponsiveDesign';
import Development from './Development';

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
        }
    }, [p])

    return (
        <div className="Project">
            <Navbar currentPage="Project" />
            {proj}
        </div>
    );
}

export default Project;