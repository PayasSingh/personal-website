import React from "react";
import './page.css'

// this is the main page of the website where all the relvant information will be displayed
// page will be divided into three columns

function Page() {

return (
    <div className="page">
        <div className="title">
            {console.log("process.env.PUBLIC_URL : ", process.env.PUBLIC_URL)}
            <img src={process.env.PUBLIC_URL + './img/name.svg'} alt="Name" width="500"/>
        </div>
        <div className="content">
            <div className="pageLeft">
                As a programmer, over the years, I have come across multiple languages and frameworks,
                including, but not limited to, Python, C, Java, JavaScript, MIPS, ReactJS and Django. However,
                I am the most comfortable in Python and JavaScript. Through personal and course projects
                I have gained an interest in web development and would love to further this interest in a
                professional environment!
                <br></br>
                Additionally, I am also very interested in exploring the field of Artificial Intelligence, specially
                Machine Learning and Reinforcement Learning.
            </div>
            <div className="pageMiddle">
                <img src={process.env.PUBLIC_URL + './img/brain.svg'} alt="Brain" width="275" height="auto"/>
            </div>
            <div className="pageRight">
                Besides Computer Science, I am also very passionate about Psychology. The field of Cognitive Psychology
                interests me in particular. I love studying about abstract concepts such as thinking, decision making, percpetion
                and consciousness. The psychology of language is another field which I am enthusiastic about.
                <br></br>
                I believe that the fields of Computer Science, specifically Artificial Intelligence,
                and Psychology have a significant overlap. I am currently trying to further my understanding
                of the interaction between these two fields.
            </div>
        </div>
        <div className="footer">
            <p> @payassingh </p>
        </div>
    </div>
)

}

export default Page;