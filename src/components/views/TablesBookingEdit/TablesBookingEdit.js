import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './TablesBookingEdit.module.scss';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const TablesBookingEdit = ({ match }) => (
  <Paper className={styles.component}>
    <h2>TablesBookingEdit view</h2>
    <h3>{`Booking id is: ${match.params.id}`}</h3>
    <form className={styles.form} noValidate>
      <TextField
        className={styles.textField}
        id='booking-input'
        label='booking'
        disabled
        defaultValue='123abc'
      />
      <TextField
        id='date'
        label='Select date'
        type='date'
        size='medium'
        defaultValue='2020-02-18'
        className={styles.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id='time'
        label='Select time'
        type='time'
        size='medium'
        defaultValue='12:00'
        className={styles.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        className={styles.textField}
        id='name-input'
        label='Name'
        defaultValue='John Smith'
      />
      <TextField
        className={styles.textField}
        id='phone-input'
        label='Phone number'
        defaultValue='11 111 1111'
      />
      <TextField
        className={styles.textField}
        id='table-input'
        label='Table'
        type='number'
        defaultValue='1'
      />
      <TextField
        className={styles.textField}
        id='period-input'
        label='Duration [h]'
        type='number'
        defaultValue='1'
      />
      <TextField
        className={styles.textField}
        id='people-input'
        label='People'
        type='number'
        defaultValue='2'
      />
    </form>
    <div>
      <Button
        className={styles.button}
        component={Link}
        to={`${process.env.PUBLIC_URL}/tables`}
        type='submit'
        variant='contained'
        color='primary'
      >
        Edit booking
      </Button>
    </div>
  </Paper>
);

TablesBookingEdit.propTypes = {
  match: PropTypes.object,
};

export default TablesBookingEdit;