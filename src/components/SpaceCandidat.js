import CandidatureForm from './CandidatureForm';
import React from 'react';
import { Button, Collapse } from 'reactstrap';
import SpaceNavbar from './SpaceNavbar';

class SpaceCandidat extends React.Component {
    constructor(props) {
        super(props);

        this.toggleCandidature = this.toggleCandidature.bind(this);
        this.state = {
          toggle: false
        };
    }

    toggleCandidature() {
        this.setState({
          toggle: !this.state.toggle
        });
    }

    render() {
        return(
            <div>
                <SpaceNavbar></SpaceNavbar>
                <div className="text-center">
                    <Button color="primary" size="lg">Mes informations</Button>
                </div>
                <div className="text-center">
                    <Button onClick={this.toggleCandidature} size="lg" color="primary">Créer une candidature</Button>
                </div>
                <Collapse isOpen={this.state.toggle}>
                    <CandidatureForm></CandidatureForm>
                </Collapse>
            </div>
        );
    }
}

export default SpaceCandidat;