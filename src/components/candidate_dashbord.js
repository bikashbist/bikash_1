import React, {Component} from 'react';
import {
    Card, CardImg, CardTitle, CardColumns,
    CardSubtitle, CardBody
  } from 'reactstrap';

  import Axios from 'axios';
import Nav from './Nav';  
class candidate_dashbord extends Component {

    constructor(props){
        super(props)
            this.state={   
                loogedUser:'', 
                config:{
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('Token')}` }
                },
                user:[],
                voter_id:'',
                voteStatus:false

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
               // console.log(response.data.firstName)
                this.setState({
                    loogedUser: response.data.firstName
                })
            })
        }

    render(){
        return(
            <div>
            <Nav user={this.state.loogedUser} />
            <div className="container">
                <CardColumns className="text-center mt-5">

                {
                    this.state.user.map((value,index)=>{
                    return <h1 key={index}> 
                    <Card className="mb-3">
                        <CardImg top width="100%" src={`http://localhost:3020/proImage/${value.image}`} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{value.firstName} {value.lastName}</CardTitle>
                            <CardSubtitle>{value.username} got <span className="count-vote"> {value.votes.length} </span> vote</CardSubtitle>
                        </CardBody>
                    </Card>
                    </h1>
                    })
                }
                    
                </CardColumns>
            </div>
            </div>
        )
    }
}


export default candidate_dashbord;