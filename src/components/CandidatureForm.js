import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './CandidatureForm.css';

class CandidatureForm extends Component {
    constructor(props) {
      super(props);

      this.state = {
        firstName:'',
        name:'',
        email:''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

    }

    handleSubmit(event) {
      event.preventDefault();
    }

    render() {
        return(
          <div className="candidatureDiv">
            <form className="candidatureForm">
              <div className="formGroup">
                <input type="text" name="firstName" id="firstName" required/>
                <label for="firstName">Prénom(s)</label>
              </div>
              <div className="formGroup">
                <input type="text" name="name" id="name" required/>
                <label for="name">Nom</label>
              </div>
              <div className="formGroup">
                <input type="email" name="email" id="email" required/>
                <label for="email">Email</label>
              </div>
              <div className="formGroup">
                <label  for="cv">Votre CV</label>
                <input type="file" name="cv" id="cvFile" required/>
              </div>
              <div className="formGroup">
                <label for="lm">Votre lettre de motivation</label>
                <input type="file" name="lm" id="lmFile" required/>
              </div>
              <div className="formGroup">
                <label for="files">Vos autres fichiers</label>
                <input type="file" name="files" id="otherFiles" multiple/>
              </div>
              <Button color="danger">Annuler</Button>
              <Button color="primary">Envoyer</Button>
            </form>
          </div>
        );
    }
}
export default CandidatureForm;