import React, { useState } from "react";
import './App.css';
import NavBar from "./components/navbar";

// import ModalPopup from "./components/modal";
import { Dialog } from 'evergreen-ui';
import Page from "./components/page";

function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAbout = () => {
    setIsModalVisible(true)
  };

  return (
  //  react fragment is used to return multiple elements without adding an 
  //  extra node to the DOM 
    <React.Fragment>
      <NavBar
        handleAbout={handleAbout}
      />      {/* look at pod website to get an idea of how to resize with window width */}
      <Page></Page>
      

      <div className="aboutmeModal"> 
        <Dialog
          isShown={isModalVisible}
          title="About me"
          onCloseComplete={() => setIsModalVisible(false)}
          hasFooter={false}
          style={{color: "black"}}
        >
          <div className="aboutmeText">
            Hi, my name is Payas! I'm a fourth year undergraduate student at the 
            University of Alberta where I'm pursuing a Bachelor's in Computer Science.
            I'm also currently working as a Research Assistant for the 
            <a className="links" href="https://irll.ca" target="_blank"> Intelligent Robot Learning </a>
            Lab at the UofA.
            <br></br>
            <br></br>
            When I'm not working, I love to spend my time with friends and just hang out. I love
            getting to know new people and if you would like to have a virtual coffee chat with me
            you are welcome to shoot me an email at 
            <a className="links" href="mailto: payassingh18@gmail.com"> payassingh18@gmail.com </a>
            .
          </div>
        </Dialog>
      </div>
      
    </React.Fragment>
  )
}

export default App;
