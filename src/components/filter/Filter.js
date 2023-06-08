import { useDispatch, useSelector } from "react-redux";
// import { setFilter } from "redux/actions";
import { setFilter } from "redux/filterSlice";
import { FilterStyle } from "./Filter,styled";

export const Filter = () => {
    const dispatch = useDispatch();
    const filtered=useSelector(state => state.filter);
    const changeFilter = e => {
        // e.preventDefault();
        // const form = e.target;
        console.log(e.currentTarget.value);
        dispatch(setFilter(e.currentTarget.value));

        // onSubmit({ name, number });
        //   dispatch(addContact(form.elements.name.value));
        // form.reset();
    
    };


    return (<FilterStyle>
        <h2>filter</h2>
        <form>
            <label for="filter">
                find contacts by name
            </label>
            <input
            type="text"
            name="filter"
            value={filtered}
            onChange={changeFilter}
                
            ></input>
                </form>  
        </FilterStyle>
       
    )
}