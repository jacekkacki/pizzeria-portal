import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './TablesEventsEdit.module.scss';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const TablesEventsEdit = ({ match }) => (
  <Paper className={styles.component}>
    <h2>TablesEventsEdit view</h2>
    <h3>{`Event id is: ${match.params.id}`}</h3>
    <form className={styles.form} noValidate>
      <TextField
        className={styles.textField}
        id='event-input'
        label='event'
        disabled
        defaultValue='456def'
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
        defaultValue='Company Name'
      />
      <TextField
        className={styles.textField}
        id='phone-input'
        label='Phone number'
        defaultValue='22 222 2222'
      />
      <TextField
        className={styles.textField}
        id='table-input'
        label='Table'
        type='number'
        defaultValue='4'
      />
      <TextField
        className={styles.textField}
        id='period-input'
        label='Duration [h]'
        type='number'
        defaultValue='3'
      />
      <TextField
        className={styles.textField}
        id='people-input'
        label='People'
        type='number'
        defaultValue='6'
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
        Edit event
      </Button>
    </div>
  </Paper>
);

TablesEventsEdit.propTypes = {
  match: PropTypes.object,
};

export default TablesEventsEdit;