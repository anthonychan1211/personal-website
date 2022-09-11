import React from 'react'

const About = ({forwardedRef}) => {
    return (
        <div ref={forwardedRef} className="about-me-container">
            <h1>About Anthony</h1>
            <p className="bio"> Anthony is a classical pianist with rich solo and chamber music experience. 
                  He has collaborated with many instrumentalists and singers, participating in several annual 
                  Hong Kong Baptist University concert series, as well as performances at Longy School of Music. 
                  <br/>
                  <br/>
                  He later went to Suzhou,China working in Suzhou Foreign Language School as piano teacher, 
                  violin teacher , choir accompaniment and wind band conductor. Anthony organized numerous 
                  events and student performances every semester. 
                  <br/>
                  <br />
                  In his personal time, Anthony enjoys photography. He has been invited on multiple occasions 
                  to provide his photography services in events ranging from weddings, concerts, and portraiture. 
                  Through his eye for vivid colours and lines, Anthony’s subjects shine with an honest, yet 
                  subliminal magic.
                  <br />
                  <br/>
                  Anthony has started self-learning coding since 2021, building small projects to solve problems 
                  around him. He has acquired knowledge of Javascript, React, Node.js , building API, git control 
                  and deployment.
                                
                  </p>
        </div>
    )
}

export default About
