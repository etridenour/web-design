import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './components/ProjectItem.js';

class Project extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let projectItem;

        projectItem = this.props.projects.map(project => {
            return <ProjectItem key={project.title} project={project} />
        })
        return (
            <div>Project

            </div>
        );
    }
}


Project.propTypes = {
    
};

export default Project
