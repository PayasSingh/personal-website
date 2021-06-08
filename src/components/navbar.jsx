import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';          // importing navbar.css in this manner (instead of <link>) to match 
import { Navbar, Nav} from 'react-bootstrap';
import styles from'./navbar.css';

// for infromation on eventKey go to this link:
// https://www.pluralsight.com/guides/react-bootstrap:-using-event-keys-in-nav-dropdown

class NavBar extends Component {
    render() {
        const { handleAbout } = this.props

        return(
            <React.Fragment>
                <Navbar className={styles.navbar} collapseOnSelect expand="lg">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/* the <Nav> renders a div, needed for right, left division of navbar items*/}
                        <Nav className="mr-auto" id="leftText">
                        <p
                            className="aboutme" 
                            onClick= {this.props.handleAbout}
                        >
                            About me
                        </p>
                        </Nav>
                        <Nav >
                        <Nav.Link id="linkedin" href="https://www.linkedin.com/in/payas-singh/" target="_blank">
                            LinkedIn
                        </Nav.Link>
                        <Nav.Link id="github" href="https://github.com/PayasSingh" target="_blank">
                            GitHub
                        </Nav.Link>
                        <Nav.Link id="resume">
                            Resume
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
            </React.Fragment>
        )
    }
}

export default NavBar;