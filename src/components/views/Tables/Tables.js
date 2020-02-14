import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';

import Button from '@material-ui/core/Button';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Button component={Link} className={styles.button} color='primary' variant='outlined'
      to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New Booking
    </Button>
    <Button component={Link} className={styles.button} color='primary' variant='outlined'
      to={`${process.env.PUBLIC_URL}/tables/book/123abc`}>Edit Booking
    </Button>
    <Button component={Link} className={styles.button} color='primary' variant='outlined'
      to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Events
    </Button>
    <Button component={Link} className={styles.button} color='primary' variant='outlined'
      to={`${process.env.PUBLIC_URL}/tables/event/456def`}>Edit Event
    </Button>
  </div>
);

export default Tables;