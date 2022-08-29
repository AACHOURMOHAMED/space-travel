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

export const getMissions = createAsyncThunk(types.GET_MISSIONS,
  async () => {
    const { data } = await axios.get(`${URL}/missions`);

    const missions = data.map((mission) => ({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      reserved: false,
    }));

    return missions;
  });

export const getReservedMissions = (id) => ({
  type: types.MISSIONS_RESERVED,
  payload: id,
});

export const getDragons = createAsyncThunk(types.GET_DRAGONS,
  async () => {
    const { data } = await axios.get(`${URL}/dragons`);

    const dragons = data.map((dragon) => ({
      id: dragon.id,
      name: dragon.name,
      dragonType: dragon.type,
      image: dragon.flickr_images[0],
      reserved: false,
    }));

    return dragons;
  });

export const getReservedDragons = (id) => ({
  type: types.DRAGONS_RESERVED,
  payload: id,
});
