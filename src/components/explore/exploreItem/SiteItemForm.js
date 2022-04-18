import classes from "./SiteItemForm.module.css";
import Input from '../../UI/Input';
import { useRef } from "react";

//TODO: Check date if before the current date and set error state

const SiteItemForm = (props) => {

  const dateInputRef = useRef();

  var today = new Date();
  const currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  const submitHandler = event => {
    event.preventDefault(); //reload page prevented

    const enteredDate  = dateInputRef.current.value;  //.current will point at the input element (value is default prop.)
    if(enteredDate.trim().length === 0){
      console.log("no date entered");
      return;
    }
    props.onAddToWishlist(enteredDate); //only forward date
  };

  return <form className={classes.form} onSubmit={submitHandler} >
      <Input
      ref={dateInputRef}
      label='Date'
      input={{
          id : 'date_' + props.id,
          type: 'date',
          min: currentDate
      }}
      />
      <button>+ wishlist</button>
  </form>;
};
export default SiteItemForm;
