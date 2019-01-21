import CandidatureForm from './CandidatureForm';
import React from 'react';
import { Button, Collapse } from 'reactstrap';
import SpaceNavbar from './SpaceNavbar';

class SpaceCandidat extends React.Component {
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
                <Button onClick={this.toggle}>Créer une candidature</Button>
                <Collapse isOpen={this.state.isOpen}>
                    <CandidatureForm></CandidatureForm>
                </Collapse>
            </div>
        );
    }
}

export default SpaceCandidat;