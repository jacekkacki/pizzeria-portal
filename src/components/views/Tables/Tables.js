import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const dataTables = [
  {id: '1', time: '12:00', tab1: '124abc', tab2: '123abc', tab3: null, tab4: '125abc', tab5: '129abc', tab6: '126abc'},
  {id: '2', time: '12:30', tab1: '124abc', tab2: '123abc', tab3: null, tab4: '125abc', tab5: '129abc', tab6: '126abc'},
  {id: '3', time: '13:00', tab1: '127abc', tab2: '123abc', tab3: null, tab4: '125abc', tab5: null, tab6: '126abc'},
  {id: '4', time: '13:30', tab1: '127abc', tab2: '123abc', tab3: null, tab4: '125abc', tab5: null, tab6: '126abc'},
  {id: '5', time: '14:00', tab1: '127abc', tab2: null, tab3: '128abc', tab4: '125abc', tab5: '130abc', tab6: '126abc'},
  {id: '6', time: '14:30', tab1: '127abc', tab2: null, tab3: '128abc', tab4: '125', tab5: '130abc', tab6: '126abc'},
  {id: '7', time: '15:00', tab1: null, tab2: null, tab3: '128abc', tab4: null, tab5: '130abc', tab6: null},
];

const Tables = () => (
  <Paper className={styles.component}>
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
        id='date'
        label='Select time'
        type='time'
        size='medium'
        defaultValue='12:00'
        className={styles.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Time</TableCell>
          <TableCell>Table 1</TableCell>
          <TableCell>Table 2</TableCell>
          <TableCell>Table 3</TableCell>
          <TableCell>Table 4</TableCell>
          <TableCell>Table 5</TableCell>
          <TableCell>Table 6</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {dataTables.map(row => (
          <TableRow key={row.id} >
            <TableCell scope='row' component='th'>
              {row.time}
            </TableCell>
            <TableCell>
              {row.tab1 && (
                <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.tab1}`}>
                  {row.tab1}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {row.tab2 && (
                <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.tab2}`}>
                  {row.tab2}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {row.tab3 && (
                <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.tab3}`}>
                  {row.tab3}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {row.tab4 && (
                <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.tab4}`}>
                  {row.tab4}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {row.tab5 && (
                <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.tab5}`}>
                  {row.tab5}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {row.tab6 && (
                <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.tab6}`}>
                  {row.tab6}
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Tables;