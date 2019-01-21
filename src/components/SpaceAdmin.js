import React from 'react';
import { Button, Collapse } from 'reactstrap';
import SpaceNavbar from './SpaceNavbar';

class SpaceAdmin extends React.Component {
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
        return(
            <div>
                <SpaceNavbar></SpaceNavbar>
                <Button onClick={this.toggle}>Afficher les candidatures non traitées</Button>
                <Collapse isOpen={this.state.isOpen}>
                    <div>Coucou</div>
                </Collapse>
            </div>
        );
    }
}

export default SpaceAdmin;