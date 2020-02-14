import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link 
      to={`${process.env.PUBLIC_URL}/tables/booking/new`}
      className={styles.link}>
       New Booking
    </Link>
    <Link 
      to={`${process.env.PUBLIC_URL}/tables/book/123abc`}
      className={styles.link}>
       Edit Booking
    </Link>
    <Link 
      to={`${process.env.PUBLIC_URL}/tables/events/new`}
      className={styles.link}>
       New Events
    </Link>
    <Link 
      to={`${process.env.PUBLIC_URL}/tables/event/456def`}
      className={styles.link}>
       Edit Event
    </Link>
  </div>
);

export default Tables;