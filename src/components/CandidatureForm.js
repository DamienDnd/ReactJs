import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class CandidatureForm extends Component {
    
    render() {
        return(
            <Form>
            <FormGroup>
              <Label for="exampleEmail">Prénom(s)</Label>
              <Input type="text" name="firstName" id="firstName" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Nom</Label>
              <Input type="text" name="name" id="name" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="email" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">Votre CV</Label>
              <Input type="file" name="file" id="cvFile" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">Votre lettre de motivation</Label>
              <Input type="file" name="file" id="lmFile" />
            </FormGroup>
            <Button>Annuler</Button>
            <Button>Envoyer</Button>
          </Form>
        );
    }
}
export default CandidatureForm;