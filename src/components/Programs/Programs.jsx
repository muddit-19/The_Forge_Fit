import React from 'react'
import "./Programs.css"
import RigthArrow from '../../assets/rightArrow.png'
import {programsData} from '../../data/programsData'


const Programs = () => {
  return (

    <div className="Programs" id="programs">
        {/* Header */}
        <div className="programs-header">
            <span className='stroke-text'>EXPLORE OUR</span>
            <span>PROGRAMS</span>
            <span className='stroke-text'>TO SHAPE YOU</span>
        </div>

        {/* Categories */}
        <div className="program-categories">
            {programsData.map((program)=>{
                return (
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={RigthArrow} alt="This is img" />
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Programs
