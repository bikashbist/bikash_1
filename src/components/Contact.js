import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Nav from './Nav'; 
class Contact extends Component {
    render(){
        return(
            <div>
            <Nav/>
            <div className="mt-5">
                <div className="container">
                <Form>
                    <FormGroup>
                        <Label for="userName">User Name</Label>
                        <Input type="text" name="uName" id="userName" placeholder="user name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="userPassword">Password</Label>
                        <Input type="password" name="password" id="userPassword" placeholder="password " />
                    </FormGroup>
                 
                 
                    <FormGroup>
                        <Label for="messagetype">Message</Label>
                        <Input type="textarea" name="message" id="messagetype" />
                    </FormGroup>
                   
                    <FormGroup tag="fieldset">
                        <legend>Gender</legend>
                        <FormGroup check>
                        <Label className="mr-5" check>
                            <Input type="radio" name="male" />{' '}
                            Male
                        </Label>
                        <Label check>
                            <Input type="radio" name="female" />{' '}
                            female
                        </Label>
                        </FormGroup>
                       
                        
                    </FormGroup>
                   
                    <Button>Submit</Button>
                    </Form>
                </div>
                
            </div>
            </div>
        )
    }
}


export default Contact;
