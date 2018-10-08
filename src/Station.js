import React from 'react';
import styles from './Station.module.css';

const Station = (props) => {
  return (
    <div className={styles.station}>
      <div className={styles.stationHeader}>
        {props.station.extra.description}
      </div>
      <div className={styles.stationBody}>
        <div className={styles.topRow}>
          <div>{props.station.free_bikes}</div>
          <div>{props.station.empty_slots}</div>
        </div>
        <div className={styles.bottomRow}>
          <div>
            {props.station.free_bikes === 1
              ? 'Free Bike'.toLocaleUpperCase()
              : 'Free Bikes'.toLocaleUpperCase()}
          </div>
          <div>
            {props.station.empty_slots === 1
              ? 'Empty Slot'.toLocaleUpperCase()
              : 'Empty Slots'.toLocaleUpperCase()}
          </div>{' '}
        </div>
      </div>
      <div className={styles.stationFooter}>{props.station.timestamp}</div>
    </div>
  );
};

export default Station;
