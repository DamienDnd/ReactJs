import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from "react-router-dom";

class MyMenu extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
          <Router>
            <div>
              <Navbar dark expand="md" fixed="top">
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink style={{color: '#ff9933'}}><Link to="/SpaceAdmin">Espace Administrateur</Link></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink style={{color: '#ff9933'}}><Link to="/SpaceCandidat">Espace Candidat</Link></NavLink>
                    </NavItem>
                  </Nav>
                  <Switch>
                  </Switch>
                </Collapse>
              </Navbar>
            </div>
          </Router>
        );
    }    
}

export default MyMenu;