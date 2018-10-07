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
          <div>{'Free Bikes'.toLocaleUpperCase()}</div>
          <div>{'Empty Slots'.toLocaleUpperCase()}</div>{' '}
        </div>
      </div>
      <div className={styles.stationFooter}>{props.station.timestamp}</div>
    </div>
  );
};

export default Station;
