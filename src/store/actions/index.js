/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as actions from '../types';

const URL = 'https://api.spacexdata.com/v3';

export const getRokets = createAsyncThunk(
  actions.GET_ROKETS,
  async () => {
    const { data } = await axios.get(`${URL}/rockets`);
    const rocketData = data.map((rocket) => ({
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      type: rocket.rocket_type,
      description: rocket.description,
      flickr_images: rocket.flickr_images.sort(() => 0.5 - Math.random()),
    }));
    return rocketData;
  },
);
