import React, { Component } from 'react';
import {Glyphicon} from 'react-bootstrap';


class Rating extends Component {

    constructor(props){
        super(props);
        this.state = {rating: this.props.rating}
    }

    handleClick(ratingValue){
        this.setState({rating: ratingValue})
    }
  render() {
    return (
      <div style={styles.starStyle} className="Rating">
      

       <Glyphicon glyph={this.state.rating >= 1 ? "star" : "star-empty"} onClick={this.handleClick.bind(this,1)}></Glyphicon>
       <Glyphicon glyph={this.state.rating >= 2 ? "star" : "star-empty"} onClick={this.handleClick.bind(this,2)}></Glyphicon>
       <Glyphicon glyph={this.state.rating >= 3 ? "star" : "star-empty"} onClick={this.handleClick.bind(this,3)}></Glyphicon>
       <Glyphicon glyph={this.state.rating >= 4 ? "star" : "star-empty"} onClick={this.handleClick.bind(this,4)}></Glyphicon>
       <Glyphicon glyph={this.state.rating >= 5 ? "star" : "star-empty"} onClick={this.handleClick.bind(this,5)}></Glyphicon>
       
      </div>
    );
  }
}

export default Rating;

const styles={
    starStyle :{
        color: 'orange'
    }
}
