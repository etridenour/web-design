import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class Signup extends Component {

    onSubmit = formProps => {
    console.log(formProps)
    
    this.props.signup(formProps, () => {
        this.props.history.push('/signin');
      });
    };
    render() {
    //this is supplied by redux-form
    //it will provide the props about the form state and function 
    // to handle the submit process.
    const { handleSubmit } = this.props;
    return (
        <div>
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        //something google needs
                        autoComplete="none"
                        />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field
                        name="password"
                        type="password"
                        component="input"
                        //something google needs
                        autoComplete="none"
                        />
                </fieldset>
                <button>Submit</button>

           <div style={{color:'red'}}>{this.props.errorMessage}</div>

            </form>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
  }

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signup' })
    )(Signup);
