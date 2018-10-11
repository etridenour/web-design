import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class Signout extends React.Component {
    componentWillMount = () => {
      this.props.signout();
    }
    

    render() {
        return (
            <div>Later y'all</div>
        );
    }
}


Signout.propTypes = {
    
};

export default connect(null, actions)(Signout);
