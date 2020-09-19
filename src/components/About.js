import React, {Component} from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Nav from './Nav';  
class About extends Component {
    render(){
        return(
            <div>
            <Nav/>
            <div className="mt-5">
               
            <Container>
            <Row>
                <Col xs="6">
                  <img className="dashbord-img" src="/Vlogo.jpg" alt="logo" />
                </Col>
                <Col xs="6">
                    <h2 className="pt-4 pb-2">Welcome to - Election Commission of Nepal</h2>
                    
                    <p >Nepali Congress won the by-election held for the Provincial Assembly member in Bhaktapur-1 (A). It is the major victory for the opposition party as the seat was won by the ruling Nepal Communist Party in 2017 elections.

                    Congress candidate Krishna Lal Bhandel received 13,449 votes to beat DP Dhakal of the NCP. Dhakal was restricted to just 11,206 votes.

                    Meanwhile, Niraj Lawaju of the Nepal Workers and Peasants Party received 5,829 votes to secure the third position.

                    Vote countering is underway in other major constituencies of the country.</p>

                    <Button>More about Election</Button> <Link to="/voter_dashbord">Go to the voting page</Link>
                </Col>
            </Row>
          </Container>
          </div>
          </div>
        )
    }
}


export default About;


