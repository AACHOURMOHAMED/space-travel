import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDragons } from '../../store/actions/index';
import DragonItem from './DragonItem';
import classes from './dragons.module.scss';

const HomeDragons = () => {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dragons.length === 0) {
      dispatch(getDragons());
    }
  }, []);
  return (
    <div className={classes.dragons}>
      {
            dragons?.map((dragon) => (
              <DragonItem
                key={dragon.id}
                id={dragon.id}
                name={dragon.name}
                type={dragon.dragonType}
                image={dragon.image}
                reserved={dragon.reserved}
              />
            ))
        }
    </div>

  );
};

export default HomeDragons;
