import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const totalQuantity = useSelector(state=>state.cart.totalQuantity)
  function handleClick() {
    dispatch(uiActions.toggle())
  }
  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
