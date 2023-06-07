import { Contact } from "./Contact";
import { ContactsList } from "./Contacts.styled";
import PropTypes from "prop-types";



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

Contacts.propTypes = {
    names: PropTypes.array.isRequired,
};
export default Contacts
