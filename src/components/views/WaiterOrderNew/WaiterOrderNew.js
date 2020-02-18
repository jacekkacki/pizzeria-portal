import React from 'react';
import { Link } from 'react-router-dom';
import styles from './WaiterOrderNew.module.scss';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const WaiterOrderNew = () => (
  <Paper className={styles.component}>
    <h2>WaiterOrderNew view</h2>
    <form className={styles.form} noValidate>
      <TextField
        className={styles.textField}
        id='table-input'
        label='Table'
        type='number'
        defaultValue='1'
      />
      <TextField
        className={styles.textField}
        id='products-input'
        label='Product menu'
      />
      <TextField
        className={styles.textField}
        id='starters-input'
        label='Starters'
        defaultValue='Water'
      />
      <TextField
        className={styles.textField}
        id='options-input'
        label='Product option'
      />
      <TextField
        className={styles.textField}
        id='order-input'
        label='Order with options&price'
      />
      <TextField
        className={styles.textField}
        id='price-input'
        label='Cost per order'
      />
    </form>
    <div>
      <Button
        className={styles.button}
        component={Link}
        to={`${process.env.PUBLIC_URL}/waiter`}
        type='submit'
        variant='contained'
        color='primary'
      >
        New order
      </Button>
    </div>
  </Paper>
);

export default WaiterOrderNew;