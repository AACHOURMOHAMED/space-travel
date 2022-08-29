import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getReservedDragons } from '../../store/actions/index';
import classes from './dragonItem.module.scss';

const DragonItem = (props) => {
  const {
    id, name, type, image, reserved,
  } = props;
  const dispatch = useDispatch();
  const reservedDragon = reserved ? 'Cancle Reservation' : 'Reserve';
  const reservedMsg = reserved ? 'Reserved' : '';

  useEffect(() => {
    dispatch(getReservedDragons(id));
  }, []);
  return (
    <div className={classes.dragon}>
      <img src={image} alt={name} />
      <div className={classes.dragon_info}>
        <h3>{name}</h3>
        <p>{type}</p>
        <span className={classes.reservedMsg}>{reservedMsg}</span>
        <Button
          variant={reserved ? 'danger' : 'success'}
          onClick={() => dispatch(getReservedDragons(id))}
        >
          { reservedDragon }
        </Button>
      </div>
    </div>
  );
};

export default DragonItem;

DragonItem.defaultProps = {
  id: '',
  name: '',
  type: '',
  image: '',
  reserved: false,
};

DragonItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  reserved: PropTypes.bool,
};
