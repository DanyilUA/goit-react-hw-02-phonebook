import { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import { ContactsList } from './Contacts/Contacts';

export class App extends Component {
  state = {
    // contacts: [],
    filter: '',
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  formSubmit = newContact => {
    const existingContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      alert('This contact already exists.');
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }

  render() {

    const normalizeFilter = this.state.filter.toLocaleLowerCase();
    const filterContact = this.state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <div className='container'>
        <h1 className="mainTitle">Phonebook</h1>
        <Phonebook onSubmit={this.formSubmit}  />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactsList contacts={filterContact} onDeleteContact={ this.deleteContact} />
      </div>
    );
  }
};
