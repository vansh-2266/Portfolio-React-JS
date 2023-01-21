import React from 'react'

const ProjectCard = ({projectData}) => {

  return (
    <>
    
    <div className="container-box-project">

    <main className="grid">

    {projectData.map((curElem) => {
        

        return (

            <>

            <article >
               <img src={curElem.image} alt="w-1"></img>
                <div className="text">
                <h3>{curElem.title}</h3>
                <p>{curElem.description}</p>
                <span className='Project-btn'><a href= {curElem.sourceCode}> Click Here</a></span>  
                </div>
            </article>

           
            
            </>

        )
    })}
    
    </main>
    </div>

    </>
  )
}

export default ProjectCard;