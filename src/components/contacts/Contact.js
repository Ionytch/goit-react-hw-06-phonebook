import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactSlice";
import PropTypes from "prop-types";


export const Contact = ({ name }) => {
     
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(name.id));

    return (<>
        <p>{name.name}:{name.number}</p>                        
            <button type="button" onClick={handleDelete}>DELETE</button>
    </>)
}

Contact.propTypes = {
    name: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
   };