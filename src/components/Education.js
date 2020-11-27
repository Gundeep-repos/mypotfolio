import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';

class Education extends Component {

    state={
        showEdu: false
    };

    onEduShow = (e) => {
        this.setState({
            showEdu: !this.state.showEdu //this is bc we want to toggle bw true/false
        })
    }

    render() {

        
        const {showEdu} = this.state;
        return (
            <div>
                <div className="card card-body mb-3 bg-light">
                    <h4>Education &nbsp;
                    <i className='fas fa-sort-down' onClick={this.onEduShow}></i>
                    </h4>
                    {showEdu ? (<div className=''>
                        <Row className=''>
                            <Col>
                            <h5 className="text-dark">Master of Applied Computing</h5><h7 className='text-muted'>University of Windsor, Windsor, Ontario</h7><br/><br/>
                            <h5 className="text-dark">Bachelor of Computer Engineering</h5><h7 className='text-muted'>Guru Nanak Dev University, Punjab, India</h7><br/><br/>
                            </Col>
                            <Col>
                            <h7 className='text-muted'>Sept 2019 – Present</h7><br/><br/><br/><br/>
                            <h7 className='text-muted'>Aug 2014 – June 2018</h7><br/><br/>
                            </Col>
                            
                        </Row>
                        
                    </div>) : null}    
                </div>

                
            </div>
        )
    }
}

export default Education;
