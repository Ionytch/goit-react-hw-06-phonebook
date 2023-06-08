import {Phonebook} from "./phonebook/Phonebook";
import Contacts from "./contacts/Contacts";
import { Filter } from "./filter/Filter";
import { useSelector } from "react-redux";


export default function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);
  const filtered=useSelector(state => state.filter);
  const filteredContacts = () => {
         return contacts.filter(contact => 
         contact.name.toLowerCase().includes(filtered.toLowerCase())         
    );
  };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Phonebook  />
        <Filter  />
        {contacts.length > 0 ? (
        <Contacts
            names={filteredContacts()}/>) : (
          <span text="Contact list is empty."> "Contact list is empty."</span>
        )}        
        </div>
    );
  }