import { Contact } from "./Contact"
import { ContactsList } from "./Contacts.styled"


const Contacts = ({ names }) => {
        return (
            <ContactsList>
                {
                  names.map(name => (
                  <li key={name.id}>
                  <Contact name={name} />
                  </li>))}
            </ContactsList>
        )    
}

export default Contacts
