import React from 'react';
import { useSelector } from 'react-redux';

const Myprofile = () => {
  const rokets = useSelector((state) => state.rokets);
  const dragons = useSelector((state) => state.dragons);
  const missions = useSelector((state) => state.missions);
  const FilteredRokets = rokets.filter((roket) => roket.reserved === true);
  const FilteredDragons = dragons.filter((dragon) => dragon.reserved === true);
  const FilteredMissions = missions.filter((mission) => mission.reserved === true);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Rockets</h1>
            <ul>
              {FilteredRokets.map((roket) => (
                <li key={roket.id}>{roket.name}</li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <h1>Dragons</h1>
            {/* use bootstarp styles */}
            <ul>
              {FilteredDragons.map((dragon) => (
                <li key={dragon.id}>{dragon.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h1>Missions</h1>
            <ul>
              {FilteredMissions.map((mission) => (
                <li key={mission.id}>{mission.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myprofile;
