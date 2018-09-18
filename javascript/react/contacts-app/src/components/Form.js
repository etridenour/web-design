import React, { Component } from 'react';
import '../Form.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          contact: {},
          name: ''
        };
      }
     
      addContact(event) {
        event.preventDefault(); 
        console.log(this.state.name);
          
            this.setState({
              contact: {
                phone: this.refs.phone.value,
                email: this.refs.email.value,
                address: this.refs.address.value,
                city: this.refs.city.value,
                state: this.refs.state.value,
                zip: this.refs.zip.value,
              }
            },function(){
              console.log(this.state.contact)
            })
            
        }
    
   

    render() {
        return (
          <div>
            <form className='form' onSubmit={this.addContact.bind(this)}>
              <TextField value={this.state.contact.name} 
                ref='name'
                label="Name"
                margin="normal"
                style={{margin: 30}}
              />
            
              <TextField
                label="Email"
                ref='email'
                margin="normal"
                style={{margin: 30}}
              />
            
              <TextField
                label="Phone Number"
                ref='phone'
                margin="normal"
                style={{margin: 30}}
              />
              <br></br>
              <TextField
                label="Address"
                ref='address'
                margin="normal"
                style={{margin: 30}}
              />
            
              <TextField
                label="City"
                ref='city'
                margin="normal"
                style={{margin: 30}}
              />
              
              <TextField
                label="State"
                ref='state'
                margin="normal"
                style={{margin: 30}}
              />
              
              <TextField
                label="Zip Code"
                ref='zip'
                margin="normal"
                style={{margin: 30}}
              />
              <br></br>
              <br></br>
              <Button type='submit' size='large' variant="contained" color="primary">Add Contact</Button>
            </form>
          </div>

            
        );
    }
}


export default Form;
