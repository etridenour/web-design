import React from 'react';


class ProjectItems extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>Project Items
                {this.props.project.category}: {this.props.project.title}
            </div>
            
        );
    }
}


ProjectItems.propTypes = {
    
};

export default ProjectItems
