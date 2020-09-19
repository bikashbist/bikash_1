import React, {Component} from 'react';

import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
     CardBody
  } from 'reactstrap';
  import Navbar from './Navbar';  
  import Axios from 'axios';
//   import { Redirect } from 'react-router-dom';


class voter_dashbord extends Component {

    constructor(props){
        super(props)
            this.state={   
                loogedUser:'', 
                config:{
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('Token')}` }
                },
                user:[],
                voter_id:'',
                voteStatus:''

            }  
        }

componentDidMount(){

    Axios.get('http://localhost:3020/users/candidateUser', this.state.config)
    .then((response) => {
      // console.log(response.data) 
        this.setState({
            user: response.data
            
        })


    }).catch((err)=>{
       console.log(err.response)
    })


    Axios.get('http://localhost:3020/users/loggedUserDetails', this.state.config)
            .then((response) => {
                this.setState({
                    loogedUser: response.data.firstName
                })
            })
}


        vote=((id)=>{

            Axios.put(`http://localhost:3020/users/vote/${id}`,  {headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }},this.state.config)
            .then((response)=>{
                console.log(response.data.status)
                if(response.data.status=="Already voted"){
                    this.setState({
                        voteStatus:'true'
                    }
                    
                    )} else if(response.data.status=="Vot added"){
                        this.setState({
                            voteStatus:'false'
                        }
                        
                        )}
                
            }).catch((err)=>{
               console.log(err.response)
            })

        })

    render(){
        return(
            <div>
            <Navbar  user={this.state.loogedUser} />
            
            {
                  (this.state.voteStatus === 'true')?
                 <p className="voter-msg">Cannot vote again</p>
                     :null
             }  

{
                  (this.state.voteStatus === 'false')?
                 <p className="voter-msg">Vote Success</p>
                     :null
             }  
            <div className="container">               
                <CardColumns className="text-center mt-5" >

                {
                    this.state.user.map((value,index)=>{
                    return <h1 key={index}>   <Card className="mb-3">
                   
                  
                    <CardImg top width="100%" src={`http://localhost:3020/proImage/${value.image}`} alt="No Image" />
                    <CardBody>
                        <CardTitle>{value.username}</CardTitle>
                        
                        <CardText> {value.firstName} {value.firstName}, commonly known by  {value.username}, He is a Candidate
                        for this election.</CardText>

                        
                        
                        <Button className="btn btn-success" type="submit"  onClick={()=>this.vote(value._id)}>Vote Now</Button>
                    </CardBody>
                </Card></h1>
                    })
                }

                </CardColumns>
            </div>
            </div>
        )
    }
}


export default voter_dashbord;