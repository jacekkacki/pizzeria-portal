import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';


const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to="/tables/booking/new" className={styles.link}>New Booking</Link>
    <Link to="/tables/booking/booking/:id" className={styles.link}>Edit Booking</Link>
    <Link to="/tables/events/new" className={styles.link}>New Events</Link>
    <Link to="/tables/events/event/:id" className={styles.link}>Edit Event</Link>
  </div>
);

export default Tables;