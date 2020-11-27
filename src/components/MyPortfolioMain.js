import React, { Component } from 'react'
import PropTypes from 'prop-types'
import prpic from '../resources/images/profilepic.jpg'
import Image from 'react-bootstrap/Image'
import { Row, Col } from 'react-bootstrap';


class MyPortfolioMain extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired

    };
    render() {
        return (
            <div className='card card-body mb-3 bg-light'>
                    
                    <h4><i className='fas fa-id-badge'/> Name: {this.props.name}</h4>
                <Row>
                
                <Col>
                    <Image src={prpic} rounded  style={{width: '30%'}}/><br/>
                    
                </Col>
                <Col>
                    <br/><br/><br/><br/>
                    <h7 className="text-info">Current Position: Co-op Web Developer</h7><br/>
                    <h7 className="text-info">Current Organization: Pernod Ricard</h7><br/>
                    <h7 className="text-info">Areas Of Interest: Full Stack Web Development, Machine Learning, Software Development</h7><br/>
                    <i class="fab fa-linkedin"></i><span>&nbsp;</span> 
                    <a href="https://www.linkedin.com/in/gundeep-singh-61aa5110a/" className="">Linkdein Profile</a><br/>
                    <i class="fab fa-github-square"></i><span>&nbsp;</span>
                    <a href="https://github.com/Gundeep-repos" className="">GitHub Profile Profile</a><br/>
                    <br/><br/>
                    <i class="fas fa-envelope-open-text"></i><span>&nbsp;</span> 
                    <h7 className="text-info">gundeep5830@gmail.com</h7><br/>
                    <i class="fas fa-phone"></i><span>&nbsp;</span> 
                    <h7 className="text-info">+1-519-562-3171</h7><br/>
                    
                </Col>
                </Row>
                <Row>
                    
                <Col>
                    <br/><br/><br/>
                    <h7 className="text-muted">"I am a Software Developer with  2 years of industrial Experience. I am highly proficient in Java J2SE and J2EE technologies and have enhanced my skills in Web Development technologies like ExpressJS, TypeScript-NodeJs, JavaScript and HTML5/CSS with Relational/NoSQL database systems like MySQL/MongoDB through my industrial experience and academic Projects. Apart from my Industrial experience I have keen interest in the field of Machine Learning and have gained substantial knowledge of the field through my Master's Course Work."</h7>
                </Col>
                </Row>
            </div>
            
        )
    }
}

// MyPortfolioMain.propTypes = {
//     name: PropTypes.string.isRequired
// };

export default MyPortfolioMain;
