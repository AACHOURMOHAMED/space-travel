/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { Button, Alert } from 'react-bootstrap';
import { getReservedRokets } from '../../store/actions';
import classes from './RoketsItem.module.scss';

const RoketsItem = (props) => {
  const dispatch = useDispatch();
  const {
    id, name, description, image, reserved,
  } = props;
  const buttonR = reserved ? 'Cancel Reservation' : 'Reserve';
  const reservedMsg = reserved ? 'Reserved' : '';
  const handleReserveButton = () => {
    dispatch(getReservedRokets(id));
  };
  return (
    <ul key={id} className={classes.roketsItem}>
      <li>
        <img src={image} alt={name} className={classes.imageRoket} />
      </li>
      <ul className={classes.roketsContent}>
        <li>
          <p>{name}</p>
        </li>
        <li>
          <p className={classes.reservedMsg}>{reservedMsg}</p>
        </li>
        <li>
          <p>{description}</p>
        </li>
        <li>
          <Button
            type="button"
            onClick={handleReserveButton}
            variant={reserved ? 'outline-secondary' : 'primary'}
          >
            { buttonR }
          </Button>
        </li>
      </ul>
    </ul>
  );
};

export default RoketsItem;

// default props
RoketsItem.defaultProps = {
  id: '',
  name: '',
  description: '',
  image: '',
  reserved: false,
};

// prop types
RoketsItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  reserved: PropTypes.bool,
};
