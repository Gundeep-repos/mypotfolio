import React, { Component } from 'react'
// import Projects from './Projects';

class Project extends Component {

    state={
        showProjectInfo: false
    };

    onProjectShow = (e) => {
        this.setState({
            showProjectInfo: !this.state.showProjectInfo //this is bc we want to toggle bw true/false
        })
    }

    render() {

        const {project} = this.props;
        const {showProjectInfo} = this.state;
        return (
            <div>
                <div className="card card-body mb-3">
                    <h4>Project Name: {project.name}
                    <i className='fas fa-sort-down' onClick={this.onProjectShow}></i>
                    </h4>
                    {showProjectInfo ? (<ul className='list-group'>
                        <li className='list-group-item bg-secondary'>Project Description: {project.description}</li>
                        <li className='list-group-item'><a href={project.link}>View in GitHub</a></li>                       
                    </ul>) : null}
                    
                </div>

                
            </div>
        )
    }
}

export default Project;
