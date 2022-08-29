/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getMissions } from '../../store/actions/index';
import MissionItem from './MissionItem';

const HomeMissions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, []);

  return (
    <div>
      <Table responsive="md" striped hover>
        <thead>
          <tr className="border">
            <th className="border">Mission</th>
            <th className="border">Description</th>
            <th className="border">Status</th>
            <th className="border" style={{ color: '#fff' }}>.</th>
          </tr>
        </thead>
        <tbody>
          {
                 missions?.map((mission) => (
                   <MissionItem
                     key={mission.id}
                     id={mission.id}
                     name={mission.name}
                     description={mission.description}
                     reserved={mission.reserved}
                   />
                 ))

            }
        </tbody>
      </Table>
    </div>
  );
};

export default HomeMissions;
