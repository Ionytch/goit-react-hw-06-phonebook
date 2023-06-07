import { useDispatch, useSelector } from "react-redux";
// import { addContact } from "redux/actions";
import { addContact } from "redux/contactSlice";
import { PhonebookStyle } from "./Phonebook.styled";

export const Phonebook=()=> {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);

  const doesContactExist = newName => {
    return contacts.some(
      contact => contact.name.toLowerCase() === newName.toLowerCase()
    );
  };
    
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        if (doesContactExist(form.elements.name.value))
        {
            alert(
                `user ${form.elements.name.value} is already in the contact list`
            );
            return;
}
        // console.log(e.target.elements.number);
        // console.log(form.elements.name.value, form.elements.number.value);
        dispatch(addContact(form.elements.name.value, form.elements.number.value));
        form.reset();
        };

        return (<PhonebookStyle>
            <h2>PHONEBOOK</h2>
            <form onSubmit={handleSubmit}>
                <label for="name">
                    NAME
                </label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                ></input>
                <label for="number">
                    TEL NUMBER
                </label>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                ></input>
                <button type="submit">ADD CONTACT</button>

            </form>
        </PhonebookStyle>
       
        )
    
}

// export default Phonebook

// onSubmit={this.handleSubmit}