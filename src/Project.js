import React, { useState } from 'react';
import './Project.css';
import Navbar from './navbar';
import ProjectCard from './ProjectCard';
import ProjectItems from './ProjectAPI';


function Project() {

    const [projectData, setProjectData] = React.useState(ProjectItems);

  return (
    <>

    <Navbar/>

    <div>
        <h1 className='Title-project'>My <span>Projects</span></h1>
    </div>

    <ProjectCard projectData={projectData} />



    </>
  )
}

export default Project;