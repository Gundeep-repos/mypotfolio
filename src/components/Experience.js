import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';

class Experience extends Component {

    state={
        showExp: false
    };

    onExpShow = (e) => {
        this.setState({
            showExp: !this.state.showExp //this is bc we want to toggle bw true/false
        })
    }

    render() {

        
        const {showExp} = this.state;
        return (
            <div>
                <div className="card card-body mb-3 bg-light">
                    <h4>Experience &nbsp;
                    <i className='fas fa-sort-down' onClick={this.onExpShow}></i>
                    </h4>
                    {showExp ? (<div className=''>
                        <Row className=''>
                            <Col>
                            <h5 className="text-dark">Co-op Web Developer</h5><h6 className='text-dark'>Hiram Walker And Sons Ltd, Windsor, Ontario</h6><br/>
                            <h6 style={{textAlign: 'left'}}>Technologies: Java, JavaScript, NodeJs, TypeScript, Sequel Query Languages, Sencha Ext Js</h6>
                            <h6 style={{textAlign: 'left'}}>Tools: GitHub, BitBucket, JIRA, SQL Developer, Eclipse, VS code, Postman, SourceTree</h6>
                                <li className='bg-light' style={{textAlign: 'left'}}><h8 className='text-mute'>Currently working single handedly on migration of entire Front-End of a mobile based application using Sencha ExtJS 6.7 and Azure for Authentication</h8></li>
                                <li className=' bg-light' style={{textAlign: 'left'}}><h8 className='text-mute'>Developed REST-API backend Services using NodeJs/ ExpressJs and TypeScript for a Data Warehouse web application</h8></li>
                                <li className=' bg-light' style={{textAlign: 'left'}}><h8 className='text-mute'>Migrated the traditional Legacy application code in Java Servlet pages and Java Servlet backend to asynchronous request handler for faster processing</h8></li>
                                <li className=' bg-light' style={{textAlign: 'left'}}><h8 className='text-mute'>Worked for a data intensive project that involved complex SQL implementation</h8></li>
                                <li className=' bg-light' style={{textAlign: 'left'}}><h8 className='text-mute'>Performed API testing using Postman and have been using industry standard tools like BitBucket/Git for version control, Bamboo for deployment and JIRA for issue tracking</h8></li>
                        
                            
                            </Col>
                            
                        </Row><br/>
                        <Row className=''>
                            <Col>
                            <h5 className="text-dark">Assistant System Engineer</h5><h6 className='text-dark'>Tata Consultancy Services, Pune, India</h6><br/>
                            <h6 style={{textAlign: 'left'}}>Technologies: Java, Pl-SQL, GitHub</h6>
                            <h6 style={{textAlign: 'left'}}>Tools: IBM’s Master Data Management tool, Relational Application Developer, Advanced Query Tool</h6>
                                <li className='bg-light' style={{textAlign: 'left'}}><h8 className='text-mute'>Worked in an agile environment for a US based bank in maintaining the master copy (single-view) of the customers with various account types, roles, relationships and responsibilities</h8></li>
                                <li className=' bg-light' style={{textAlign: 'left'}}><h8 className='text-mute'>Explored and implemented business proxies/behavior extensions exclusively in core Java</h8></li>
                                <li className=' bg-light' style={{textAlign: 'left'}}><h8 className='text-mute'>Implemented Junit testing for individual module testing and increased the overall coverage to 96%</h8></li>
                                <li className=' bg-light' style={{textAlign: 'left'}}><h8 className='text-mute'>Documented technical reports and implementations for the Q/A teams as well as client understanding</h8></li>
                            </Col>
                            
                        </Row><br/>
                        <Row className=''>
                            <Col>
                            <h5 className="text-dark">Web Developer Trainee</h5><h6 className='text-dark'>VMM Education, Amritsar, India</h6><br/>
                            <h6 style={{textAlign: 'left'}}>Technologies: JSP, HTML5/CSS, Pl-SQL, AJAX, JSON, Bootstrap</h6>
                            <h6 style={{textAlign: 'left'}}>Tools: NetBeans, MySQL</h6>
                                <li className='bg-light' style={{textAlign: 'left'}}><h8 className='text-mute'>Built a fully working prototype of Cross Browser e-commerce website from scratch</h8></li>
                                <li className=' bg-light' style={{textAlign: 'left'}}><h8 className='text-mute'>Developed the front end using HTML5/CSS and Bootstrap 4.0</h8></li>
                                <li className=' bg-light' style={{textAlign: 'left'}}><h8 className='text-mute'>Implemented technologies like JSON and AJAX for building one-page application</h8></li>
                                <li className=' bg-light' style={{textAlign: 'left'}}><h8 className='text-mute'>Used Java Servlets for backend get/post requests and Db Connectivity</h8></li>                        
                            </Col>
                            
                        </Row>
                        
                    </div>) : null}    
                </div>

                
            </div>
        )
    }
}

export default Experience;
