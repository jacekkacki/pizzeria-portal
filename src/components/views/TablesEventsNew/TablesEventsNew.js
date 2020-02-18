import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TablesEventsNew.module.scss';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const TablesEventsNew = () => (
  <Paper className={styles.component}>
    <h2>TablesEventsNew view</h2>
    <form className={styles.form} noValidate>
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
      />
      <TextField
        className={styles.textField}
        id='phone-input'
        label='Phone number'
      />
      <TextField
        className={styles.textField}
        id='table-input'
        label='table'
        type='number'
        defaultValue='1'
      />
      <TextField
        className={styles.textField}
        id='period-input'
        label='Duration [h]'
        type='number'
        defaultValue='2'
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
        New event
      </Button>
    </div>
  </Paper>
);

export default TablesEventsNew;