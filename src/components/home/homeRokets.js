/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRokets } from '../../store/actions/index';

const HomeRokets = () => {
  const dispatch = useDispatch();
  const rokets = useSelector((state) => state.rokets);
  useEffect(() => {
    dispatch(getRokets());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {rokets.map((roket) => (
          <li key={roket.id}>
            <h3>{roket.name}</h3>
            <p>{roket.description}</p>
            <img src={roket.flickr_images[0]} alt={roket.name} />
          </li>
        ))}
      </ul>

    </div>

  );
};

export default HomeRokets;
