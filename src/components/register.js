import React, {Component} from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import {  Redirect } from 'react-router-dom';
import { Label, Input} from 'reactstrap';
import axios from 'axios';

class Register extends Component {

    constructor(props){
        super(props)

        this.state={
            firstName:'',
            lastName:'',
            username:'',
            password:'',
            type:'',
            afterLogin:false
        }

    }


    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
   //     console.log(e.target.value)
    }

    register=((e)=>{
         e.preventDefault();
         axios.post('http://localhost:3020/users/signup',this.state)
            .then((response)=>{
                     this.setState({
                       firstName:'',
                       LastName:'',
                        username:'',
                        type:'',
                       password:'',
                       afterLogin:true
        
                     })
                     console.log(response)
                 }).catch((err)=>{console.log(err)})


    })

    render(){

        if (this.state.afterLogin === true) {
            return <Redirect to='/'/>
        }

        return(
            <div className="container">
            <Form className="login-form mt-5">
                <h1>Register </h1>
                <FormGroup>
                    <Label className="pt-2 pb-2">First Name</Label>
                    <Input type="text" name="firstName" placeholder="first name" value={this.state.firstName} onChange={this.handleChange}/>
                    <Label className="pt-2 pb-2">Last Name</Label>
                    <Input type="text"  name="lastName" placeholder="last name"value={this.state.lastName} onChange={this.handleChange}   />
                    <Label className="pt-2 pb-2">Type</Label>
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Options</label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01" name="type" value={this.state.value} onChange={this.handleChange} >
                    <option selected >Choose:</option>
                        <option  value="voter">Voter</option>
                      
                        <option value="candidate">Candidate</option>
                    </select>
                    </div>
                    <Label className="pt-2 pb-2">User Name</Label>
                    <Input type="text" placeholder="user name"  name="username" value={this.state.username} onChange={this.handleChange} />
                    <Label className="pt-2 pb-2" >Password</Label>
                    <Input type="password" placeholder="Password" name="password" value={this.state.value} onChange={this.handleChange} />
                    <button type="submit" className="btn btn-primary mt-4  pl-5 pr-5"   onClick={this.register}>Save</button><br></br>
                    
                </FormGroup>
            </Form>
            </div>
        )
    }
}


export default Register;