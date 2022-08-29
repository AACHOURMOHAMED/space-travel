/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import classes from './rokets.module.scss';
import { getRokets } from '../../store/actions';
import RoketsItem from './RoketsItem';

const HomeRokets = () => {
  const rokets = useSelector((state) => state.rokets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rokets.length === 0) {
      dispatch(getRokets());
    }
  }, []);
  return (
    <div className={classes.Rokets}>
      {
        rokets.map((roket) => (
          <RoketsItem
            key={roket.id}
            id={roket.id}
            name={roket.name}
            description={roket.description}
            image={roket.image}
            reserved={roket.reserved}
          />
        ))
      }
    </div>
  );
};

export default HomeRokets;
