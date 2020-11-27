import React, { Component } from 'react'
import Project from './Project'

class Projects extends Component {

    constructor(){
        super();
        this.state={
            projects:[
                {
                    id: 1,
                    name: 'Sci Of Relief',
                    link:'https://github.com/Gundeep-repos/SciOfRelief',
                    description:'Developed AA WCEG 2.1 technical standard Web Application with chatbot facility for the Science Department of the University of Windsor to help a mass community of students fighting numerous daily problems | Planned to be hosted in collaboration with the official website of University of Windsor | Contributed in developing the front end of the application using Angular 8 and improvising Chatbot response mechanism'
                },
                {
                    id: 2,
                    name: 'Developer Connector',
                    description:'Developed the entire backend for a social networking website using ExpressJS framework | Used live MongoDb Atlas (AWS Service) platform for database management | Used highly sophisticated libraries like JsonWebToken to fetch the active user in session and bcrypt for password encryption using hash & salt | Fetched user’s live GitHub repository to be displayed in the profile by making GitHub REST API request',
                    link:'https://github.com/Gundeep-repos/Developer-Connector'
                },
                {
                    id: 3,
                    name: 'Text Summarizer',
                    description:'Used Amazon fine food review dataset with 500,000 reviews (90/10 train/test split)  | Used Long Short Term Recurrent Neural Networks as encoder & decoder to build a Sequence2Sequence model | used ‘rmsprop’ as the optimizer, sparse categorical cross-entropy as the loss function and Early-Stopping as the regularization technique | Successfully came up with a summarization model with an overall training time of less than 3 hours ',
                    link:'https://github.com/Gundeep-repos/TextSummarizer'
                },
                
                {
                    id: 4,
                    name: 'Malicious-Url-Detection',
                    link:'https://github.com/Gundeep-repos/Malicious-URL-Detection',
                    description:'Performed various ML algorithms like logistic regression, K-Nearest Neighbors and random forest over a dataset of 400,000 URLs | Successfully came up with a classification model using logistic regression and obtained an accuracy of 96.16% on test set with an overall computation time of less than 3 minutes'
                },
                {
                    id: 5,
                    name: 'WeSell',
                    link:'https://github.com/Gundeep-repos/WeSell',
                    description:'6 month industrial training project'
                },
                
            ]
        }
    }

    render() {
        const {projects} = this.state;
        return (
            <React.Fragment>
                {projects.map(project => 
                    <Project key={project.id} project = {project}/>
                    
                )}
            </React.Fragment>
                
        )
    }
}

export default Projects;
