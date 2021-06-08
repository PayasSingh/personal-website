import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';          // importing navbar.css in this manner (instead of <link>) to match 
import Modal from 'react-modal';
import './modal.css'

// for infromation on eventKey go to this link:
// https://www.pluralsight.com/guides/react-bootstrap:-using-event-keys-in-nav-dropdown

// following line removes warning from the console
Modal.setAppElement("#root")

function ModalPopup(){
      const [modalIsOpen, setModalIsOpen] = useState(false)
      return(
          <React.Fragment>
            <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
              <Modal 
              isOpen={modalIsOpen} 
              onRequestClose={() => setModalIsOpen(false)}
              >
                <h2 className="heading">Modal Popup</h2>
                <p>Modal Body</p>
                <button onClick={() => setModalIsOpen(false)}>Close</button>
              </Modal>
          </React.Fragment>
      )
}

export default ModalPopup;