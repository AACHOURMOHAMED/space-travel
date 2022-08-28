/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as types from '../types';

const URL = 'https://api.spacexdata.com/v3';

export const getRokets = createAsyncThunk(types.GET_ROKETS,
  async () => {
    const { data } = await axios.get(`${URL}/rockets`);
    const rokets = data.map((roket) => ({
      id: roket.id,
      name: roket.rocket_name,
      description: roket.description,
      image: roket.flickr_images[0],
      reserved: false,
    }));
    return rokets;
  });

export const getReservedRokets = (id) => ({
  type: types.ROKETS_RESERVED,
  payload: id,
});
// export const getMissions = createAsyncThunk(types.GET_MISSIONS, {
//   async() {
//     const { data } = axios.get(`${URL}/missions`);
//   },
// });
