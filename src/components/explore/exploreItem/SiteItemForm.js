import classes from "./SiteItemForm.module.css";
import Input from '../../UI/Input';

const SiteItemForm = (props) => {
  return <form className={classes.form}>
      <Input
      input={{
          id : 'date_' + props.id,
          type: 'date',
          min: "2018-07-22"
      }}
      />
      <button>+ wishlist</button>
  </form>;
};
export default SiteItemForm;
