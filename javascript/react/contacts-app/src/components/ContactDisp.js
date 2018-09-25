import React from 'react';
import '../ContactDisp.css';
import Button from '@material-ui/core/Button';


function handleDeleteContact(number) {
    let newContacts = this.state.contacts;
    let index = newContacts.findIndex(x => x.number === number)
    newContacts.splice(index, 1)
    this.setState({ contacts: newContacts });
};

function ContactDisp (props){

    var sortedNames = props.contacts.map(word => (word.name.toUpperCase()));
    var unsortedNames = sortedNames.slice();
    var sortedList = [];

    sortedNames.sort();

    sortedNames.forEach((word) =>{
        sortedList.push(props.contacts[unsortedNames.indexOf(word)]);
    })

    var displayContact = sortedList.map(contact => {
        return  <div className='contactDisp'>
                    <div>{contact.name}</div><br></br>
                    <div>{contact.phone}</div><br></br>
                    <div>{contact.email}</div><br></br>
                    <div>{contact.address}</div><br></br>
                    <div>{contact.city}</div><br></br>
                    <div>{contact.state}</div><br></br>
                    <div>{contact.zip}</div><br></br>
                    <Button type='submit' size='medium' variant="contained" color="secondary">X</Button>
                </div>
      })
    return (
        <div>
            {displayContact}
        </div>
    );
}

export default ContactDisp;
