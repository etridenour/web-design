import React, { Component } from 'react';
import '../Form.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ContactDisp from './ContactDisp';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          contacts: [],
        };
      }
     
      addContact(event) {
        event.preventDefault(); 
          
          var newContact = {
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
              }

            var contact1 = this.state.contacts;
            contact1.push(newContact);
            this.setState(contact1);
            console.log(this.state.contacts);

            }
       

    
   

    render() {


    

        return (
          <div>
            <form className='form' onSubmit={this.addContact.bind(this)}>
              <TextField onChange = {e => this.setState({name: e.target.value})}
                label="Name"
                margin="normal"
                style={{margin: 30}}
              />
            
              <TextField onChange = {e => this.setState({email: e.target.value})}
                label="Email"
                ref='email'
                margin="normal"
                style={{margin: 30}}
              />
            
              <TextField onChange = {e => this.setState({phone: e.target.value})}
                label="Phone Number"
                ref='phone'
                margin="normal"
                style={{margin: 30}}
              />
              <br></br>
              <TextField onChange = {e => this.setState({address: e.target.value})}
                label="Address"
                ref='address'
                margin="normal"
                style={{margin: 30}}
              />
            
              <TextField onChange = {e => this.setState({city: e.target.value})}
                label="City"
                ref='city'
                margin="normal"
                style={{margin: 30}}
              />
              
              <TextField onChange = {e => this.setState({state: e.target.value})}
                label="State"
                ref='state'
                margin="normal"
                style={{margin: 30}}
              />
              
              <TextField onChange = {e => this.setState({zip: e.target.value})}
                label="Zip Code"
                ref='zip'
                margin="normal"
                style={{margin: 30}}
              />
              <br></br>
              <br></br>
              <Button type='submit' size='large' variant="contained" color="primary">Add Contact</Button>
            </form>

          <div>
            <ContactDisp key={this.state.contacts.name} contacts={this.state.contacts}/>
          </div>

    
          </div>

            
        );
    }
}


export default Form;
