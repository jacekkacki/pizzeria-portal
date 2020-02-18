import React from 'react';
import styles from './Dashboard.module.scss';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const todayRes = [
  {id: '1', name: 'John Smith', hour: '12:00', table: '2', duration: '1', order: '123abc'},
  {id: '2', name: 'Ann Sparrow', hour: '12:00', table: '1', duration: '1', order: '124abc'},
  {id: '3', name: 'Company Name', hour: '12:00', table: '4', duration: '3', order: '125abc'},
  {id: '4', name: 'Peter Doe', hour: '12:30', table: '3', duration: '1', order: '126abc'},
  {id: '5', name: 'July Simson', hour: '13:00', table: '2', duration: '2', order: '127abc'},
  {id: '6', name: 'Lorem Ipsum', hour: '13:00', table: '1', duration: '2', order: '128abc'},
  {id: '7', name: 'Cain Murphy', hour: '14:00', table: '3', duration: '1', order: '129abc'},
  {id: '8', name: 'Margaret Jones', hour: '15:00', table: '4', duration: '2', order: '130abc'},
  {id: '9', name: 'Jacob Brown', hour: '15:00', table: '3', duration: '2', order: '131abc'},
];

const Dashboard = () => (
  <Paper className={styles.component}>
    <h2>Dashboard view</h2>
    <h3>Today statistic</h3>
    <Table className={styles.table}>
      <TableHead>
        <TableRow>
          <TableCell>Orders</TableCell>
          <TableCell>Number</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>
            Remonte Orders
          </TableCell>
          <TableCell>
            12
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Local Orders
          </TableCell>
          <TableCell>
            17
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <h3>Current list of reservations and events</h3>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Number</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Start time</TableCell>
          <TableCell>Table</TableCell>
          <TableCell>Duration in hours</TableCell>
          <TableCell>Number of order</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {todayRes.map(row => (
          <TableRow key={row.id}>
            <TableCell component='th' scope='row'>
              {row.id}
            </TableCell>
            <TableCell>
              {row.name}
            </TableCell>
            <TableCell>
              {row.hour}
            </TableCell>
            <TableCell>
              {row.table}
            </TableCell>
            <TableCell>
              {row.duration}
            </TableCell>
            <TableCell>
              {row.order}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Dashboard;