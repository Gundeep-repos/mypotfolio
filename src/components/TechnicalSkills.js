import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';

class TechnicalSkills extends Component {

    state={
        showSkill: false
    };

    onSkillShow = (e) => {
        this.setState({
            showSkill: !this.state.showSkill //this is bc we want to toggle bw true/false
        })
    }

    render() {

        
        const {showSkill} = this.state;
        return (
            <div>
                <div className="card card-body mb-3 bg-light">
                    <h4>Technical Skills &nbsp;
                    <i className='fas fa-sort-down' onClick={this.onSkillShow}></i>
                    </h4>
                    {showSkill ? (<div className=''>
                        <Row className=''>
                            <Col>
                            <h5 className="text-dark">Programming Language:</h5><h7 className='text-muted'> Java, C/C++, Python</h7><br/><br/>
                            <h5 className="text-dark">Web:</h5><h7 className='text-muted'> JavaScript, NodeJs/ ExpressJs, TypeScript, HTML, CSS</h7><br/><br/>
                            <h5 className="text-dark">Operating Systems:</h5><h7 className='text-muted'>Windows, Linux, MacOS</h7><br/><br/>
                            <h5 className="text-dark">Database:</h5><h7 className='text-muted'>MySQL, AQT(Db2), MongoDB, SQL Developer</h7><br/><br/>
                            </Col>
                            <Col>
                            <h5 className="text-dark">Version Control:</h5><h7 className='text-muted'>Git, GitHub, BitBucket</h7><br/><br/>
                            <h5 className="text-dark">Development Methodologies:</h5><h7 className='text-muted'> Agile, Waterfall</h7><br/><br/>
                            <h5 className="text-dark">ML/DL libraries:</h5><h7 className='text-muted'>SciKit-learn, NLTK, SciPy, Pandas, NumPy, Matplotlib, Tensorflow, keras, ANN, CNN, RNN</h7><br/><br/>
                            </Col>
                        </Row>
                        
                    </div>) : null}    
                </div>

                
            </div>
        )
    }
}

export default TechnicalSkills;
