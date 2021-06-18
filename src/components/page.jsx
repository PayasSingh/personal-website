import React from "react";
import './page.css'

// this is the main page of the website where all the relvant information will be displayed
// page will be divided into three columns

function Page() {

return (
    <div className="page">
        <div className="title">
            {console.log("process.env.PUBLIC_URL : ", process.env.PUBLIC_URL)}
            <img src={process.env.PUBLIC_URL + '/img/name.svg'} alt="Name" width="500"/>
        </div>
        <div className="content">
            <div className="pageLeft">
                As a programmer, over the years, I have come across multiple languages and frameworks,
                including, but not limited to, Python, C, Java, JavaScript, MIPS, ReactJS and Django.
                A lot of my experience lies in Python and JavaScript and I am the most comfortable in
                these two languages. Through personal and course projects I have gained an interest in
                web development and would love to further this interest in a professional environment!
                <br></br>
                Additionally, I am also very interested in exploring the field of Artificial Intelligence, specially
                Machine Learning and Reinforcement Learning.
            </div>
            <div className="pageMiddle">
                <img src={process.env.PUBLIC_URL + '/img/brain.svg'} alt="Brain" width="275" height="auto"/>
            </div>
            <div className="pageRight">
                Besides Computer Science, I am also very passionate about Psychology.
                I am a big fan of Cognitive Psychology and love studying about abstract
                concepts such as thinking, decision making, percpetion and consciousness.
                I also enjoy reading up on how languages are processed in the brain and I would like
                expand this interest into CS and dabble in Natural Language Processing.
                <br></br>
                I believe that the fields of CS, specifically Artificial Intelligence,
                and Psychology overlap significantly. Therefore, I am currently trying to further my
                 understanding of the interaction between these two fields.
            </div>
        </div>
        <div className="footer">
            <p> ©payassingh </p>
        </div>
    </div>
)

}

export default Page;