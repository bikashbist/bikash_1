import React, {Component} from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { Label, Input} from 'reactstrap';
import { Link,Redirect } from 'react-router-dom';
import {UncontrolledAlert} from "reactstrap"
import axios from 'axios';
class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:'',
            stautslog:'',
            error:''
        }
    }

    onChange=((e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
      //  console.log(e.target.value)
    })

    submit=((e)=>{
        e.preventDefault();
            //axois for api handling
            axios.post('http://localhost:3020/users/login', this.state)
            .then((response)=>{
                localStorage.setItem('Token',response.data.token)
                this.setState({stautslog:response.data.status})

                if(this.state.stautslog="User not registered"){
                    this.setState({
                        error:"Not"
                    })
                }

                this.setState({
                    username:'',
                    password:''
                })
               
            }).catch((err)=>{             
                this.setState({
                    username:'',
                    password:''
                })
            })
    })

    render(){
        if (this.state.stautslog === "Success voter login!") {
            return <Redirect to='/voter_dashbord'/>
        }else if(this.state.stautslog === "Success candidate login!") {
            return <Redirect to='/candidate_dashbord'/>
        }


        return(
            <div className="container">
            <Form className="login-form mt-5">
                <h1>Voting Login</h1>
                {
                    (this.state.error=='Not')?<UncontrolledAlert>User not registered</UncontrolledAlert>:null
                }
                
                <FormGroup>
                    <Label className="pt-2 pb-2">User name</Label>
                    <Input type="text" name="username" placeholder="User name"  value={this.state.username} onChange={this.onChange} />
                    <Label className="pt-2 pb-2">Password</Label>
                    <Input type="text"  name="password" placeholder="Password" value={this.state.password} onChange={this.onChange}  />
                    <button type="submit" class="btn btn-primary mt-4 mb-4 pl-5 pr-5"   onClick={this.submit}>Submit</button><br></br>
                    <Link to="/register">Register here</Link>
                </FormGroup>
            </Form>
            </div>
        )
    }
}


export default Login;